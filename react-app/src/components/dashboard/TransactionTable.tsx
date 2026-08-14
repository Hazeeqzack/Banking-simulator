import { useNavigate } from "react-router-dom";

import { useTransaction } from "../../context/TransactionContext";

import type { Transaction } from "../../types/transaction";

function TransactionTable() {
  const navigate = useNavigate();

  const { transactions } = useTransaction();

  function getStatusStyle(status: Transaction["status"]) {
    switch (status) {
      case "SUCCESS":
        return `
          bg-green-100
          text-green-700
        `;

      case "FAILED":
        return `
          bg-red-100
          text-red-700
        `;

      default:
        return `
          bg-yellow-100
          text-yellow-700
        `;
    }
  }

  return (
    <div
      className="
        bg-white

        rounded-3xl

        shadow-sm

        p-6

        mt-8

        animate-[fadeIn_0.5s_ease-out]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          justify-between
          items-center

          mb-6
        "
      >
        <div>
          <h2
            className="
              text-xl
              font-bold
              text-slate-800
            "
          >
            Recent Transactions
          </h2>

          <p
            className="
              text-sm
              text-slate-400
              mt-1
            "
          >
            Your latest banking activities
          </p>
        </div>

        <button
          onClick={() => navigate("/history")}
          className="
            text-blue-600

            text-sm

            font-semibold

            hover:underline

            transition
          "
        >
          View All
        </button>
      </div>

      {/* Empty State */}

      {transactions.length === 0 ? (
        <div
          className="
              text-center

              py-10

              text-slate-400
            "
        >
          No transactions found
        </div>
      ) : (
        <div
          className="
              space-y-4
            "
        >
          {transactions.slice(0, 5).map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => navigate(`/transaction/${transaction.id}`)}
              className="
                    flex

                    justify-between

                    items-center

                    p-5

                    rounded-2xl

                    bg-slate-50

                    cursor-pointer

                    transition-all

                    duration-300

                    hover:bg-blue-50

                    hover:shadow-md

                    hover:-translate-y-1
                  "
            >
              {/* Transaction Info */}

              <div>
                <h3
                  className="
                        font-semibold

                        text-slate-800
                      "
                >
                  {transaction.description}
                </h3>

                <p
                  className="
                        text-sm

                        text-slate-400

                        mt-1
                      "
                >
                  {transaction.date}
                </p>

                <div
                  className="
                        flex

                        gap-2

                        mt-3
                      "
                >
                  <span
                    className="
                          px-3

                          py-1

                          rounded-full

                          bg-blue-100

                          text-blue-700

                          text-xs

                          font-medium
                        "
                  >
                    TRANSFER
                  </span>

                  <span
                    className={`
                          px-3

                          py-1

                          rounded-full

                          text-xs

                          font-medium

                          ${getStatusStyle(transaction.status)}
                        `}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>

              {/* Amount */}

              <div
                className="
                      text-right
                    "
              >
                <p
                  className="
                        text-lg

                        font-bold

                        text-red-500
                      "
                >
                  - {transaction.amount}
                </p>

                <p
                  className="
                        text-xs

                        text-slate-400

                        mt-1
                      "
                >
                  {transaction.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionTable;
