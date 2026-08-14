import { CreditCard, TrendingUp } from "lucide-react";
import { useUser } from "../../context/UserContext";

function BalanceCard() {
  const { balance, currency, accountNumber, status } = useUser();

  return (
    <div
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-slate-900
        via-blue-900
        to-blue-600

        rounded-3xl

        p-8

        text-white

        shadow-2xl

        transition-all
        duration-500

        hover:scale-[1.02]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-16
          -top-16

          w-56
          h-56

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-20
          -left-10

          w-48
          h-48

          rounded-full

          bg-cyan-400/20

          blur-3xl
        "
      />

      {/* Header */}

      <div
        className="
          relative

          flex
          justify-between
          items-start
        "
      >
        <div>
          <p
            className="
            text-blue-200
            text-sm
          "
          >
            Available Balance
          </p>

          <h2
            className="
              text-4xl
              font-bold
              mt-3

              tracking-wide
            "
          >
            {currency}{" "}
            {balance.toLocaleString("en-GB", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
        </div>

        <div
          className="
            w-14
            h-14

            rounded-2xl

            bg-white/10

            flex
            items-center
            justify-center

            backdrop-blur
          "
        >
          <CreditCard size={32} />
        </div>
      </div>

      {/* Account Information */}

      <div
        className="
          relative

          flex
          justify-between

          mt-10
        "
      >
        <div>
          <p
            className="
            text-blue-200
            text-xs
          "
          >
            Account Number
          </p>

          <p
            className="
            font-semibold
            mt-1
            tracking-wider
          "
          >
            **** **** **** {accountNumber.slice(-4)}
          </p>
        </div>

        <div>
          <p
            className="
            text-blue-200
            text-xs
          "
          >
            Status
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              mt-1
            "
          >
            <span
              className="
                w-2
                h-2

                bg-green-400

                rounded-full

                animate-pulse
              "
            />

            <p className="font-semibold">{status}</p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          relative

          mt-8

          flex
          items-center
          gap-2

          text-sm

          text-blue-100

          bg-white/10

          w-fit

          px-4
          py-2

          rounded-xl
        "
      >
        <TrendingUp size={16} />
        +2.4% this month
      </div>
    </div>
  );
}

export default BalanceCard;
