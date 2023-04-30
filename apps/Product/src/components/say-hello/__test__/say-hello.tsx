import {
  render,
  screen,
  renderHook,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SayHello } from "../SayHello";
import { useSay } from "../use-say";
import userEvent from "@testing-library/user-event";

// src/mocks/handlers.js

import { setupServer } from "msw/node";
import { rest } from "msw";

export const posts = [
  {
    userId: 1,
    id: 1,
    title: "first post title",
    body: "first post body",
  },
  {
    userId: 2,
    id: 5,
    title: "second post title",
    body: "second post body",
  },
  {
    userId: 3,
    id: 6,
    title: "third post title",
    body: "third post body",
  },
  {},
];

export const handlers = [
  rest.get("*", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
];

const server = setupServer(...handlers);

describe("suite", () => {
  // Start server before all tests
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

  //  Close server after all tests
  afterAll(() => server.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers());

  it("hook", () => {
    const { result } = renderHook(() => useSay());
    expect(result.current.isOpen).toBe(false);
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(true);
  });

  it("Should return posts when clicking fetch button", async () => {
    render(<SayHello />);

    expect(
      screen.getByRole("heading", {
        name: "MSW Testing Library Example",
        level: 1,
      })
    ).toBeDefined();

    userEvent.click(screen.getByRole("button", { name: "Fetch Posts" }));

    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));

    expect(screen.getByRole("alert").className).toBe("tesssss");
  });
});
