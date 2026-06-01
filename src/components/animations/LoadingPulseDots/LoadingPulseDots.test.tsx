import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { LoadingPulseDots } from "./LoadingPulseDots";

describe("LoadingPulseDots", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<LoadingPulseDots />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("Compact - renders with custom dotCount, cycleMs, and color", async () => {
    const screen = await render(
      <LoadingPulseDots dotCount={7} cycleMs={1000} color="#0d9488" />,
    );
    expect(screen.container.firstChild).toBeTruthy();
  });
});
