/** @type { import { "drizzle-kit" }.Config} */
export default {
  dialect: "postgresql",
  schema: "./configs/schema.js",
  // out: "./drizzle",
  dbCredentials: {
    url: "postgresql://WheelDealsdb_owner:FnTdC9VEXRj5@ep-still-wind-a58lxze6.us-east-2.aws.neon.tech/WheelDealsdb?sslmode=require", // Use the environment variable
  },
};
