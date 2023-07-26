"use client";

import { render } from "@react-email/render";
import { NotionMagicLinkEmail } from "../../lib/Mailer/react-email/test-email";
import { VanillaCSSEmailTest } from "../../lib/Mailer/react-email/test-email_vanilla-css";

const Email = () => {
  const handleOnClick = async () => {
    await fetch("/api/react-email", {
      method: "POST",
    });
  };

  return (
    <div>
      <button
        className="border-white border px-4 py-2 rounded-md hover:bg-pink-600"
        onClick={handleOnClick}
      >
        GENEREATE EMAILS
      </button>

      <div className="mx-auto max-w-3xl text-white mt-20">{render(<VanillaCSSEmailTest />)}</div>
    </div>
  );
};

export default Email;
