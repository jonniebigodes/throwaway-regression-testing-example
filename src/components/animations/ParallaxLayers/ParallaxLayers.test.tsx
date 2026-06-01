import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { ParallaxLayers } from "./ParallaxLayers";

describe("ParallaxLayers", () => {
  test("Horizontal - renders with horizontal axis", async () => {
    const screen = await render(<ParallaxLayers axis="horizontal" />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("Vertical - renders with vertical axis and custom durationMs", async () => {
    const screen = await render(
      <ParallaxLayers axis="vertical" durationMs={4200} />,
    );
    expect(screen.container.firstChild).toBeTruthy();
  });
});
