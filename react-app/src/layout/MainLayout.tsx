import { Outlet } from "react-router-dom";

import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

function MainLayout() {
  return (
    <div
      className="
            flex
            min-h-screen
            bg-gray-100
            "
    >
      {/* Sidebar */}

      <Sidebar />

      {/* Right Section */}

      <div
        className="
                flex-1
                "
      >
        {/* Header */}

        <Header />

        {/* Page Content */}

        <main
          className="
                    p-8
                    "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
