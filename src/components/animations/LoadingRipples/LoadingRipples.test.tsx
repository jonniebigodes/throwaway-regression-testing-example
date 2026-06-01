import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { LoadingRipples } from "./LoadingRipples";

describe("LoadingRipples", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<LoadingRipples />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("WarmTone - renders with custom color, ringCount, and cycleMs", async () => {
    const screen = await render(
      <LoadingRipples color="#ea580c" ringCount={4} cycleMs={3000} />,
    );
    expect(screen.container.firstChild).toBeTruthy();
  });
});
