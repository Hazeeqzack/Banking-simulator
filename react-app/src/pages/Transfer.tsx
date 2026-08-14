import { useState } from "react";

import TransferReview from "../components/transfer/TransferReview";
import toast from "react-hot-toast";

import { useUser } from "../context/UserContext";

function Transfer() {
  const [recipient, setRecipient] = useState("");

  const [amount, setAmount] = useState("");

  const [description, setDescription] = useState("");

  const [showReview, setShowReview] = useState(false);

  const [error, setError] = useState("");

  const { balance } = useUser();

  function handleContinue() {
    const transferAmount = Number(amount);

    if (!recipient) {
      toast.error("Please enter recipient account");

      return;
    }

    if (!amount) {
      setError("Please enter amount");

      return;
    }

    if (transferAmount <= 0) {
      setError("Amount must be greater than 0");

      return;
    }

    if (transferAmount > balance) {
      setError("Insufficient balance");

      return;
    }

    setError("");

    setShowReview(true);
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
        Fund Transfer
      </h1>

      {!showReview && (
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
            <label
              className="
                text-sm
                text-gray-600
              "
            >
              Recipient Account
            </label>

            <input
              className="
                w-full
                mt-2
                border
                rounded-xl
                px-4
                py-3
              "
              placeholder="Enter account number"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

          <div>
            <label
              className="
                text-sm
                text-gray-600
              "
            >
              Amount
            </label>

            <input
              className="
                w-full
                mt-2
                border
                rounded-xl
                px-4
                py-3
              "
              placeholder="RM0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label
              className="
                text-sm
                text-gray-600
              "
            >
              Description
            </label>

            <input
              className="
                w-full
                mt-2
                border
                rounded-xl
                px-4
                py-3
              "
              placeholder="Payment purpose"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {error && (
            <p
              className="
                text-red-500
                text-sm
              "
            >
              {error}
            </p>
          )}

          <button
            onClick={handleContinue}
            className="
              bg-blue-900
              text-white
              px-6
              py-3
              rounded-xl
            "
          >
            Continue
          </button>
        </div>
      )}

      {showReview && (
        <TransferReview
          recipient={recipient}
          amount={amount}
          description={description}
        />
      )}
    </div>
  );
}

export default Transfer;
