# Hammock Property Inspections — Website Guide

This guide covers everything you need to manage your website day-to-day. No coding experience required — just follow the step-by-step instructions.

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

## 4. Replacing the Logo

The website currently uses a text-based logo. When you have a logo image ready, you can swap it in.

### How to Add Your Logo

1. **Prepare your logo** — PNG format with a transparent background, at least 200px wide
2. **Name the file** `logo.png`
3. Go to your GitHub repository → navigate to the **`public`** folder
4. Click **Add file** → **Upload files** → drag and drop your `logo.png`
5. Commit the change
6. Now go to **`src/lib/site-data.json`** and find the `"logo"` section near the top:
   ```
   "logo": {
     "type": "text",
   ```
7. Change `"text"` to `"image"`
8. Commit the change
9. Vercel will rebuild automatically — your logo will appear within about 60 seconds

### Switching Back to Text Logo

If you want to go back to the text-based logo, just change `"type"` from `"image"` back to `"text"` in `site-data.json`.

### Logo Tips

- Use a **horizontal/landscape** logo — it fits best in the header
- **Transparent background** (PNG) works best since the header is white and the footer is dark
- The logo displays at about 40px tall in the header and 32px tall in the footer
- In the footer, the logo is automatically converted to white so it shows on the dark background

---

## 5. Replacing the Favicon (Browser Tab Icon)

The favicon is the small icon that appears in the browser tab next to your page title.

### How to Replace It

1. **Start with a square image** — at least 512x512 pixels
2. Go to **favicon.io** or **realfavicongenerator.net**
3. Upload your image and download the generated `favicon.ico` file
4. In your GitHub repository, navigate to **`src/app/`**
5. Upload the new `favicon.ico`, replacing the existing one
6. Commit the change — Vercel rebuilds automatically

---

## 6. Setting Up Google Analytics

Google Analytics shows you how many people visit your site, which pages they view, and where your traffic comes from.

### Setup Steps

1. Go to **analytics.google.com**
2. Sign in with a Google account (or create one)
3. Click **Start measuring** and create an account for your business
4. Create a **property** for `hammockpropertyinspections.com`
5. Under **Data Streams**, click **Web** and enter your website URL
6. Copy the **Measurement ID** — it starts with `G-` (example: `G-ABC123XYZ`)
7. Go to your **Vercel dashboard** → your project → **Settings** → **Environment Variables**
8. Add a new variable:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: your `G-XXXXXXX` Measurement ID
9. Click **Save**
10. Go to **Deployments** and click **Redeploy** on the latest deployment

### What You'll See

- **Visitor counts** — how many people visit each day/week/month
- **Page views** — which pages are most popular
- **Traffic sources** — how people find your site (Google search, direct, social media, etc.)
- **Location data** — where your visitors are located

Data starts appearing within 24-48 hours after setup.

---

## 7. Setting Up Heatmaps (Microsoft Clarity)

Microsoft Clarity is a free tool that shows you *how* visitors interact with your site — where they click, how far they scroll, and recordings of actual visits.

### Setup Steps

