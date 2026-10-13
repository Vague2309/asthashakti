"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/content/site";
import { supabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const target = contactInfo.emails[1]; // General & volunteering inbox

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "That doesn't look like a valid email.";
    if (!message.trim()) next.message = "Please enter a message.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    const { error } = await supabase
      .from("contact_submissions")
      .insert({ name: name.trim(), email: email.trim(), message: message.trim() });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-border bg-surface-muted p-6">
        <p className="font-medium text-foreground">Thank you — your message has been sent.</p>
        <p className="mt-1 text-sm text-muted-foreground">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <p className="text-sm text-muted-foreground">
        Prefer email directly?{" "}
        <a href={`mailto:${target.address}`} className="text-primary hover:underline">
          {target.address}
        </a>
      </p>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong sending your message. Please try again, or email us
          directly at {target.address}.
        </p>
      )}

      <Field
        label="Your name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <Field
        label="Your email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <Field
        as="textarea"
        label="Message"
        name="message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={errors.message}
      />

      <Button type="submit" variant="accent" size="lg" className="w-fit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
