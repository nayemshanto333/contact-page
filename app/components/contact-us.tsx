"use client";

import React, { useState } from "react";
import { Iperson, persons } from "../lib/data";
import { PersonButton, ContactForm } from ".";

const ContactUs = () => {
  const [activePerson, setactivePerson] = useState<Iperson[]>([]);
  console.log(activePerson);

  const isActive = (person: Iperson) => activePerson.includes(person);

  const handleSelect = (person: Iperson) => {
    if (isActive(person)) {
      setactivePerson((prev) => prev.filter((item) => item.id !== person.id));
    } else setactivePerson((prev) => [...prev, person]);
  };
  return (
    <div className="w-full max-w-[506px] mx-auto p-10">
      <h2 className="text-3xl font-semibold leading-[36.31px] tracking-[-2%] ">
        Let&apos; contact Our Team
      </h2>
      <div className="py-3 space-x-2.5">
        {persons.map((item) => (
          <PersonButton
            onClick={() => handleSelect(item)}
            key={item.id}
            className={
              isActive(item) ? "bg-gradient-to-r from-secondary to-primary" : ""
            }
          >
            {item.name}
          </PersonButton>
        ))}
      </div>
      <div className="py-8">
        <ContactForm activePerson={activePerson} />
      </div>
    </div>
  );
};

export default ContactUs;
