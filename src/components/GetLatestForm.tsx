"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { z } from "zod";

const emailSchema = z.string().email({ message: "Invalid email address" });

const GetLatestForm = () => {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      emailSchema.parse(email);
      setError("");

      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        setSignedUp(true);
        setTimeout(() => setSignedUp(false), 3000); // Reset after 3 seconds
      } else if (response.status >= 500) {
        setError("Server error. Please try again later.");
      } else {
        const data = await response.json();
        setError(data.message || "Error saving email");
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(e.errors[0].message);
      } else {
        setError("Network error. Please check your connection and try again.");
      }
    }
  };

  return (
    <div className="flex flex-1 flex-col items-start gap-4 text-left">
      <h3 className="text-2xl font-semibold sm:text-3xl">Get the Latest</h3>
      <p className="max-w-lg leading-relaxed text-muted-foreground">
        Sign up with your email to receive exclusive news + events for The
        Sahara Grill.
      </p>
      <form
        className="mt-auto flex w-full flex-col gap-3 pt-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          void handleSignUp();
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
          className="h-11 min-h-11 w-full min-w-0 shrink-0 rounded-md border border-input bg-background px-4 text-base sm:flex-1"
        />
        <Button type="submit" className="shrink-0" aria-live="polite">
          {signedUp ? "Signed Up" : "Sign Up"}
        </Button>
      </form>
      {error && (
        <p
          id="newsletter-error"
          role="alert"
          className="w-full text-sm text-[hsl(var(--heading))]"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default GetLatestForm;
