import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useTransaction } from "../context/TransactionContext";

function History() {
  const { transactions } = useTransaction();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<"ALL" | "CREDIT" | "DEBIT">("ALL");

  const filteredTransactions = transactions.filter((transaction) => {
    const matchSearch =
      transaction.description.toLowerCase().includes(search.toLowerCase()) ||
      transaction.id.toLowerCase().includes(search.toLowerCase());

    const matchFilter = filter === "ALL" || transaction.type === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div
      className="
      p-8
      "
    >
      <h1
        className="
        text-3xl
        font-bold
        text-gray-800
        mb-6
        "
      >
        Transaction History
      </h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        md:w-96
        px-4
        py-3
        border
        rounded-lg
        mb-5
        "
      />

      {/* Filter */}

      <div
        className="
        flex
        gap-3
        mb-6
        "
      >
        {["ALL", "CREDIT", "DEBIT"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item as "ALL" | "CREDIT" | "DEBIT")}
            className={`
                px-4
                py-2
                rounded-lg
                ${filter === item ? "bg-blue-600 text-white" : "bg-gray-200"}
              `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Table */}

      <div
        className="
        bg-white
        rounded-xl
        shadow
        overflow-hidden
        "
      >
        <table
          className="
          w-full
          "
        >
          <thead
            className="
            bg-gray-100
            "
          >
            <tr>
              <th
                className="
                p-4
                text-left
                "
              >
                ID
              </th>

              <th
                className="
                p-4
                text-left
                "
              >
                Description
              </th>

              <th
                className="
                p-4
                text-left
                "
              >
                Amount
              </th>

              <th
                className="
                p-4
                text-left
                "
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                onClick={() => navigate(`/transaction/${transaction.id}`)}
                className="
                border-t
                hover:bg-gray-50
                cursor-pointer
                "
              >
                <td
                  className="
                  p-4
                  "
                >
                  {transaction.id}
                </td>

                <td
                  className="
                  p-4
                  "
                >
                  {transaction.description}
                </td>

                <td
                  className={`
                  p-4
                  font-semibold
                  ${
                    transaction.type === "CREDIT"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                  `}
                >
                  {transaction.type === "CREDIT" ? "+" : "-"}

                  {transaction.amount}
                </td>

                <td
                  className="
                  p-4
                  "
                >
                  <span
                    className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-green-100
                    text-green-700
                    "
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
