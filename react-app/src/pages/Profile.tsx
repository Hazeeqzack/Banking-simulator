import { useUser } from "../context/UserContext";

function Profile() {
  const { name, accountNumber, balance, currency, status } = useUser();

  return (
    <div>
      <h1
        className="
          text-3xl
          font-bold
        "
      >
        Profile
      </h1>

      <div
        className="
          mt-6
          bg-white
          rounded-2xl
          p-6
          shadow
        "
      >
        <p>Name: {name}</p>

        <p>Account Number: {accountNumber}</p>

        <p>
          Balance: {currency}{" "}
          {balance.toLocaleString("en-MY", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>

        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default Profile;
