import { describe, test, expect } from "vitest";
import { render } from "../../../test-setup";
import { BasicAnimation } from "./BasicAnimation";

describe("BasicAnimation", () => {
  test("Default - renders with default props", async () => {
    const screen = await render(<BasicAnimation />);
    expect(screen.container.firstChild).toBeTruthy();
  });
});
