import { Image } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ICMenuUp } from "sharepoint-golrang-design-system";

export const HeaderPanel = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handelCollapsed = () => setCollapsed(!collapsed);
  return (
    <>
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div
            className={` md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 !w-[100%] justify-end text-end
                ${collapsed ? "flex justify-end text-end" : "hidden "}`}
            dir="ltr"
            id="navbar-collapse"
          >
            <Link
              to="cartable"
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              کارتابل
            </Link>
            <Link
              to="/"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              گزارش
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <Image
              width={200}
              src={"/assets/img/gig-logo-small.png"}
              preview={false}
              className="!w-[50px] font-bold text-xl text-indigo-600"
            />
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
              onClick={handelCollapsed}
            >
              <ICMenuUp className="font-bold text-xl text-indigo-600" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
