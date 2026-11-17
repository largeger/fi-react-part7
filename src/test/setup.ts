import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Automatisches Aufräumen des DOMs nach jedem einzelnen Test
afterEach(() => {
  cleanup();
});
