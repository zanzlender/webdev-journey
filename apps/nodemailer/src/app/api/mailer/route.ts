import { NextResponse } from "next/server";
import {
  SendAccountActivationMail,
  SendClassroomInvitationMail,
  SendHomeworkNotificationMail,
  SendResetPasswordMail,
  SendTeacherRequestApprovedEmail,
} from "../../../lib/Mailer/index";

export type requestBody = {
  email: string;
  type: "RESET_EMAIL" | "NOTIFICATION" | "ACTIVATION" | "RESET_PASSWORD" | "REQUEST_APPROVED";
};

export async function POST(request: Request) {
  try {
    const body: requestBody = await request.json();

    switch (body.type) {
      case "ACTIVATION": {
        SendAccountActivationMail({
          activationCode: 123456,
          email: body.email,
        });
        break;
      }
      case "NOTIFICATION": {
        SendClassroomInvitationMail({
          classroomName: "Classroom 1",
          link: "https://tasky.study",
          receiver: {
            email: body.email,
          },
          sender: {
            email: body.email,
            first_name: "Lukas",
            last_name: "Podolski",
          },
        });
      }
      case "REQUEST_APPROVED": {
        SendTeacherRequestApprovedEmail({
          email: body.email,
        });
      }
      case "RESET_EMAIL": {
        SendHomeworkNotificationMail({
          closeDate: new Date(),
          startDate: new Date(),
          subject: "Matematika",
          user: {
            email: body.email,
            first_name: "Zan",
            last_name: "Zlender",
          },
        });
      }
      case "RESET_PASSWORD": {
        SendResetPasswordMail({
          email: body.email,
          userId: "45as64das5d4as54da65sd46as5d46as5d4as",
        });
      }
      default: {
        return NextResponse.json(
          { message: "No accepted type passed." },
          { status: 204, statusText: "What is content?", url: "https://tasky.study" }
        );
      }
    }

    return NextResponse.json(
      { message: "E-mail sent successfully." },
      { status: 200, statusText: "SUCCESS", url: "https://tasky.study" }
    );
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error." }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "OK" }, { status: 200 });
}
