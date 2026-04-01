"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const INSPECTION_TYPES = [
  "Full Home Inspection",
  "4-Point Inspection",
  "Wind Mitigation Inspection",
  "4-Point + Wind Mitigation",
  "Pre-Listing Inspection",
  "Homeowner Inspection",
  "Pool & Spa Inspection",
  "Not Sure",
];

const inputClasses =
  "w-full bg-white border border-navy/[0.08] rounded-lg py-3 px-4 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors duration-200";

export default function ContactPage() {
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
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
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
                      className={inputClasses}
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
                      className={inputClasses}
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
                    className={inputClasses}
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
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Inspection Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      defaultValue=""
                      className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10`}
                    >
                      <option value="" disabled>
                        Select type...
                      </option>
                      {INSPECTION_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    Preferred Date / Timeframe
                  </label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    placeholder="e.g. Next week, March 15, ASAP"
                    className={inputClasses}
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
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white text-sm font-semibold px-6 py-3.5 rounded-lg shadow-sm hover:bg-navy-light hover:-translate-y-px hover:shadow-md transition-all duration-250 tracking-[0.01em]"
                >
                  Send Request
                </button>

                <p className="text-[13.5px] text-gray-600 text-center">
                  No obligation. Just tell us what you need.
                </p>
                <p className="text-[12px] text-gray-500 text-center italic">
                  Form functionality coming in Phase 2
                </p>
              </form>
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
                          href="mailto:scott@hammockpropertyinspections.com"
                          className="text-[13.5px] text-teal hover:underline"
                        >
                          scott@hammockpropertyinspections.com
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
                          href="tel:+13215053508"
                          className="text-[13.5px] text-teal hover:underline"
                        >
                          (321) 505-3508
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
                          Florida&apos;s Space Coast
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
