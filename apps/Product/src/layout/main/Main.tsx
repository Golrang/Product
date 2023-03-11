import { Divider } from 'antd';
import { Outlet, Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <Link to="test-structure">صفحه تست</Link>
      <Divider />
      <Outlet />
    </div>
  );
};
