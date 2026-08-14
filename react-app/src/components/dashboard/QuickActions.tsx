import { Send, FileText, Search, Smartphone } from "lucide-react";

function QuickActions() {
  const actions = [
    {
      title: "Transfer Money",
      description: "Send money instantly",
      icon: Send,
      color: "from-blue-600 to-blue-400",
    },

    {
      title: "Pay Bills",
      description: "Pay your monthly bills",
      icon: FileText,
      color: "from-purple-600 to-purple-400",
    },

    {
      title: "Transaction History",
      description: "View recent activity",
      icon: Search,
      color: "from-green-600 to-green-400",
    },

    {
      title: "JomPAY",
      description: "Pay using JomPAY",
      icon: Smartphone,
      color: "from-orange-600 to-orange-400",
    },
  ];

  return (
    <div className="mb-8">
      <h3
        className="
          text-xl
          font-bold
          text-slate-800
          mb-5
        "
      >
        Quick Actions
      </h3>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-5
        "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                  group

                  bg-white

                  rounded-3xl

                  p-6

                  text-left

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-2

                  hover:shadow-xl
                "
            >
              {/* Icon */}

              <div
                className={`
                    w-14
                    h-14

                    rounded-2xl

                    bg-gradient-to-br

                    ${action.color}

                    flex
                    items-center
                    justify-center

                    text-white

                    mb-5

                    transition

                    group-hover:scale-110
                  `}
              >
                <Icon size={28} />
              </div>

              <h4
                className="
                    font-semibold
                    text-slate-800
                  "
              >
                {action.title}
              </h4>

              <p
                className="
                    text-sm
                    text-slate-500
                    mt-2
                  "
              >
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
