import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { transferMoney } from "../../api/transferApi";

import { useUser } from "../../context/UserContext";

interface TransferReviewProps {
  recipient: string;

  amount: string;

  description: string;
}

function TransferReview({
  recipient,

  amount,

  description,
}: TransferReviewProps) {
  const navigate = useNavigate();

  const { balance, fetchAccount } = useUser();

  async function handleConfirm() {
    const transferAmount = Number(amount);

    if (transferAmount > balance) {
      toast.error("Insufficient balance");

      return;
    }

    try {
      const response = await transferMoney({
        fromAccount: "1234567890",

        toAccount: recipient,

        amount: transferAmount,

        description,
      });

      toast.success(response.message);

      await fetchAccount();

      navigate("/dashboard");
    } catch (error) {
      console.error("Transfer failed:", error);

      toast.error("Transfer failed");
    }
  }

  return (
    <div>
      <h2
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Review Transfer
      </h2>

      <div
        className="
          bg-white
          rounded-2xl
          shadow
          p-8
          space-y-5
        "
      >
        <p>Recipient: {recipient}</p>

        <p>Amount: RM{amount}</p>

        <p>Description: {description}</p>

        <button
          onClick={handleConfirm}
          className="
            bg-green-600
            text-white
            px-6
            py-3
            rounded-xl
          "
        >
          Confirm Transfer
        </button>
      </div>
    </div>
  );
}

export default TransferReview;
