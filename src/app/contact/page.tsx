"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { inspectionTypes, contact } from "@/lib/content";

const inputClasses =
  "w-full bg-white border border-navy/[0.08] rounded-lg py-3 px-4 text-base sm:text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors duration-200";

const disabledClasses = "disabled:opacity-60 disabled:cursor-not-allowed";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sqft: "",
    address: "",
    city: "",
    inspection_type: "",
    preferred_date: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "name" && !value.trim()) {
      setFieldErrors((prev) => ({ ...prev, name: "Name is required" }));
    }
    if (name === "email") {
      if (!value.trim()) {
        setFieldErrors((prev) => ({ ...prev, email: "Email is required" }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setFieldErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email",
        }));
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Something went wrong. Please try again or call us at (321) 505-3508."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or call us at (321) 505-3508."
      );
    }
  }

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      sqft: "",
      address: "",
      city: "",
      inspection_type: "",
      preferred_date: "",
      message: "",
      website: "",
    });
    setStatus("idle");
    setErrorMessage("");
    setFieldErrors({});
  }

  const isSubmitting = status === "submitting";

  return (
    <>
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1140px] mx-auto">
          <RevealOnScroll>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-teal mb-3">
              Contact
            </p>
            <h1 className="font-heading text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] font-bold text-navy mb-4 max-w-[600px]">
              Request an Inspection
            </h1>
            <p className="text-[15px] text-gray-600 max-w-[560px] leading-relaxed mb-14">
              Tell us about the property and what you need. We&apos;ll respond
              promptly with next steps and pricing confirmation.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14">
            {/* Form */}
            <RevealOnScroll>
              {status === "success" ? (
                <div className="text-center py-16">
                  <svg
                    className="w-16 h-16 text-teal mx-auto mb-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                    Thank you. Your request has been received.
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We will contact you shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-teal font-medium hover:underline text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 relative"
                >
                  {/* Honeypot — invisible to real users */}
                  <div
                    className="absolute left-[-9999px] opacity-0"
                    aria-hidden="true"
                  >
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        className={`${inputClasses} ${disabledClasses}`}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-600 text-xs mt-1">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        className={`${inputClasses} ${disabledClasses}`}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-600 text-xs mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`${inputClasses} ${disabledClasses}`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sqft"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Square Footage
                      </label>
                      <input
                        type="text"
                        id="sqft"
                        name="sqft"
                        placeholder="e.g. 2,000"
                        value={formData.sqft}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`${inputClasses} ${disabledClasses}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`${inputClasses} ${disabledClasses}`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`${inputClasses} ${disabledClasses}`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inspection_type"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Inspection Type
                      </label>
                      <select
                        id="inspection_type"
                        name="inspection_type"
                        value={formData.inspection_type}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`${inputClasses} ${disabledClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10`}
                      >
                        <option value="" disabled>
                          Select type...
                        </option>
                        {inspectionTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred_date"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Preferred Date / Timeframe
                    </label>
                    <input
                      type="text"
                      id="preferred_date"
                      name="preferred_date"
                      placeholder="e.g. Next week, March 15, ASAP"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`${inputClasses} ${disabledClasses}`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Anything else we should know?"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`${inputClasses} ${disabledClasses} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-navy text-white text-sm font-semibold px-6 py-3.5 rounded-lg shadow-sm tracking-[0.01em] transition-all duration-250 ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed animate-pulse"
                        : "hover:bg-navy-light hover:-translate-y-px hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>

                  <p className="text-[13.5px] text-gray-600 text-center">
                    No obligation. Just tell us what you need.
                  </p>
                </form>
              )}
            </RevealOnScroll>

            {/* Sidebar */}
            <RevealOnScroll delay={100}>
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-7 border border-navy/[0.06]">
                  <h2 className="font-heading text-base font-bold text-navy mb-5">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-teal shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-navy">Email</p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-[13.5px] text-teal hover:underline"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-teal shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-navy">Phone</p>
                        <a
                          href={`tel:${contact.phoneRaw}`}
                          className="text-[13.5px] text-teal hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-teal shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-navy">
                          Service Area
                        </p>
                        <p className="text-[13.5px] text-gray-600">
                          {contact.serviceArea}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-7 border border-navy/[0.06]">
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    We respect your time. We&apos;ll respond as quickly as
                    possible with next steps and scheduling availability.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
