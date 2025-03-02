"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export type ContactState = {
  success?: boolean;
  message?: string;
};

export async function sendMail(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const html = `
                  <!DOCTYPE html>
                  <html>
                  <head>
                      <style>
                          .container {
                              max-width: 600px;
                              margin: 20px auto;
                              padding: 30px;
                              background-color: #1a1a1a;
                              border-radius: 10px;
                              color: #ffffff;
                              font-family: 'Arial', sans-serif;
                          }
                          .header {
                              text-align: center;
                              border-bottom: 2px solid #e74c3c;
                              padding-bottom: 20px;
                              margin-bottom: 25px;
                          }
                          .anime-img {
                              width: 100%;
                              max-width: 400px;
                              border-radius: 8px;
                              margin: 20px 0;
                              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                          }
                          .details {
                              margin: 15px 0;
                              padding: 15px;
                              background-color: #2a2a2a;
                              border-radius: 5px;
                          }
                          .footer {
                              margin-top: 30px;
                              text-align: center;
                              color: #888;
                              font-size: 0.9em;
                          }
                      </style>
                  </head>
                  <body>
                      <div class="container">
                          <div class="header">
                              <h1>🔥 New Message Alert! 🔥</h1>
                              <img src="https://mrwallpaper.com/images/hd/revy-face-paint-black-lagoon-jc94ofgqp35u1ryk.jpg" 
                                  alt="Revy from Black Lagoon" 
                                  class="anime-img">
                          </div>

                          <div class="details">
                              <h2 style="color: #e74c3c; margin-bottom: 15px;">Contact Details:</h2>
                              <p><strong>👤 Name:</strong> ${name}</p>
                              <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
                              <p><strong>🎯 Subject:</strong> ${subject}</p>
                          </div>

                          <div class="details">
                              <h2 style="color: #e74c3c; margin-bottom: 15px;">Message Content:</h2>
                              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
                          </div>

                          <div class="footer">
                              <p>🚀 Sent from Portfolio Contact Form</p>
                              <p>⏰ ${new Date().toLocaleString()}</p>
                          </div>
                      </div>
                  </body>
                  </html>
                  `;

    await transporter.sendMail({
      from: `Portfolio Contact Form <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio] ${subject}`,
      text: message,
      html: html,
    });

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
