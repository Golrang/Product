import { expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import event from "@testing-library/user-event";
import { Unit, UnitInput } from "../Unit";

describe("Unit", () => {
  it("Should render children as text", () => {
    render(<Unit>Click me</Unit>);
    const element = screen.getByRole("button");
    expect(element.textContent).toBe("Click me");
    event.click(element);
    expect(element.textContent).toBe("Clicked");
  });

  it("Should render value as typed in nput", () => {
    const onChange = vi.fn();
    render(<UnitInput placeholder="title" onChange={onChange} />);
    const element: HTMLInputElement = screen.getByPlaceholderText("title");
    event.type(element, "Hello world");
    expect(element.value).toBe("Hello world");
    event.clear(element);
    expect(element.value).toBe("");
  });
});
