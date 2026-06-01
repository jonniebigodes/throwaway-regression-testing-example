import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { ScrambleTextReveal } from "./ScrambleTextReveal";

describe("ScrambleTextReveal", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<ScrambleTextReveal />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("StatusLabels - renders with custom words and timing", async () => {
    const screen = await render(
      <ScrambleTextReveal
        words={["Idle", "Fetching", "Ready"]}
        wordHoldMs={2800}
        scrambleTickMs={40}
      />,
    );
    expect(screen.container.firstChild).toBeTruthy();
  });
});
