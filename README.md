# Latiné Professional Development Directory (LPDD)

A full-stack software application for the Chicago-based non-profit professional
development organizations where visitors can view organizations and events.

## Getting Started

### Install project dependencies

```bash
npm install
```

### Configure environment variables

Create a .env

```bash
cp .env-template .env
```

In the `.env` file, fill in the variables that are need (i.e. db credentials, sendgrid keys, etc)

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

### Database

- PostgreSQL
- Drizzle ORM

You can use a local database installing postgresql and [dbeaver](https://dbeaver.io/download/) applications

```
brew install postgresql
```

Another easier way is to use supabase or render database instances. You can find the env variables in the dashboard for those services.

NOTE: More details [here](drizzle/README.md)
