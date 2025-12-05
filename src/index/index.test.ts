import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Mock console.log
const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("index", () => {
  beforeEach(() => {
    consoleLogSpy.mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should log "Hello, World!" to console', async () => {
    // Re-import to trigger main() execution
    await import("./index.function");

    expect(consoleLogSpy).toHaveBeenCalledWith("Hello, World!");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });
});
