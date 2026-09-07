import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.argv[2],
  ssl: { rejectUnauthorized: false },
});

try {
  const client = await pool.connect();
  const res = await client.query("SELECT NOW()");
  console.log("SUCCESS:", res.rows);
  client.release();
} catch (err) {
  console.error("CONNECTION ERROR:", err.message);
  console.error(err);
} finally {
  await pool.end();
}