"use client";
import React, { FormEvent, useState } from "react";
import Header from "./Header";
import EmailComponent from "./EmailComponent";

const Contact = () => {
  return (
    <main>
      <Header />
      <p className="text-2xl font-semibold py-10 text-center">
        Or Send me an email
      </p>
      <EmailComponent />
    </main>
  );
};

export default Contact;
