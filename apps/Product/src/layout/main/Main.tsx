import { HeaderPanel } from "layout/header/HeaderPanel";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="main">
      <div className="flex">
        <div className="content">
          <HeaderPanel />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
