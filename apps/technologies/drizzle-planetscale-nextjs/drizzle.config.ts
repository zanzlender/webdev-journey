import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema/*",
  out: "./db/drizzle",
  connectionString: `mysql://y80dikevoh6qzd9q0flq:pscale_pw_X3b407K5ykSZmJ5s36dBoJX0nK7cAaehMtxKimix1L2@aws.connect.psdb.cloud/stanomanija?ssl={"rejectUnauthorized":true}`,
} satisfies Config;
