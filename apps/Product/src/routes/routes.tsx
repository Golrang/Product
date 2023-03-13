import { Main } from "layout/main/Main";
import { AddSuggestion } from "pages/add-suggestion";
import { Cartable } from "pages/cartable";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "cartable",
        element: <Cartable />,
      },
      {
        path: "add-Suggestion",
        element: <AddSuggestion />,
      },
    ],
  },
]);
