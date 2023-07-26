import nodemailer from "nodemailer";
import { GenerateTeacherRequestApprovedEmail } from "./generators/generateTeacherRequestApprovedMail";
import {
  GenerateHomeworkNotificationMail,
  type GenerateHomeworkNotificationMailProps,
} from "./generators/generateHomeworkNotificationMail";
import {
  GenerateActivationCodeEmail,
  type GenerateActivationCodeEmailProps,
} from "./generators/generateMailActivationCode";
import {
  GeneratePasswordResetEmail,
  type GeneratePasswordResetEmailProps,
} from "./generators/generateMailResetPassword";
import {
  GenerateInvitationToClassroomMail,
  type GenerateInvitationToClassroomMailProps,
} from "./generators/generateInvitationToClassroomMail";

const MAILER_ID = "register@tasky.study";
const MAILER_ID2 = "support@tasky.study";
const MAILER_PASSWORD = "MFX3D2VVznWWD5X";

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

type SendTeacherRequestApprovedEmailProps = {
  email: string;
};

/**
 * Send email that the teacher status request has been approved.
 */
export function SendTeacherRequestApprovedEmail({ email }: SendTeacherRequestApprovedEmailProps) {
  const { html, attachments } = GenerateTeacherRequestApprovedEmail();

  const mailOptions = {
    from: `TaskyStudy <${MAILER_ID}>`,
    to: email,
    subject: "Zahtjev za status učitelja",
    text: "Vaš zahtjev je odobren!",
    html: html,
    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (error, done) => {
    if (error) {
      console.log("Error :( ", error);
    } else {
      console.log("Mail was sent to: ", done);
    }
  });
}

/**
 * Send email to the student that he has receivec a new homework
 */
export function SendHomeworkNotificationMail(props: GenerateHomeworkNotificationMailProps) {
  const { html, attachments } = GenerateHomeworkNotificationMail({
    closeDate: props.closeDate,
    startDate: props.startDate,
    subject: props.subject,
    user: props.user,
  });

  const mailOptions = {
    from: `TaskyStudy <${MAILER_ID}>`,
    to: props.user.email,
    subject: "Nova zadaća",
    text: "Dodijeljena ti je nova zadaća",
    html: html,
    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (error, done) => {
    if (error) {
      console.log("Error :( ", error);
    } else {
      console.log("Mail was sent", done);
    }
  });
}

/**
 * Send email to user with the account activation code inside.
 */
export function SendAccountActivationMail(props: GenerateActivationCodeEmailProps) {
  const { html, attachments } = GenerateActivationCodeEmail({
    activationCode: props.activationCode,
    email: props.email,
  });

  const mailOptions = {
    from: `TaskyStudy <${MAILER_ID}>`,
    to: props.email,
    subject: "Potvrda registracije",
    text: "Završite svoju Tasky registraciju",
    html: html,
    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (error, done) => {
    if (error) {
      console.log("Error :( ", error);
    } else {
      console.log("Mail was sent to: ", done);
    }
  });
}

/**
 * Send email with reset password link ot user
 */
export function SendResetPasswordMail(props: GeneratePasswordResetEmailProps) {
  const { html, attachments } = GeneratePasswordResetEmail(props);

  const mailOptions = {
    from: `TaskyStudy <${MAILER_ID}>`,
    to: props.email,
    subject: "Resetiranje lozinke",
    text: "Resetirajte vašu Tasky lozinku",
    html: html,
    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (error, done) => {
    if (error) {
      console.log("Error :( ", error);
    } else {
      console.log("Mail was sent", done);
    }
  });
}

/**
 * Send classroom invitation email to student.
 */
export function SendClassroomInvitationMail(props: GenerateInvitationToClassroomMailProps) {
  const { html, attachments } = GenerateInvitationToClassroomMail(props);

  const mailOptions = {
    from: `TaskyStudy <${MAILER_ID}>`,
    to: props.receiver.email,
    subject: "Tasky - Pozivnica za učionicu",
    text: "Pozvani ste da se pridružite učionici",
    html: html,
    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (error, done) => {
    if (error) {
      console.log("Error :( ", error);
    } else {
      console.log(`Mail was sent to`, done);
    }
  });
}
