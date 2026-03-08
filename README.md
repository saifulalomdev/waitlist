# TrackFlow

A fast, lightweight, and production-ready **waitlist system** for modern product launches.

🌐 **Live Demo:** https://waitlist.saifulalom.com

TrackFlow is not just a landing page — it’s a **backend-first foundation** designed to capture early users while providing a clean architecture that can grow into a full product.

Built with performance, simplicity, and ownership in mind.

---

## ✨ Why This Project Exists

Many startups rely on third-party waitlist services or embedded scripts. These often introduce problems:

- Slower website performance
- Loss of control over user data
- Dependence on external platforms

TrackFlow takes a different approach.

Everything runs inside **your own project**, which means:

- ⚡ **Faster pages**
- 🔒 **Full ownership of your user data**
- 🧩 **No dependency on external SaaS tools**

This makes it ideal for **early-stage startups and product launches**.

---

## 🚀 Why Waitlists Matter

For many products, the waitlist is the **first interaction a potential user has with your brand**.

A slow or unreliable signup experience can lose users before they even join.

TrackFlow focuses on the fundamentals:

- **Speed** – fast page load and quick form submission  
- **Reliability** – signups stored safely  
- **Scalability** – designed to grow with your product  
- **Ownership** – your data stays with you  

This lets teams focus on **validating their idea and building the product**, not fighting infrastructure.

---

## 🧱 Built as a Full-Stack Starter

Although the project focuses on a waitlist, it is structured as a **starter foundation for a full product**.

The same architecture can grow into:

- SaaS dashboards
- Product launch platforms
- Startup landing pages
- Full web applications

It starts simple but is **designed to scale with your product**.

---

## 🛠 Tech Stack

- **Framework:** Astro  
- **UI Library:** React  
- **Forms:** React Hook Form  
- **Database ORM:** Drizzle ORM  
- **Validation:** Zod + drizzle-zod  
- **UI Components:** shadcn/ui  
- **Styling:** Tailwind CSS  

This stack keeps the project **fast, modular, and easy to maintain**.

---

## ⚖️ Why Not Next.js?

Next.js was actually the **first option considered during development**.

It is a powerful framework and works extremely well within the **Vercel ecosystem**. However, for this project a different approach made more sense.

### Trade-offs with Next.js

- Heavier client-side React runtime  
- More framework overhead for simple pages  
- Some advanced features are tightly integrated with **Vercel**

### Why Astro Was Chosen

Astro focuses on **shipping less JavaScript by default**, which keeps pages fast.

Benefits include:

- **Minimal JavaScript by default**
- **Better performance for content-heavy pages**
- **Flexible component usage (React when needed)**

Most importantly, Astro is **cloud-agnostic**.

---

## 🌍 Deployment Flexibility

One of the main goals of TrackFlow is **platform independence**.

While **Next.js works best on Vercel**, Astro applications can run almost anywhere.

You can deploy this project on:

- **Cloudflare Pages**
- **Vercel**
- **Netlify**
- **Traditional VPS**
- **Edge platforms**
- **Static hosting environments**

This allows teams to **choose infrastructure based on cost, performance, or preference**.

---

## ⚙️ Automated Deployments with GitHub Actions

This repository includes **GitHub Actions** to automate development workflows.

Whenever code is pushed:

1. The project builds automatically  
2. Checks run to ensure everything works  
3. The latest version is deployed  

Benefits:

- Faster releases
- Fewer manual errors
- Reliable deployments

This ensures a **smooth and consistent development workflow**.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/saifulalomdev/waitlist.git
cd waitlist

pnpm install

```


2. **Database Setup**
```bash
pnpm wrangler d1 migrations apply DB --local

```


3. **Development**
```bash
pnpm run dev

```