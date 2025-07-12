// File: /api/contact.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    // Log data ke console atau tambahkan penyimpanan/kirim email
    console.log("Contact message:", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // Contoh validasi
    if (!email || !message) {
      return res.status(400).json({ message: "Email dan pesan wajib diisi." });
    }

    // Simulasi sukses
    return res.status(200).json({ message: "Pesan berhasil dikirim!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
