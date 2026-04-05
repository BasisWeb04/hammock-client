import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServerSupabaseClient } from "@/lib/supabase";
import { inspectionTypes } from "@/lib/content";

// In-memory rate limiting (resets on cold start — fine for small business site)
const rateLimit = new Map<string, number>();

function getIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function validate(body: Record<string, unknown>) {
  const errors: { field: string; message: string }[] = [];

  const name = body.name;
  if (typeof name !== "string" || !name.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  } else if (name.length > 100) {
    errors.push({ field: "name", message: "Name is too long" });
  }

  const email = body.email;
  if (typeof email !== "string" || !email.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: "email", message: "Invalid email format" });
  } else if (email.length > 254) {
    errors.push({ field: "email", message: "Email is too long" });
  }

  if (body.phone !== undefined && body.phone !== "") {
    if (typeof body.phone !== "string" || body.phone.length > 20) {
      errors.push({ field: "phone", message: "Phone is too long" });
    }
  }

  if (body.address !== undefined && body.address !== "") {
    if (typeof body.address !== "string" || body.address.length > 200) {
      errors.push({ field: "address", message: "Address is too long" });
    }
  }

  if (body.city !== undefined && body.city !== "") {
    if (typeof body.city !== "string" || body.city.length > 100) {
      errors.push({ field: "city", message: "City is too long" });
    }
  }

  if (body.sqft !== undefined && body.sqft !== "") {
    if (typeof body.sqft !== "string" || body.sqft.length > 20) {
      errors.push({ field: "sqft", message: "Square footage is too long" });
    }
  }

  if (body.inspection_type !== undefined && body.inspection_type !== "") {
    if (
      typeof body.inspection_type !== "string" ||
      !inspectionTypes.includes(body.inspection_type)
    ) {
      errors.push({
        field: "inspection_type",
        message: "Invalid inspection type",
      });
    }
  }

  if (body.preferred_date !== undefined && body.preferred_date !== "") {
    if (typeof body.preferred_date !== "string" || body.preferred_date.length > 100) {
      errors.push({ field: "preferred_date", message: "Preferred date is too long" });
    }
  }

  if (body.message !== undefined && body.message !== "") {
    if (typeof body.message !== "string" || body.message.length > 2000) {
      errors.push({ field: "message", message: "Message is too long" });
    }
  }

  return errors.length > 0 ? errors : null;
}

export async function POST(request: NextRequest) {
  // 1. Check env vars
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const contactEmail = process.env.CONTACT_EMAIL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hammockpropertyinspections.com";

  if (!resendKey || !fromEmail || !contactEmail) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your request. Please call us at (321) 505-3508.",
      },
      { status: 500 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  // 3. Honeypot check — silent success for bots
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  // 4. Rate limiting
  const ip = getIP(request);
  const now = Date.now();
  const lastSubmission = rateLimit.get(ip);
  if (lastSubmission && now - lastSubmission < 60_000) {
    return NextResponse.json(
      { success: false, message: "Please wait before submitting again." },
      { status: 429 }
    );
  }
  rateLimit.set(ip, now);

  // Clean old entries to prevent memory growth
  rateLimit.forEach((timestamp, key) => {
    if (now - timestamp > 60_000) rateLimit.delete(key);
  });

  // 5. Validate
  const errors = validate(body);
  if (errors) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  // 6. Extract validated fields
  const name = (body.name as string).trim();
  const email = (body.email as string).trim();
  const phone = ((body.phone as string) || "").trim() || null;
  const address = ((body.address as string) || "").trim() || null;
  const city = ((body.city as string) || "").trim() || null;
  const sqft = ((body.sqft as string) || "").trim() || null;
  const inspection_type = ((body.inspection_type as string) || "").trim() || null;
  const preferred_date = ((body.preferred_date as string) || "").trim() || null;
  const message = ((body.message as string) || "").trim() || null;

  // 7. Save to Supabase (source of truth)
  const supabase = createServerSupabaseClient();
  let submissionId: string | null = null;
  let supabaseSaved = false;

  if (supabase) {
    const { data, error } = await supabase
      .from("submissions")
      .insert({
        name,
        email,
        phone,
        address,
        city,
        sqft,
        inspection_type,
        preferred_date,
        message,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error.message);
    } else {
      submissionId = data.id;
      supabaseSaved = true;
    }
  }

  // 8. Send notification email to business owner
  const resend = new Resend(resendKey);
  let emailSent = false;
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });

  const notificationLines = [
    `New inspection request from hammockpropertyinspections.com`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    address || city
      ? `Property: ${[address, city].filter(Boolean).join(", ")}`
      : null,
    sqft ? `Square Footage: ${sqft}` : null,
    inspection_type ? `Inspection Type: ${inspection_type}` : null,
    preferred_date ? `Preferred Date: ${preferred_date}` : null,
    message ? `\nMessage:\n${message}` : null,
    ``,
    `---`,
    `Submitted at ${timestamp}`,
    `View all submissions: ${siteUrl}/admin`,
  ];

  try {
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `New Inspection Request — ${name}`,
      text: notificationLines.filter((line) => line !== null).join("\n"),
    });
    emailSent = true;
  } catch (err) {
    console.error("Notification email failed:", err);
  }

  // 9. Update email_sent in Supabase
  if (supabase && submissionId && emailSent) {
    await supabase
      .from("submissions")
      .update({ email_sent: true })
      .eq("id", submissionId);
  }

  // 10. Send confirmation email to submitter
  let confirmationSent = false;

  const confirmationLines = [
    `Hi ${name},`,
    ``,
    `Thank you for your inspection request. We've received the following details:`,
    ``,
    address || city
      ? `Property: ${[address, city].filter(Boolean).join(", ")}`
      : null,
    inspection_type ? `Inspection Type: ${inspection_type}` : null,
    preferred_date ? `Preferred Date: ${preferred_date}` : null,
    ``,
    `We'll review your request and contact you shortly with next steps and pricing confirmation.`,
    ``,
    `If you need immediate assistance, call us at (321) 505-3508.`,
    ``,
    `—`,
    `Hammock Property Inspections`,
    `Florida's Space Coast`,
    `hammockpropertyinspections.com`,
  ];

  try {
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Inspection Request — Hammock Property Inspections",
      text: confirmationLines.filter((line) => line !== null).join("\n"),
    });
    confirmationSent = true;
  } catch (err) {
    console.error("Confirmation email failed:", err);
  }

  // 11. Update confirmation_sent in Supabase
  if (supabase && submissionId && confirmationSent) {
    await supabase
      .from("submissions")
      .update({ confirmation_sent: true })
      .eq("id", submissionId);
  }

  // 12. Return result
  if (!supabaseSaved && !emailSent) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to process your request. Please call us at (321) 505-3508.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
