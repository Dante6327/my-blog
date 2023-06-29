"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
const EmailComponent = () => {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data", form);
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 전송했습니다!",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일 전송에 실패했습니다! 다시 시도해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <section className="w-full max-w-lg mx-auto">
      {banner && <Banner banner={banner} />}
      <form
        className="mx-auto bg-slate-700 text-lime-100  rounded-md p-2"
        onSubmit={onSubmit}
      >
        <label htmlFor="from">Your Email</label>
        <input
          className="my-1 w-full rounded-md text-black bg-slate-400 px-2 py-1"
          type="email"
          name="from"
          id="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          className="my-1 w-full rounded-md text-black bg-slate-400 px-2 py-1"
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="bg-white text-black mt-1 rounded-md px-2 py-1 resize-none w-full"
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
          rows={10}
          required
          autoComplete="off"
          autoCorrect="off"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 mt-2 w-full rounded-md text-black font-medium"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default EmailComponent;
