import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const clientEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting RedStiQ!</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0; 
            padding: 20px; 
            line-height: 1.6;
        }
        .email-container { 
            max-width: 650px; 
            margin: 0 auto; 
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header { 
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            color: white; 
            padding: 40px 30px; 
            text-align: center;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="20" cy="80" r="1" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        .logo-container {
            position: relative;
            z-index: 2;
            margin-bottom: 20px;
        }
        .logo { 
            width: 80px; 
            height: 80px; 
            margin: 0 auto 20px;
            background: linear-gradient(45deg, #ffd700, #ffb347);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            position: relative;
        }
        .logo::after {
            content: '⚡';
            font-size: 36px;
            color: #2c2c2c;
        }
        .header h1 { 
            font-size: 32px; 
            font-weight: 700; 
            margin-bottom: 8px;
            position: relative;
            z-index: 2;
        }
        .header p { 
            font-size: 16px; 
            opacity: 0.95;
            position: relative;
            z-index: 2;
        }
        .content { 
            padding: 40px 30px;
            background: #ffffff;
        }
        .welcome-message {
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            border-left: 4px solid #ff6b6b;
        }
        .welcome-message h2 {
            color: #2c3e50;
            font-size: 24px;
            margin-bottom: 15px;
            font-weight: 600;
        }
        .welcome-message p {
            color: #5a6c7d;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .details-section {
            background: #ffffff;
            border: 1px solid #e1e8ed;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
        }
        .details-title {
            color: #2c3e50;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f1f3f4;
        }
        .detail-item {
            display: flex;
            padding: 12px 0;
            border-bottom: 1px solid #f8f9fa;
        }
        .detail-item:last-child {
            border-bottom: none;
        }
        .detail-label {
            font-weight: 600;
            color: #495057;
            min-width: 100px;
            margin-right: 15px;
        }
        .detail-value {
            color: #2c3e50;
            flex: 1;
        }
        .message-box {
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
            border: 1px solid #dee2e6;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            position: relative;
        }
        .message-box::before {
            content: '"';
            position: absolute;
            top: -10px;
            left: 20px;
            font-size: 60px;
            color: #ff6b6b;
            opacity: 0.3;
            font-family: serif;
        }
        .message-text {
            color: #2c3e50;
            font-size: 16px;
            font-style: italic;
            line-height: 1.7;
            margin-left: 20px;
        }
        .cta-section {
            text-align: center;
            margin: 40px 0;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            color: white;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(255, 107, 107, 0.4);
        }
        .footer {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .footer-content {
            max-width: 500px;
            margin: 0 auto;
        }
        .footer h3 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #ecf0f1;
        }
        .footer p {
            margin-bottom: 10px;
            opacity: 0.9;
        }
        .contact-info {
            background: rgba(255,255,255,0.1);
            color: white !important;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }
        .contact-info a, 
        .contact-info p{
            color: white !important;
        }
        .social-links {
            margin-top: 25px;
        }
        .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            margin: 0 8px;
            line-height: 40px;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        .social-links a:hover {
            background: #ff6b6b;
            transform: translateY(-2px);
        }
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
            margin: 30px 0;
        }
        @media (max-width: 600px) {
            .email-container { margin: 10px; }
            .header, .content, .footer { padding: 25px 20px; }
            .header h1 { font-size: 26px; }
            .details-section { padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo-container">
                <div class="logo"></div>
            </div>
            <h1>RedStiQ Web Solutions</h1>
            <p>Mining for Web Solutions, Crafting Your Success</p>
        </div>
        
        <div class="content">
            <div class="welcome-message">
                <h2>Hello ${data.name}! 👋</h2>
                <p>Thank you for reaching out to RedStiQ Web Solutions. We're excited about the possibility of working together!</p>
                <p>Your message has been received and our team will get back to you within <strong>24 hours</strong>.</p>
            </div>

            <div class="details-section">
                <div class="details-title">📋 Your Submission Details</div>
                <div class="detail-item">
                    <div class="detail-label">Name:</div>
                    <div class="detail-value">${data.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Email:</div>
                    <div class="detail-value">${data.email}</div>
                </div>
                ${
                  data.company
                    ? `
                <div class="detail-item">
                    <div class="detail-label">Company:</div>
                    <div class="detail-value">${data.company}</div>
                </div>
                `
                    : ""
                }
                ${
                  data.service
                    ? `
                <div class="detail-item">
                    <div class="detail-label">Service:</div>
                    <div class="detail-value">${data.service}</div>
                </div>
                `
                    : ""
                }
            </div>

            <div class="message-box">
                <div class="message-text">${data.message}</div>
            </div>

            <div class="divider"></div>

            <div style="text-align: center; margin: 30px 0;">
                <p style="color: #5a6c7d; margin-bottom: 20px;">While you wait, feel free to explore our portfolio and learn more about our services.</p>
            </div>

            <div class="cta-section">
                <a href="https://redstiq.com" class="cta-button">🚀 Visit Our Website</a>
            </div>
        </div>

        <div class="footer">
            <div class="footer-content">
                <h3>Best Regards</h3>
                <p><strong>The RedStiQ Team</strong></p>
                
                <div class="contact-info">
                    <p>📧 contact@redstiq.com</p>
                    <p>🌐 www.redstiq.com</p>
                </div>

                <div class="social-links">
                    <a href="https://www.linkedin.com/company/redstiq" title="LinkedIn">IN</a>
                    <a href="https://github.com/RedStiQ" title="Github">GIT</a>
                </div>
                
                <p style="margin-top: 20px; font-size: 14px; opacity: 0.8;">
                    © ${new Date().getFullYear()} RedStiQ Web Solutions. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;

const adminEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - RedStiQ</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            margin: 0; 
            padding: 20px; 
            line-height: 1.6;
        }
        .email-container { 
            max-width: 700px; 
            margin: 0 auto; 
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .header { 
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            color: white; 
            padding: 30px; 
            text-align: center;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
        }
        .alert-badge {
            background: #f39c12;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 15px;
            position: relative;
            z-index: 2;
        }
        .header h1 { 
            font-size: 28px; 
            font-weight: 700; 
            position: relative;
            z-index: 2;
        }
        .timestamp {
            background: rgba(255,255,255,0.2);
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            margin-top: 15px;
            display: inline-block;
            position: relative;
            z-index: 2;
        }
        .content { 
            padding: 40px 30px;
            background: #ffffff;
        }
        .quick-actions {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 30px;
            text-align: center;
        }
        .quick-actions h3 {
            color: white;
            margin-bottom: 15px;
            font-size: 18px;
        }
        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .action-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .action-btn:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-1px);
        }
        .client-info {
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
            border: 1px solid #dee2e6;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
        }
        .info-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #e9ecef;
        }
        .info-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            margin-right: 15px;
        }
        .info-title {
            color: #2c3e50;
            font-size: 20px;
            font-weight: 600;
        }
        .field-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 25px;
        }
        .field-item {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #e74c3c;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .field-label {
            font-weight: 600;
            color: #7f8c8d;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .field-value {
            color: #2c3e50;
            font-size: 16px;
            font-weight: 500;
        }
        .message-section {
            background: white;
            border: 1px solid #dee2e6;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
        }
        .message-header {
            color: #2c3e50;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .message-header::before {
            content: '💬';
            margin-right: 10px;
        }
        .message-content {
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
            padding: 25px;
            border-radius: 10px;
            border-left: 4px solid #3498db;
            color: #2c3e50;
            font-size: 16px;
            line-height: 1.7;
            font-style: italic;
            position: relative;
        }
        .message-content::before {
            content: '"';
            position: absolute;
            top: -5px;
            left: 15px;
            font-size: 40px;
            color: #3498db;
            opacity: 0.3;
        }
        .priority-indicator {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .priority-high {
            background: #e74c3c;
            color: white;
        }
        .priority-medium {
            background: #f39c12;
            color: white;
        }
        .priority-low {
            background: #27ae60;
            color: white;
        }
        .stats-bar {
            background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
            color: white;
            padding: 20px;
            border-radius: 0 0 12px 12px;
            text-align: center;
        }
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e74c3c, transparent);
            margin: 30px 0;
        }
        @media (max-width: 600px) {
            .email-container { margin: 10px; }
            .header, .content { padding: 25px 20px; }
            .field-grid { grid-template-columns: 1fr; }
            .action-buttons { flex-direction: column; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="alert-badge">🚨 NEW SUBMISSION</div>
            <h1>Contact Form Submission</h1>
            <div class="timestamp">
                📅 ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
            </div>
        </div>
        
        <div class="content">
            <div class="quick-actions">
                <h3>⚡ Quick Actions</h3>
                <div class="action-buttons">
                    <a href="mailto:${
                      data.email
                    }" class="action-btn">📧 Reply to Client</a>
                    <a href="tel:${
                      data.phone || "#"
                    }" class="action-btn">📞 Call Client</a>
                </div>
            </div>

            <div class="client-info">
                <div class="info-header">
                    <div class="info-title">Client Information</div>
                    <div style="margin-left: auto;">
                    </div>
                </div>
                
                <div class="field-grid">
                    <div class="field-item">
                        <div class="field-label">Full Name</div>
                        <div class="field-value">${data.name}</div>
                    </div>
                    <div class="field-item">
                        <div class="field-label">Email Address</div>
                        <div class="field-value">${data.email}</div>
                    </div>
                    ${
                      data.company
                        ? `
                    <div class="field-item">
                        <div class="field-label">Company</div>
                        <div class="field-value">${data.company}</div>
                    </div>
                    `
                        : ""
                    }
                    ${
                      data.service
                        ? `
                    <div class="field-item">
                        <div class="field-label">Service Interest</div>
                        <div class="field-value">${data.service}</div>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>

            <div class="message-section">
                <div class="message-header">Client Message</div>
                <div class="message-content">
                    ${data.message}
                </div>
            </div>

            <div class="divider"></div>

            <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <p style="color: #6c757d; margin-bottom: 10px;">🎯 <strong>Next Steps:</strong></p>
                <p style="color: #495057;">Review the inquiry and respond within 24 hours to maintain our service standard.</p>
            </div>
        </div>

        <div class="stats-bar">
            <p style="margin-bottom: 5px;"><strong>RedStiQ Admin Panel</strong></p>
            <p style="font-size: 14px; opacity: 0.9;">Automated Contact Form System • ${new Date().getFullYear()}</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.verify();

    // Send confirmation email to client
    await transporter.sendMail({
      from: `"RedStiQ Web Solutions" <${
        process.env.MAIL_SENDER || "contact@redstiq.com"
      }>`,
      to: data.email,
      subject: "✨ Thank you for contacting RedStiQ! We'll be in touch soon.",
      html: clientEmailTemplate(data),
    });

    // Send notification to admin
    await transporter.sendMail({
      from: `"RedStiQ Contact System" <${
        process.env.MAIL_SENDER || "contact@redstiq.com"
      }>`,
      to: process.env.MAIL_RECEIVER || "contact@redstiq.com",
      subject: `🚨 New Contact Form Submission from ${data.name} - ${
        data.company || "Individual"
      }`,
      html: adminEmailTemplate(data),
      replyTo: data.email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
