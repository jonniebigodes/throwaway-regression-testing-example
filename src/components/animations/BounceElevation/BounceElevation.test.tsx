import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { BounceElevation } from "./BounceElevation";

// Adding a random delay to help surface potential timing-related issues in Chromatic's visual testing

describe("BounceElevation", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<BounceElevation />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("HigherLift - renders with custom liftPx and cycleMs", async () => {
    const screen = await render(<BounceElevation liftPx={52} cycleMs={1800} />);
    expect(screen.container.firstChild).toBeTruthy();
  });
});
