import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAILER_ID = "register@tasky.study";
const MAILER_ID2 = "support@tasky.study";
const MAILER_PASSWORD = "MFX3D2VVznWWD5X";

export async function POST(request: Request) {
  // Create nodemailer transporter for sending emails
  const transporter = nodemailer.createTransport({
    host: "cp4.infonet.hr",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: MAILER_ID, // generated ethereal user
      pass: MAILER_PASSWORD, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `TaskyStudy <${MAILER_ID}>`,
    to: "a1zan.zlender@gmail.com",
    subject: "Zahtjev za status učitelja",
    text: "Vaš zahtjev je odobren!",
    html: myEmailHTMLVanillaCSS,
  };

  transporter.sendMail(mailOptions, (error, done) => {
    if (error) {
      console.log("Error :( ", error);
    } else {
      console.log("Mail was sent to: ", done);
    }
  });

  const mailOptions2 = {
    from: `TaskyStudy <${MAILER_ID}>`,
    to: "zan.zlender@rodiger.com",
    subject: "Zahtjev za status učitelja",
    text: "Vaš zahtjev je odobren!",
    html: myEmailHTMLVanillaCSS,
  };

  transporter.sendMail(mailOptions2, (error, done) => {
    if (error) {
      console.log("Error :( ", error);
    } else {
      console.log("Mail was sent to: ", done);
    }
  });

  try {
    return NextResponse.json(
      { message: "E-mail created successfully." },
      { status: 200, statusText: "SUCCESS", url: "https://tasky.study" }
    );
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error." }, { status: 400 });
  }
}

const myEmailHTML = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<html lang="en">
  <head data-id="__react-email-head">
    <style>
      @font-face {
        font-family: "Comfortaa";
        font-style: normal;
        font-weight: 400;
        mso-font-alt: "Verdana";
        src: url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap)
          format("embedded-opentype");
      }
      * {
        font-family: "Comfortaa", Verdana;
      }
    </style>
  </head>
  <div
    id="__react-email-preview"
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    Log in with this magic link
    <div>
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
    </div>
  </div>
  <body data-id="__react-email-body" style="background-color: #fffeb7">
    <table
      align="center"
      width="100%"
      data-id="__react-email-container"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="
        max-width: 42rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      "
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <img
              data-id="react-email-img"
              src="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
              width="300"
              style="
                display: block;
                outline: none;
                border: none;
                text-decoration: none;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 5rem;
              "
            />
            <h1
              data-id="react-email-heading"
              style="
                color: rgb(234, 88, 12);
                font-weight: 700;
                text-align: center;
                font-size: 1.875rem;
                line-height: 2.25rem;
                margin-bottom: 2.5rem;
              "
            >
              Login
            </h1>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: rgb(51, 65, 85);
                margin-bottom: 1rem;
              "
            >
              If you didn&#x27;t try to login, you can safely ignore this email.
            </p>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: rgb(51, 65, 85);
                margin-bottom: 1rem;
                text-align: center;
              "
            >
              Klikni na gumb ispod i odvesti će te do stranice gdje možeš kreirati novu lozinku :)
            </p>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: rgb(51, 65, 85);
                margin-bottom: 1rem;
              "
            >
              Or, copy and paste this temporary login code:
            </p>
            <table
              align="center"
              width="100%"
              data-id="__react-email-container"
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                max-width: 37.5em;
                margin-top: 2.5rem;
                padding-left: 2.5rem;
                padding-right: 2.5rem;
                margin-left: auto;
                margin-right: auto;
                padding-top: 1.5rem;
                padding-bottom: 1.5rem;
                border-width: 2px;
                border-color: rgb(234, 88, 12);
                border-style: dashed;
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                align-items: center;
                width: fit-content;
              "
            >
              <tbody>
                <tr style="width: 100%">
                  <td>
                    <p
                      data-id="react-email-text"
                      style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        display: inline;
                        font-weight: 600;
                      "
                    >
                      Code:
                    </p>
                    <p
                      data-id="react-email-text"
                      style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        display: inline;
                        font-weight: 700;
                      "
                    >
                      123456
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

`;

const myEmailHTMLVanillaCSS = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<html lang="en">
  <head data-id="__react-email-head">
    <style>
      @font-face {
        font-family: "Comfortaa";
        font-style: normal;
        font-weight: 400;
        mso-font-alt: "Verdana";
        src: url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap)
          format("embedded-opentype");
      }
      * {
        font-family: "Comfortaa", Verdana;
      }
    </style>
  </head>
  <div
    id="__react-email-preview"
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    Log in with this magic link
    <div>
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
    </div>
  </div>
  <body data-id="__react-email-body" style="background-color: #fffeb7">
    <table
      align="center"
      width="100%"
      data-id="__react-email-container"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="
        max-width: 672px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
      "
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <img
              data-id="react-email-img"
              src="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
              width="300"
              style="
                display: block;
                outline: none;
                border: none;
                text-decoration: none;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 80px;
              "
            />
            <h1
              data-id="react-email-heading"
              style="
                color: #e47309;
                font-weight: bolder;
                text-align: center;
                font-size: 36px;
                margin-bottom: 40px;
              "
            >
              Login
            </h1>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: #333333;
                margin-bottom: 16px;
              "
            >
              If you didn&#x27;t try to login, you can safely ignore this email.
            </p>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: #333333;
                margin-bottom: 16px;
                text-align: center;
              "
            >
              Klikni na gumb ispod i odvesti će te do stranice gdje možeš kreirati novu lozinku :)
            </p>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: #333333;
                margin-bottom: 16px;
              "
            >
              Or, copy and paste this temporary login code:
            </p>
            <table
              align="center"
              width="100%"
              data-id="__react-email-container"
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                max-width: 37.5em;
                margin-top: 40px;
                padding: 24px 40px;
                margin-left: auto;
                margin-right: auto;
                border: 2px dashed #e47309;
                display: flex;
                gap: 2px;
                justify-content: center;
                align-items: center;
                width: fit-content;
              "
            >
              <tbody>
                <tr style="width: 100%">
                  <td>
                    <p
                      data-id="react-email-text"
                      style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        display: inline;
                        font-weight: bold;
                      "
                    >
                      Code:
                    </p>
                    <p
                      data-id="react-email-text"
                      style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        display: inline;
                        font-weight: bold;
                      "
                    >
                      123456
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

`;
