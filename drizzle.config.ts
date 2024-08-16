import './drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
    /* NOTE: Alternative way with non postgres ur*/
    // host: process.env.POSTGRES_HOST!,
    // database: process.env.POSTGRES_DATABASE!,
    // port: Number(process.env.POSTGRES_PORT!),
    // user: process.env.POSTGRES_USER!,
    // password: process.env.POSTGRES_PASSWORD!,
  },
});