import { sql } from "~/db";

const coaches = [
  { name: "Jordan Teague", title: "Ex-hiring manager", bio: "Product hiring guidance from a former hiring manager.", price: 850, specialties: ["Product", "Hiring strategy"] },
  { name: "Rina Mensah", title: "Interview & negotiation coach", bio: "Practical coaching to help you interview with confidence and negotiate your best offer.", price: 950, specialties: ["Interview", "Negotiation"] },
  { name: "David Kowalski", title: "Resume & ATS specialist", bio: "Make your resume clear, compelling, and ready for applicant tracking systems.", price: 700, specialties: ["Resume", "ATS optimization"] },
] as const;

/** Seed the curated coaching partners, safely repeatable on deploy. */
export async function seedCoaches(): Promise<void> {
  for (const coach of coaches) {
    await sql().query(
      `INSERT INTO coaches (name, title, bio, session_price, specialties)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (name) DO UPDATE SET
         title = EXCLUDED.title,
         bio = EXCLUDED.bio,
         session_price = EXCLUDED.session_price,
         specialties = EXCLUDED.specialties`,
      [coach.name, coach.title, coach.bio, coach.price, coach.specialties],
    );
  }
}
