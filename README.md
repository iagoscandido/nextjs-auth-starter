# Next.js 15 Auth Starter with Prisma & Neon

A modern, full-stack project demonstrating a complete user authentication and authorization system. This repository uses a cutting-edge stack including Next.js 15 (Canary), Prisma ORM, a Neon serverless Postgres database, and the Better Auth library for handling auth logic.

## Features

**User Authentication:** Full email and password flow including Sign Up and Sign In.
**Session Management:** Secure, server-side session handling.
**Modern UI:** A clean interface built with TailwindCSS and Shadcn/ui: [Shadcn/ui](https://ui.shadcn.com/) [Re/ui](https://ui.shadcn.com/).
**Serverless Database:** Seamless integration with a serverless Postgres instance from [Neon](https://neon.tech/).
**End-to-End Type Safety:** Guaranteed type safety from the database to the UI with Prisma and TypeScript.

## Technologies

**Framework:** [Next.js 15 Canary](https://nextjs.org/)
**Authentication:** [Better Auth](https://www.better-auth.com/)
**ORM:** [Prisma](https://www.prisma.io/)
**Database:** [Neon](https://neon.tech/)
**Styling:** [TailwindCSS](https://tailwindcss.com/)
**Language:** [TypeScript](https://www.typescriptlang.org/)
**UI Components:** [Shadcn/ui](https://ui.shadcn.com/), [Sonner](https://sonner.emilkowal.ski/), [Re/ui](https://reui.io/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

[Node.js](https://nodejs.org/en/) (v20.x or higher recommended)
[pnpm](https://pnpm.io/) (or your preferred package manager)
A free [Neon](https://neon.tech/) account to set up a Postgres database.

### Installation

1.**Clone the repository:**

```bash
git clone https://github.com/iagoscandido/nextjs-auth-starter.git
cd nextjs-auth-starter
```

2.**Install dependencies:**

```bash
pnpm install
```

3 **Set Up Environment Variables:**
*First, create a `.env` file by copying the example file:

```bash
cp .env.example .env
```

Next, open the `.env` file and add your Neon database connection string to the `DATABASE_URL` variable. You can find this string in your Neon project dashboard.

4.**Sync the Database Schema:**
This command will use the Prisma schema to create all the necessary tables in your database, including the tables required by Better Auth.

```bash
npx prisma db push
```

5.**Run the Development Server:**

```bash
pnpm dev
```

6.Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Project Structure

Here is an overview of the key directories in this project:

```
/
├── app/
│   ├── (auth)/             # Auth routes (login, register)
│   ├── api/auth/[...all]/  # Better Auth Mount Handler
│   └── page.tsx            # Main landing page
├── components/
│   ├── auth/               # Login/register form components
│   └── ui/                 # Re-usable Shadcn/ui components
├── lib/
│   ├── auth.ts             # Server-side Better Auth configuration
│   ├── auth-client.ts      # Client-side Better Auth instance
│   └── prisma.ts           # Global Prisma Client instance
│   └── providers.ts        # Global providers configuration
└── prisma/
    └── schema.prisma       # The heart of the project: database schema
```
