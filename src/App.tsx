import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import FaIR from 'antd/locale/fa_IR';

import { router } from 'routes/routes';
// import logo from './logo.svg';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'IRANSansFaNum',
        },
      }}
      direction="rtl"
      locale={FaIR}
    >
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </RecoilRoot>
    </ConfigProvider>
  );
}

export default App;
