"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { AUTH_HASH } from "@/lib/surfaces";

interface PasswordGateProps {
  onSuccess: () => void;
}

export default function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim() || submitting) return;

    setSubmitting(true);
    setError(false);

    // Small intentional delay — makes the interaction feel deliberate
    await new Promise((r) => setTimeout(r, 320));

    const isValid = btoa(value.trim()) === AUTH_HASH;

    if (isValid) {
      onSuccess();
    } else {
      setError(true);
      setSubmitting(false);
      setValue("");
      inputRef.current?.focus();
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* Lock mark */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D7D2] bg-white">
            <LockIcon />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-[32px] leading-[1.1] text-ink md:text-[36px]">
            Private work
          </h1>
          <p className="mt-3 text-[16px] leading-[1.65] text-ink-secondary">
            This work features real people and real faces —<br />
            so naturally, I can't just let anyone in.<br />
            That said, I might make an exception if you're nice about it.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="relative">
            <input
              ref={inputRef}
              type={visible ? "text" : "password"}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Password"
              autoComplete="current-password"
              spellCheck={false}
              className={`w-full rounded-xl border bg-white px-4 py-3.5 pr-12 text-[16px] text-ink outline-none transition-all duration-150 placeholder:text-ink-disabled focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/10 ${
                error
                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                  : "border-[#D9D7D2]"
              }`}
            />

            {/* Show/hide toggle */}
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setVisible((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-disabled transition-colors hover:text-ink-secondary"
              aria-label={visible ? "Hide password" : "Show password"}
            >
              {visible ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          {/* Error message */}
          <div
            className={`mt-2.5 overflow-hidden transition-all duration-200 ${
              error ? "max-h-8 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-red-500">
              Incorrect password
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!value.trim() || submitting}
            className="relative mt-4 w-full overflow-hidden rounded-xl bg-[#FF6B6B] px-6 py-3.5 text-[16px] font-medium text-white transition-all duration-200 hover:bg-[#e55a5a] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span
              className={`inline-flex items-center gap-2 transition-opacity duration-150 ${
                submitting ? "opacity-0" : "opacity-100"
              }`}
            >
              Enter
              <span className="text-white/70">→</span>
            </span>

            {/* Spinner */}
            {submitting && (
              <span className="absolute inset-0 flex items-center justify-center">
                <SpinnerIcon />
              </span>
            )}
          </button>
        </form>

        {/* Footer note */}
        <p className="mt-8 text-center font-mono text-[12px] uppercase tracking-[0.08em] text-ink-disabled">
          No password?{" "}
          <a
            href="mailto:sidraw24@gmail.com"
            className="transition-colors duration-150 hover:text-ink-secondary"
          >
            Reach out
          </a>
        </p>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="12" height="9" rx="2" stroke="#6B6860" strokeWidth="1.5" />
      <path d="M6 8V5.5a3 3 0 0 1 6 0V8" stroke="#6B6860" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M1 9s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 2l14 14M7.4 7.5A2 2 0 0 0 11 11M5 5.1C2.9 6.5 1 9 1 9s3 5 8 5c1.5 0 2.9-.4 4-1.1M9 4c4.1.4 6.7 3.3 8 5 0 0-.7 1.2-2 2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="animate-spin"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" strokeOpacity="0.25" />
      <path d="M16 9a7 7 0 0 0-7-7" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
