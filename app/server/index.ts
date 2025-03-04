"use server";

import { IContact } from "../lib/data";
import { sendMail } from "../lib/utils/sendMails";
import { emailTemplate } from "../templates";

export const sendMessage = async (emails: string[], data: IContact) => {
  try {
    await sendMail({
      to: emails.join(","),
      subject: `${data.name} has messaged you from the Contact form`,
      html: emailTemplate(data),
    });

    console.log(`✅ Email successfully sent to: ${emails.join(",")}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
