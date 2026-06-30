// import { Pool } from "pg";
import { pool } from "../server";

export const initDB = async () => {
    try {
        await pool.query(`
                CREATE TABLE IF NOT EXISTS users(
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(20),
                    email VARCHAR(25) NOT NULL,
                    password TEXT,
                    role VARCHAR(20) DEFAULT 'contributor' CHECK (role IN ('admin', 'contributor')),
                    
                    created_at TIMESTAMP DEFAULT NOW(),
                    updated_at TIMESTAMP DEFAULT NOW()
                )
            `);
            console.log("Database connected successfully!");
    } catch (error) {
        console.log(error);
    }
}