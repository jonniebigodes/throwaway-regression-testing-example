import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { ColorInterpolation } from "./ColorInterpolation";

describe("ColorInterpolation", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<ColorInterpolation />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("SlowerSweep - renders with custom durationMs", async () => {
    const screen = await render(<ColorInterpolation durationMs={6000} />);
    expect(screen.container.firstChild).toBeTruthy();
  });
});
