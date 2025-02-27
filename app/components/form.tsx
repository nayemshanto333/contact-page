'use client'


import { Button } from "./Button";
import { Iinput, TextArea,  } from "./input";

export const ContactForm = () => {
  return (
    <div className="space-y-3.5">
      <div className="flex justify-between items-center gap-3.5">
        <Iinput type="text" placeholder="First Name" required />
        <Iinput type="text" placeholder="Last Name" required />
      </div>
      <Iinput type="email" placeholder="Email" required />
      <Iinput placeholder="Phone Number" required />
      <TextArea placeholder="Message" />

      <Button>Send <span className="rotate-45 ">🚀</span></Button>
    </div>
  );
};
