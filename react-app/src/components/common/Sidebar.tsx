import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const menuItems = [
  {
    name: "Dashboard",
    icon: "🏠",
    path: "/dashboard",
  },

  {
    name: "Transfer Money",
    icon: "💸",
    path: "/transfer",
  },

  {
    name: "Transaction History",
    icon: "📄",
    path: "/history",
  },

  {
    name: "Profile",
    icon: "👤",
    path: "/profile",
  },
];

function Sidebar() {
  const { logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/login");
  }

  return (
    <aside
      className="
        w-64
        min-h-screen
        bg-blue-950
        text-white
        p-6
        flex
        flex-col
        "
    >
      {/* Logo */}

      <div
        className="
            mb-10
            "
      >
        <h1
          className="
                text-2xl
                font-bold
                "
        >
          🏦 BANK
        </h1>

        <p
          className="
                text-sm
                text-blue-200
                "
        >
          Simulator
        </p>
      </div>

      {/* Navigation */}

      <nav
        className="
            flex-1
            space-y-3
            "
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `

                            w-full
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            rounded-xl
                            transition

                            ${
                              isActive
                                ? "bg-blue-700 shadow-lg"
                                : "hover:bg-blue-800"
                            }

                        `}
          >
            <span>{item.icon}</span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            hover:bg-red-600
            transition
            text-left
            "
      >
        <span>🚪</span>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
