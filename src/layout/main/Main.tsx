import { Divider } from 'antd';
import { Outlet, Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <Link to="cartable">کارتابل</Link>
      <Divider />
      <Outlet />
    </div>
  );
};
