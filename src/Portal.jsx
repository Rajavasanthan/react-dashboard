import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Portal() {
  return (
    // <div className="container-fluid">
    //   <div className="d-sm-flex align-items-center justify-content-between mb-4">
    //     <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    //     <a
    //       href="#"
    //       className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
    //     >
    //       <i className="fas fa-download fa-sm text-white-50"></i> Generate
    //       Report
    //     </a>
    //   </div>
    //   <div className="row">
    //     {cards.map((card, index) => {
    //       return <Card key={index} data={card} />;
    //     })}
    //   </div>
    // </div>
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portal;
