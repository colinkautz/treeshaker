export default {
    dialect: "postgresql",
    schema: "./src/lib/server/db/schema.js",
    out: ".drizzle",
    dbCredentials: {
        url: process.env.POSTGRES_URL
    }
}