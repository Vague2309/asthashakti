"use client";

import { useSyncExternalStore } from "react";

const getYear = () => new Date().getFullYear();
// The year never changes without a full reload, so there's nothing to
// subscribe to — just hand back a no-op unsubscribe.
const subscribe = () => () => {};

/**
 * Renders the current year via `useSyncExternalStore`, which is the
 * correct hook for reading an external, non-React value like the system
 * clock: `getServerSnapshot` supplies a static value for prerendering
 * (Next.js 16's Cache Components reject a bare `new Date()` in render),
 * and `getYear` is read live on the client after hydration.
 */
export default function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getYear, () => 2026);
  return <>{year}</>;
}
