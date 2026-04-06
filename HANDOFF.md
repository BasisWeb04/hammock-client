# Hammock Property Inspections — Website Guide

This guide covers everything you need to manage your website day-to-day.

---

## 1. Updating Content (Prices, Services, Contact Info)

All editable content on the website lives in one file: `src/lib/site-data.json`. You can edit this directly on GitHub without any coding tools.

### How to Edit

1. Go to your repository on GitHub
2. Navigate to `src/lib/site-data.json`
3. Click the **pencil icon** (Edit this file) in the top right
4. Make your changes
5. Click **Commit changes**
6. Vercel will automatically redeploy in about 60 seconds

### What You Can Change

- **Business name and copyright text**
- **Contact information** — email, phone number, service area text
- **Hero section** — headline, subheadline, trust bullets
- **Trust bar items** — the horizontal strip of badges
- **Services** — title and description for each service card
- **Why Choose Us** — each selling point title and description
- **Pricing** — all prices, size ranges, service names, and disclaimer text
- **Process steps** — the 3-step process titles and descriptions
- **Credentials** — the list of qualifications
- **Inspection types** — the dropdown options on the contact form

### Examples

**To change a price:** Find the `pricing` section, locate the size range, and change the `price` value.

**To update the phone number:** Find the `contact` section and change both `phone` (display format) and `phoneRaw` (the `tel:` link format like `+13215053508`).

**To add/remove an inspection type from the dropdown:** Find the `inspectionTypes` array and add or remove items.

### What NOT to Change

- Do not change the **field names** (the words before the colons, like `"businessName"`, `"price"`, etc.)
- Do not remove **commas** between items
- Do not change the **structure** (don't add new sections or remove sections)
- Make sure text values stay inside **quotation marks**

### If Something Breaks

If the site shows an error after an edit:
1. Go back to the file on GitHub
2. Click the **History** button to see past versions
3. Click on the previous commit and use **Revert** to undo your change
4. Or contact your developer for help

---

## 2. Viewing Form Submissions

### Using the Admin Page

1. Go to **hammockpropertyinspections.com/admin**
2. Sign in with your admin email and password
3. You'll see all form submissions listed newest-first

### Managing Submissions

- **Click a submission** to expand and see full details (address, message, etc.)
- **Click the status badge** (New / Read / Contacted) to cycle through statuses
- Use statuses to track which leads you've followed up on
- Email delivery indicators show whether notification and confirmation emails were sent successfully

### Email Notifications

Every form submission also sends an email to scott@hammockpropertyinspections.com with all the submitted details. The submitter also receives a confirmation email automatically.

---

## 3. Supabase Dashboard Access

Supabase stores all form submissions. The admin page at `/admin` is the easiest way to view them, but you can also access Supabase directly.

### Direct Access

1. Go to **https://supabase.com/dashboard**
2. Sign in with your Supabase account
3. Select your project
4. Go to **Table Editor** → **submissions** to see all data

### Resetting Your Admin Password

If you forget your `/admin` login password:
1. Go to Supabase Dashboard → **Authentication** → **Users**
2. Find your admin user
3. Click the three-dot menu → **Send password recovery**
4. Check your email for the reset link

---

## 4. Domain & DNS

- Your domain is pointed to Vercel for hosting
- **SSL certificates** are automatic through Vercel — no action needed
- **Do not change DNS settings** without consulting your developer
- If your domain registrar asks about renewal, renew it — the DNS settings should stay the same

---

## 5. Environment Variables (Vercel)

These are set in the Vercel dashboard under **Settings → Environment Variables**. They are required for the contact form and admin page to work.

```
RESEND_API_KEY          — API key from Resend (email delivery)
RESEND_FROM_EMAIL       — Verified sender email address
CONTACT_EMAIL           — Where form submissions are emailed to
NEXT_PUBLIC_SUPABASE_URL      — Your Supabase project URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY — Supabase publishable key (public)
SUPABASE_SECRET_KEY                  — Supabase secret key (private)
NEXT_PUBLIC_SITE_URL          — Your website URL (https://hammockpropertyinspections.com)
```

---

## 6. Pre-Deployment Checklist

Before going live, complete these steps:

- [ ] All environment variables set in Vercel
- [ ] Supabase schema created (run `supabase/schema.sql` in Supabase SQL Editor)
- [ ] Supabase admin user created (Authentication → Users → Invite)
- [ ] Resend domain verified
- [ ] DNS records pointed to Vercel
- [ ] Test form submission on preview deployment
- [ ] Test notification email delivery
- [ ] Test confirmation email delivery
- [ ] Test /admin login and submission viewing
- [ ] Test on mobile (iPhone Safari)
- [ ] Run Lighthouse audit

---

## 7. Support

- **Content changes** (prices, text, contact info): Edit `site-data.json` yourself — see Section 1
- **Design changes or new features**: Contact Ethan at BasisWeb
- **Urgent issues**: Contact Ethan — [contact info to be provided]
