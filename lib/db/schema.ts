import { sql } from '@vercel/postgres';

export async function createContactsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        services TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Contacts table created successfully');
  } catch (error) {
    console.error('Error creating contacts table:', error);
    throw error;
  }
}

