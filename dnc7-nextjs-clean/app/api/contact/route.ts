import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Zorunlu alanlar eksik.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'DNC7 İletişim <onboarding@resend.dev>',
      to: ['info@dnc7.com'],
      replyTo: email,
      subject: subject ? `[DNC7] ${subject}` : `[DNC7] Yeni Mesaj — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #111; margin-bottom: 24px;">Yeni İletişim Mesajı</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0; color:#666; width:100px">Ad Soyad:</td><td style="padding:8px 0; font-weight:600">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0; color:#666">E-posta:</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${subject ? `<tr><td style="padding:8px 0; color:#666">Konu:</td><td style="padding:8px 0">${subject}</td></tr>` : ''}
          </table>
          <div style="margin-top:24px; padding:20px; background:#fff; border-radius:8px; border-left:4px solid #F97316;">
            <p style="color:#333; line-height:1.7; white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:24px; font-size:12px; color:#999;">Bu mesaj dnc7.com iletişim formu üzerinden gönderilmiştir.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Mesaj gönderilemedi, lütfen tekrar deneyin.' }, { status: 500 });
  }
}
