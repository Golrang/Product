import { Main } from 'layout/main/Main';
import AddSuggestion from 'pages/add-suggestion/AddSuggestion';
import { TestStructure } from 'pages/test-structure';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        // index: true,
        path: 'test-structure',
        element: <TestStructure />,
      },
      {
        // index: true,
        path: 'add-Suggestion',
        element: <AddSuggestion />,
      },
    ],
  },
]);
