import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { KeyframeInterruptHover } from "./KeyframeInterruptHover";

describe("KeyframeInterruptHover", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<KeyframeInterruptHover />);
    expect(screen.container.firstChild).toBeTruthy();
    await expect.element(screen.getByText("Keyframe (remount)")).toBeVisible();
    await expect.element(screen.getByText("Hover-like")).toBeVisible();
    await expect
      .element(screen.getByText("Interruptible timing"))
      .toBeVisible();
  });

  test("FasterInterrupts - renders with custom timing", async () => {
    const screen = await render(
      <KeyframeInterruptHover keyframeCycleMs={1200} interruptCycleMs={320} />,
    );
    expect(screen.container.firstChild).toBeTruthy();
    await expect.element(screen.getByText("Hover-like")).toBeVisible();
  });
});
