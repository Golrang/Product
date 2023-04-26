import { Link } from "react-router-dom";
import "../../NewDesign.css";

export const HeaderPanel = () => {
  return (
    <>
      <div className="top-bar">
        <div className="intro-x breadcrumb ml-auto hidden sm:flex">
          <Link to="/" className="breadcrumb--active">
            گزارش
          </Link>
          <Link to="cartable" className="breadcrumb--active mr-3">
            کارتابل
          </Link>
        </div>
        <div className="intro-x relative ml-3 sm:ml-6">
          <h2 className="text-lg font-medium">سامانه نظام پیشنهادات</h2>
        </div>
      </div>
    </>
  );
};
