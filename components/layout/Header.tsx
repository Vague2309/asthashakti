"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import { navLinks, donateLink } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on Escape and return focus to the toggle button, as expected for
  // any disclosure widget.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-muted ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={donateLink.href} variant="accent" size="md">
            {donateLink.label}
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-surface-muted lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <div
        id={menuId}
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-border bg-background`}
      >
        <Container as="nav" aria-label="Primary" className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-surface-muted ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href={donateLink.href}
            variant="accent"
            size="md"
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            {donateLink.label}
          </Button>
        </Container>
      </div>
    </header>
  );
}
