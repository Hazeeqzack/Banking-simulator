import BalanceCard from "../components/dashboard/BalanceCard";
import QuickActions from "../components/dashboard/QuickActions";
import TransactionTable from "../components/dashboard/TransactionTable";

import { useUser } from "../context/UserContext";

function Dashboard() {
  const { name } = useUser();

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const today = new Date().toLocaleDateString("en-MY", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="
      min-h-screen

      bg-slate-50

      p-6

      animate-[fadeIn_0.5s_ease-out]
    "
    >
      {/* Greeting */}

      <div
        className="
        mb-8
      "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-slate-800
        "
        >
          {greeting}, {name} 👋
        </h1>

        <p
          className="
          text-slate-500
          mt-2
        "
        >
          {today}
        </p>
      </div>

      {/* Balance */}

      <div
        className="
        mb-8
      "
      >
        <BalanceCard />
      </div>

      {/* Quick Action */}

      <div
        className="
        mb-8
      "
      >
        <QuickActions />
      </div>

      {/* Transaction */}

      <TransactionTable />
    </div>
  );
}

export default Dashboard;
