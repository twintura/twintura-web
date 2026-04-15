"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;

  const data = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.ok) {
    setSuccess(true);
    form.reset();
  }

  setLoading(false);
}

  return (
    <main className="bg-primary text-white min-h-screen px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-md sm:max-w-xl mx-auto">

        <h1 className="h1 mb-6 text-center text-3xl sm:text-4xl md:text-5xl">
          Contact Us
        </h1>

        <p className="text-base-premium text-center mb-8 sm:mb-10 text-sm sm:text-base">
          Have a project in mind? Let’s talk.
        </p>

        {success && (
          <div className="mb-6 text-green-400 text-center text-sm sm:text-base">
            Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 sm:p-4 rounded-xl bg-card border border-default outline-none text-sm sm:text-base focus:border-white/30 transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 sm:p-4 rounded-xl bg-card border border-default outline-none text-sm sm:text-base focus:border-white/30 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 sm:p-4 rounded-xl bg-card border border-default outline-none text-sm sm:text-base focus:border-white/30 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base hover:opacity-90 transition active:scale-[0.98]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </main>
  );
}