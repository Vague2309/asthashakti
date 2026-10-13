"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/content/site";
import { supabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const target = contactInfo.emails[1]; // General & volunteering inbox

const INTERESTS = [
  "Volunteering at the center",
  "Internship",
  "Corporate / CSR partnership",
  "Other",
] as const;

type Errors = Partial<Record<"name" | "email" | "interests", string>>;
type Status = "idle" | "submitting" | "success" | "error";

export default function VolunteerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "That doesn't look like a valid email.";
    if (interests.length === 0) next.interests = "Select at least one area of interest.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    const { error } = await supabase.from("volunteer_submissions").insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      interests,
      message: message.trim() || null,
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
    setPhone("");
    setInterests([]);
    setMessage("");
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-border bg-surface-muted p-6">
        <p className="font-medium text-foreground">Thank you for your interest!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ve received your details and will be in touch soon.
        </p>
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
          Something went wrong submitting the form. Please try again, or email us
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
        label="Phone"
        name="phone"
        type="tel"
        hint="Optional"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <fieldset>
        <legend className="mb-1.5 text-sm font-medium text-foreground">
          I&apos;m interested in <span aria-hidden="true" className="text-accent">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {INTERESTS.map((interest) => (
            <label key={interest} className="flex items-center gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                checked={interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
                className="h-4 w-4 rounded border-border accent-primary"
              />
              {interest}
            </label>
          ))}
        </div>
        {errors.interests && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.interests}
          </p>
        )}
      </fieldset>

      <Field
        as="textarea"
        label="Anything else we should know?"
        name="message"
        hint="Optional"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button type="submit" variant="accent" size="lg" className="w-fit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send"}
      </Button>
    </form>
  );
}
