import { Main } from 'layout/main/Main';
import { TestStructure } from 'pages/test-structure';
import { AddSuggestion } from 'pages/add-suggestion';
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
        path: 'add-Suggestion',
        element: <AddSuggestion />
      }
    ],
  },
]);
