import { expect, vi } from "vitest";
import {
  render,
  screen,
  renderHook,
  act,
  waitFor,
} from "@testing-library/react";
import event from "@testing-library/user-event";
import { Unit, UnitInput } from "../Unit";
import { useSay } from "../use-say";
import { useFetch } from "../use-fetch";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { fetch } from "cross-fetch";
global.fetch = fetch;
export const posts = [
  {
    userId: 10,
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

export const mockServer = setupServer();

const body = {
  id: 1,
  title: `Golrang`,
};

export const mockEndpoint = () => {
  mockServer.use(
    rest.get("*", (req: any, res: any, ctx: any) =>
      res(ctx.status(200), ctx.json(body))
    )
  );
};

describe("Unit", () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());

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

  it("Should render hook and its result", () => {
    const { result } = renderHook(() => useSay());
    expect(result.current.isOpen).toBeFalsy();
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBeTruthy();
  });

  it("Should render async hook and its result", async () => {
    mockEndpoint();
    const { result } = renderHook(() => useFetch());
    expect(result.current.data).not.toBeDefined();
    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(result.current.data).toStrictEqual(body);
  });

  it("Should render async hook and its result loading", async () => {
    mockEndpoint();
    const { result } = renderHook(() => useFetch());
    expect(result.current.loading).toBeTruthy();
    await waitFor(() => expect(result.current.loading).toBeFalsy());
    expect(result.current.loading).toStrictEqual(false);
  });

  it("Should render async hook and its result error", async () => {
    mockServer.use(
      rest.get("*", (req: any, res: any, ctx: any) =>
        res(ctx.status(403), ctx.json({ message: "error" }))
      )
    );
    const { result } = renderHook(() => useFetch());
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).not.toBeDefined();
    await waitFor(() => expect(result.current.loading).toBeFalsy());
    expect(result.current.loading).toStrictEqual(false);
    expect(result.current.error.message).toBe(
      "Request failed with status code 403"
    );
    expect(result.current.data).toBeUndefined();
  });
});
