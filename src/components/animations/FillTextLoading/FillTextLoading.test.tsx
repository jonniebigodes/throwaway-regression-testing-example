import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { FillTextLoading } from "./FillTextLoading";

describe("FillTextLoading", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<FillTextLoading />);
    expect(screen.container.firstChild).toBeTruthy();
    await expect.element(screen.getByText("Loading").first()).toBeVisible();
  });

  test("LongLabel - renders with custom label and cycleMs", async () => {
    const screen = await render(
      <FillTextLoading label="Synchronizing" cycleMs={3000} />,
    );
    expect(screen.container.firstChild).toBeTruthy();
    await expect
      .element(screen.getByText("Synchronizing").first())
      .toBeVisible();
  });
});
