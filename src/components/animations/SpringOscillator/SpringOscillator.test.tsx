import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { SpringOscillator } from "./SpringOscillator";

describe("SpringOscillator", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<SpringOscillator />);
    expect(screen.container.firstChild).toBeTruthy();
  });

  test("WiderSpan - renders with custom spanPx", async () => {
    const screen = await render(<SpringOscillator spanPx={80} />);
    expect(screen.container.firstChild).toBeTruthy();
  });
});
