import { Main } from 'layout/main/Main';
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
    ],
  },
]);
