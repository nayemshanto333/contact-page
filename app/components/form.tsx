"use client";

import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Button } from "./Button";
import { Iinput, TextArea } from "./input";
import { Iperson } from "../lib/data";

interface contactForm {
  name: string;
  email: string;
  phone: number;
  message: string;
}

const defaultVlaue = {
  name: "",
  email: "",
  phone: 0,
  message: "",
};


type Tprops = {activePerson: Iperson[]}
export const ContactForm:FC<Tprops> = ({}) => {
  const [data, setData] = useState<contactForm>(defaultVlaue);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setData((prev) => ({ ...prev, name: `${firstName} ${lastName}` }));
  }, [firstName, lastName]);

  type inputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  const handleChange = (e: inputEvent) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(data);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(data)
    
  }

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center gap-3.5">
        <Iinput
          type="text"
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Iinput
          type="text"
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Iinput
        type="email"
        placeholder="Email"
        required
        name="email"
        onChange={handleChange}
      />
      <Iinput
        placeholder="Phone Number"
        required
        name="phone"
        onChange={handleChange}
      />
      <TextArea placeholder="Message" name="message" onChange={handleChange} />

      <Button type="submit">
        Send <span className="rotate-45 ">🚀</span>
      </Button>
    </form>
  );
};
