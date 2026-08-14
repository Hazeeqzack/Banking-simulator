import { useParams } from "react-router-dom";

import { useTransaction } from "../context/TransactionContext";

function TransactionDetail() {
  const { id } = useParams();

  const { transactions } = useTransaction();

  const transaction = transactions.find((item) => item.id === id);

  if (!transaction) {
    return (
      <div>
        <h1
          className="
                    text-2xl
                    font-bold
                    "
        >
          Transaction Not Found
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1
        className="
                text-3xl
                font-bold
                mb-6
                "
      >
        Transaction Details
      </h1>

      <div
        className="
                bg-white
                rounded-2xl
                shadow
                p-8
                space-y-5
                "
      >
        <div>
          <p
            className="
                        text-gray-500
                        text-sm
                        "
          >
            Transaction ID
          </p>

          <p
            className="
                        font-semibold
                        "
          >
            {transaction.id}
          </p>
        </div>

        <div>
          <p
            className="
                        text-gray-500
                        text-sm
                        "
          >
            Description
          </p>

          <p
            className="
                        font-semibold
                        "
          >
            {transaction.description}
          </p>
        </div>

        <div>
          <p
            className="
                        text-gray-500
                        text-sm
                        "
          >
            Amount
          </p>

          <p
            className="
                        text-xl
                        font-bold
                        "
          >
            {transaction.amount}
          </p>
        </div>

        <div>
          <p
            className="
                        text-gray-500
                        text-sm
                        "
          >
            Type
          </p>

          <p
            className="
                        font-semibold
                        "
          >
            {transaction.type}
          </p>
        </div>

        <div>
          <p
            className="
                        text-gray-500
                        text-sm
                        "
          >
            Status
          </p>

          <span
            className="
                        inline-block
                        mt-1
                        px-3
                        py-1
                        rounded-full
                        bg-green-100
                        text-green-700
                        text-sm
                        font-medium
                        "
          >
            {transaction.status}
          </span>
        </div>

        <div>
          <p
            className="
                        text-gray-500
                        text-sm
                        "
          >
            Date
          </p>

          <p
            className="
                        font-semibold
                        "
          >
            {transaction.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;
