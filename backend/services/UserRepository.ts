import pool from "../config/db";

export async function getUserById(id: number) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
}
