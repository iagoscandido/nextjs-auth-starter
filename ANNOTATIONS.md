# Next.js 15 Canary - Better Auth + Prisma + Neon

This project was created to practice **user authentication and authorization** using modern tools like **Next.js 15 Canary**, **Better Auth**, **Prisma ORM**, and **Neon.tech**.

## Tools/Tecnologies

- Next.js 15 Canary
- Better Auth
- Prisma ORM
- Neon Tech (Postgres in the cloud)
- TailwindCSS
- TypeScript
- Shadcn/ui
- Re/ui

## Better Auth

- install Better Auth `pnpm add better-auth`
- create `.env` and set enviroments variable
- create `lib/auth`

## Postgres with PrismaORM and Neon.tech

- setup `postgres` with `neon.tech`
- install prisma `pnpm add prisma --save-dev`
- initialize prisma `npx prisma init`
- create **initial** model
- push database changes `npx prisma db push`
- add `generated` to `.gitignore`
- adjust **scripts** in `package.json`

- create single Prisma Client in `lib/prisma.ts`
- generate auth tables `npx @better-auth/cli generate`
- validade auth models created:
  - `User`
  - `Session`
  - `Account`
  - `Verification`
- push database changes `npx prisma db push`
- create Mount Handler in `app/api/auth/[...all]/route.ts`
- create Client instance in `lib/auth-client.ts`

- Enable Email & Password Authentication
- Create Sign Up Page
  - Create Form `components/auth/register-form.tsx`
  - Log Form Values
- Setup Sonner
- Sign Out User
  - Destructure SignOut Function
- Create Sign In Page
  - Create Form `components/auth/login-form.tsx`
  - Log Form Values
  - Destructure SignIn Function
