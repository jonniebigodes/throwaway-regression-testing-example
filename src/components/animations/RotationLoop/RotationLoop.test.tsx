import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { RotationLoop } from "./RotationLoop";

describe("RotationLoop", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<RotationLoop />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("Slower - renders with custom durationMs", async () => {
    const screen = await render(<RotationLoop durationMs={6000} />);
    expect(screen.container.firstChild).toBeTruthy();
  });
});
