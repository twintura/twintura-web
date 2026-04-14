"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
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
    <main className="bg-primary text-white min-h-screen px-6 py-24">
      <div className="max-w-xl mx-auto">

        <h1 className="h1 mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-base-premium text-center mb-10">
          Have a project in mind? Let’s talk.
        </p>

        {success && (
          <div className="mb-6 text-green-400 text-center">
            Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-card border border-default outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-card border border-default outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded-xl bg-card border border-default outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </main>
  );
}