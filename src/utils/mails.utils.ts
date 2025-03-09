import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options);

const email = process.env.MAIL_USER;

type sendEmailDto = {
  sender: string;
  name: string;
  message: string;
};

export const sendMailReseaver = async (dto: sendEmailDto) => {
  const { name, sender, message } = dto;

  const receaverHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: sans-serif">
    <section
      style="
        max-width: 640px;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 32px;
        padding-bottom: 32px;
        margin-left: auto;
        margin-right: auto;
        background-color: #ffffff;
        color: #000000;
      "
    >
      <header style="text-align: center">
        <a href="#" style="display: inline-block">
          <img
            style="width: auto; height: 36px; margin-left: auto; margin-right: auto"
            src="https://raw.githubusercontent.com/ajayxverma/ajay-verma-portfolio/refs/heads/main/public/assets/icons/av-logo.svg"
            alt="Ajay Verma"
          />
        </a>
      </header>

      <main style="margin-top: 32px">
        <h2 style="margin-top: 24px; font-size: 1.5em; font-weight: bold; color: #374151;">Hey Ajay,</h2>

        <p style="margin-top: 8px; line-height: 1.625; color: #4b5563;">
          Ding ding! A new message just landed in your portfolio's inbox. Someone's been checking
          out your awesome work and decided to get in touch.
        </p>
        <p style="margin-top: 8px; line-height: 1.625; color: #4b5563;">Here's the lowdown:</p>
        <ul style="margin-top: 8px; line-height: 1.625; color: #4b5563;">
          <li><strong>Name:</strong> ${name} (Your next connection?)</li>
          <li>
            <strong>Email:</strong> ${email} (Reach out and say
            hello!)
          </li>
          <li><strong>Message:</strong> ${message} (What sparked their interest?)</li>
        </ul>

        <p style="margin-top: 8px; line-height: 1.625; color: #4b5563;">
          Consider this your cue to shine! Dive into their message and see where the conversation
          leads.
        </p>

        <p style="color: #4b5563;">Happy connecting!</p>
        <p style="color: #4b5563;">Best,</p>
        <p style="color: #4b5563;">Your Portfolio's Notification System (Keeping you in the loop!)</p>
      </main>

      <footer style="margin-top: 32px;">
        <h3 style="font-size: 1.5em; font-weight: bold; color: #374151">Connect with me</h3>
        <div
          style="
            display: flex;
            gap: 16px;
          "
        >
            <a href="https://github.com/ajayxverma/">
              <img
                src="https://img.icons8.com/?size=100&id=106564&format=png&color=000000"
                alt="GitHub"
                style="width: auto; height: auto; max-width: 32px; max-height: 32px"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ajayxverma/"
            >
              <img
                src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
                alt="LinkedIn"
                style="width: auto; height: auto; max-width: 32px; max-height: 32px"
              />
            </a>
            <a
              href="https://www.instagram.com/_ajay_verma/"
            >
              <img
                src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"
                alt="instagram"
                style="width: auto; height: auto; max-width: 32px; max-height: 32px"
              />
            </a>
        </div>
        <p style="margin-top: 12px; color: #6b7280">© 2025 Ajay Verma. All Rights Reserved.</p>
      </footer>
    </section>
  </body>
</html>`;
  return await transport.sendMail({
    from: process.env.MAIL_USER, // sender address
    to: process.env.MAIL_USER, // list of receivers
    subject: `Hi bosse!, ${name} mail: ${sender} have reached out to you`, // Subject line
    text: message, // plain text body
    html: receaverHtml, // html body
  });
};

export const sendMailSender = async (dto: sendEmailDto) => {
  const { name, sender, message } = dto;

  const thankYouHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: sans-serif;">
    <section style="max-width: 640px; padding-left: 24px; padding-right: 24px; padding-top: 32px; padding-bottom: 32px; margin-left: auto; margin-right: auto; background-color: #ffffff; color: #000000;">
        <header style="text-align: center;">
        <a href="#" style="display: inline-block">
          <img
            style="width: auto; height: 36px; margin-left: auto; margin-right: auto"
            src="https://raw.githubusercontent.com/ajayxverma/ajay-verma-portfolio/refs/heads/main/public/assets/icons/av-logo.svg"
            alt="Ajay Verma"
          />
        </a>
        </header>
    
        <main style="margin-top: 32px;">
            <h2 style="margin-top: 24px; font-size: 1.5em; font-weight: bold; color: #374151;">Hi ${name},</h2>
    
            <p style="margin-top: 8px; line-height: 1.625; color: #4b5563;">
I wanted to express my sincere gratitude for your time and interest in my portfolio. I understand your time is valuable, and I truly appreciate you taking the opportunity to review my work.
            </br> </br>
Creating impactful and efficient software solutions is my passion, and I'm always eager to explore new challenges. I hope my portfolio effectively showcased my skills and the dedication I bring to each project.
        </br> </br>
Whether you're looking for a collaborative partner or simply exploring potential candidates, I'm open to connecting and discussing how my expertise might align with your needs.
    </br> </br>
Thank you again for your consideration.
            </p>
            <p style="margin-top: 8px; color: #4b5563;">
                Thanks, <br>
                Ajay Verma
            </p>
        </main>
        
    
        <footer style="margin-top: 32px;">
            <h3 style="font-size: 1.5em; font-weight: bold; color: #374151">Connect with me</h3>
            <div
              style="
                display: flex;
                gap: 16px;
              "
            >
                <a href="https://github.com/ajayxverma/">
                  <img
                    src="https://img.icons8.com/?size=100&id=106564&format=png&color=000000"
                    alt="GitHub"
                    style="width: auto; height: auto; max-width: 32px; max-height: 32px"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajayxverma/"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
                    alt="LinkedIn"
                    style="width: auto; height: auto; max-width: 32px; max-height: 32px"
                  />
                </a>
                <a
                  href="https://www.instagram.com/_ajay_verma/"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"
                    alt="instagram"
                    style="width: auto; height: auto; max-width: 32px; max-height: 32px"
                  />
                </a>
            </div>
            <p style="margin-top: 12px; color: #6b7280">© 2025 Ajay Verma. All Rights Reserved.</p>
          </footer>
    </section>
</body>
</html>`;
  return await transport.sendMail({
    from: process.env.MAIL_USER, // sender address
    to: sender, // list of receivers
    subject: `Thank you ${name} for reaching out to me`, // Subject line
    text: message, // plain text body
    html: thankYouHtml, // html body
  });
};
