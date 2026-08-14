import { Bell } from "lucide-react";
import { useUser } from "../../context/UserContext";

function Header() {
  const { name } = useUser();

  const initials = name
    .split(" ")
    .map((value) => value[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <header
      className="
        h-20
        bg-white
        border-b
        px-8
        flex
        justify-end
        items-center
        gap-5
      "
    >
      <button
        className="
          p-2
          rounded-full
          hover:bg-gray-100
          transition
        "
      >
        <Bell size={22} />
      </button>

      <div
        className="
          w-11
          h-11
          rounded-full
          bg-blue-900
          text-white
          flex
          items-center
          justify-center
          font-semibold
        "
      >
        {initials}
      </div>
    </header>
  );
}

export default Header;
