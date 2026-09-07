import pg from "pg";
const { Pool } = pg;

const rawUrl = process.argv[2];
const url = new URL(rawUrl);
url.searchParams.delete("sslmode");
url.searchParams.delete("supa");

const pool = new Pool({
  connectionString: url.toString(),
  ssl: { rejectUnauthorized: false },
});

try {
  const client = await pool.connect();
  const res = await client.query("SELECT NOW()");
  console.log("SUCCESS:", res.rows);
  client.release();
} catch (err) {
  console.error("CONNECTION ERROR:", err.message);
} finally {
  await pool.end();
}