1. Go to **clarity.microsoft.com**
2. Sign in with a Microsoft account (or create one — it's free)
3. Click **New project** and enter `hammockpropertyinspections.com`
4. Copy the **Project ID** from Settings → Overview
5. Go to your **Vercel dashboard** → your project → **Settings** → **Environment Variables**
6. Add a new variable:
   - Name: `NEXT_PUBLIC_CLARITY_ID`
   - Value: your project ID
7. Click **Save**
8. Go to **Deployments** and click **Redeploy** on the latest deployment

### What You'll See

- **Heatmaps** — visual overlay showing where visitors click most
- **Scroll depth** — how far down the page people scroll
- **Session recordings** — watch replays of real visitor sessions
- **Insights** — automatic detection of rage clicks, dead clicks, and other issues

Clarity is completely free with no limits on traffic or recordings.

---

## 8. Vercel Analytics (Built-in)

Vercel provides basic analytics with no setup required.

1. Go to your **Vercel dashboard**
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** if it isn't already turned on

This shows page views, unique visitors, top pages, and web performance scores. The free tier covers everything a site like this needs.

---

## 9. Domain & DNS

- Your domain is pointed to Vercel for hosting
- **SSL certificates** are automatic through Vercel — no action needed
- **Do not change DNS settings** without consulting your developer
- If your domain registrar asks about renewal, renew it — the DNS settings should stay the same

---

## 10. Environment Variables (Vercel)

These are set in the Vercel dashboard under **Settings → Environment Variables**. The contact form and admin page require these to work.

```
RESEND_API_KEY                       — API key from Resend (email delivery)
RESEND_FROM_EMAIL                    — Sender email address
CONTACT_EMAIL                        — Where form submissions are emailed to
NEXT_PUBLIC_SUPABASE_URL             — Your Supabase project URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY — Supabase publishable key (public)
SUPABASE_SECRET_KEY                  — Supabase secret key (private)
NEXT_PUBLIC_SITE_URL                 — Your website URL
NEXT_PUBLIC_GA_MEASUREMENT_ID        — Google Analytics ID (optional)
NEXT_PUBLIC_CLARITY_ID               — Microsoft Clarity ID (optional)
```

The last two (Google Analytics and Clarity) are optional. If you don't set them, those features simply won't load — no errors.

---

## 11. Monthly Cost Summary

| Service | Cost | Notes |
|---------|------|-------|
| **Vercel** (hosting) | Free | Hobby plan — more than enough for this site |
| **Supabase** (database) | Free | Free tier — 500MB storage |
| **Resend** (email) | Free | Up to 3,000 emails/month, 100/day |
| **Google Analytics** | Free | No limits |
| **Microsoft Clarity** | Free | No limits |
| **Domain renewal** | ~$15/year | Renew through your registrar annually |

**Total monthly cost: $0** (domain renewal is the only recurring fee)

If the site grows to very high traffic (10,000+ visitors/month), Vercel or Supabase may eventually require a paid plan. That would be a good problem to have.

---

## 12. What Requires a Developer

You can handle content changes yourself (Section 1), but these changes need a developer:

- Adding new pages or sections to the site
- Changing the page layout or overall design
- Adding new form fields
- Integrating new services (online booking, payment processing, etc.)
- Email template design changes
- Fixing issues caused by a broken edit to `site-data.json`
- Any changes beyond what's in `site-data.json`

---

## 13. Troubleshooting

### Site shows an error after I edited something

1. Go to the file you edited on GitHub
2. Click **History** to see previous versions
3. Click the previous commit → **Revert** to undo your change
4. The site will automatically rebuild

### Form submissions aren't arriving by email

1. Check the **Resend dashboard** (resend.com) for delivery status
2. Check your **spam/junk folder**
3. Form submissions are always saved to Supabase even if email fails — check `/admin`
4. If Resend shows failures, DNS records may need attention — contact your developer

### I can't log into /admin

1. Go to **Supabase Dashboard** → **Authentication** → **Users**
2. Find your admin user → click the three-dot menu
3. Click **Send password recovery** and check your email

### Site looks different or broken

1. **Clear your browser cache** (Ctrl+Shift+Delete on Windows, Cmd+Shift+Delete on Mac)
2. Try opening the site in a **private/incognito window**
3. If it still looks wrong, check Vercel → **Deployments** to see if the latest deployment failed

### Site is down

1. Go to your **Vercel dashboard** → **Deployments**
2. If the latest deployment shows as failed, click **Redeploy** on the last successful one
3. If Vercel itself is down (rare), check **vercel.com/status**
4. If your domain expired, renew it through your registrar — DNS settings should stay the same

---

## 14. Support

- **Content changes** (prices, text, contact info): Edit `site-data.json` yourself — see Section 1
- **Logo or favicon changes**: Follow the steps in Sections 4 and 5
- **Analytics setup**: Follow the steps in Sections 6, 7, and 8
- **Technical issues or new features**: Contact Ethan at (602) 459-1207

As your website developer, I'm available for ongoing maintenance, new features, and technical support. Don't hesitate to reach out.
