import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi.' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to the portfolio owner (notification of new message)
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 Pesan Baru dari ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #d4a574, #b8865c); padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Pesan Baru dari Portfolio</h1>
          </div>
          <div style="padding: 32px; color: #e0e0e0;">
            <div style="margin-bottom: 24px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;">Nama</p>
              <p style="font-size: 18px; margin: 0; color: #fff;">${name}</p>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;">Email</p>
              <p style="font-size: 18px; margin: 0;"><a href="mailto:${email}" style="color: #d4a574; text-decoration: none;">${email}</a></p>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;">Pesan</p>
              <div style="background: #222; border-radius: 8px; padding: 16px; margin-top: 8px;">
                <p style="font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
            <p style="color: #666; font-size: 13px; text-align: center;">
              Balas langsung ke email ini untuk merespon <strong>${name}</strong>.
            </p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Dimas Rizki" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Terima kasih telah menghubungi saya, ${name}! 🙏`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #d4a574, #b8865c); padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Terima Kasih! 🎉</h1>
          </div>
          <div style="padding: 32px; color: #e0e0e0;">
            <p style="font-size: 18px; margin-bottom: 16px;">Halo <strong>${name}</strong>,</p>
            <p style="font-size: 16px; line-height: 1.6; color: #ccc;">
              Terima kasih sudah menghubungi saya melalui portfolio. Saya telah menerima pesan Anda dan akan segera merespon dalam waktu 1-2 hari kerja.
            </p>
            <div style="background: #222; border-radius: 8px; padding: 16px; margin: 24px 0;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Pesan Anda</p>
              <p style="font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap; color: #ccc;">${message}</p>
            </div>
            <p style="font-size: 16px; line-height: 1.6; color: #ccc;">
              Salam hangat,<br />
              <strong style="color: #d4a574;">Dimas Rizki Dwi Saputra</strong>
            </p>
            <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
            <p style="color: #666; font-size: 13px; text-align: center;">
              Frontend Developer & Data Analyst · Indonesia
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email berhasil dikirim!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim email. Silakan coba lagi nanti.' },
      { status: 500 }
    );
  }
}
