import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Building2, Mail, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin() {
    setError("");

    const success = await login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div
      className="
      min-h-screen 
      flex 
      items-center 
      justify-center
      overflow-hidden
      bg-gradient-to-br 
      from-slate-950 
      via-blue-900 
      to-blue-600
      px-4
    "
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-blue-400/20
          rounded-full
          blur-3xl
          animate-pulse
        "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          bg-cyan-400/20
          rounded-full
          blur-3xl
          animate-pulse
        "
        />
      </div>

      {/* Login Card */}
      <div
        className="
        relative
        w-full
        max-w-md
        bg-white/95
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        p-10

        animate-[fadeIn_0.6s_ease-out]
      "
      >
        {/* Logo */}
        <div
          className="
          flex
          justify-center
          mb-6
        "
        >
          <div
            className="
            w-20
            h-20
            rounded-3xl
            bg-gradient-to-br
            from-blue-900
            to-blue-500
            flex
            items-center
            justify-center
            text-white
            shadow-xl

            animate-bounce
          "
          >
            <Building2 size={38} />
          </div>
        </div>

        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-slate-800
        "
        >
          Banking Simulator
        </h1>

        <p
          className="
          text-center
          text-slate-500
          mt-3
          mb-8
        "
        >
          Welcome back 👋
          <br />
          Login to access your account
        </p>

        {/* Email */}
        <div className="mb-5">
          <label
            className="
            text-sm
            font-medium
            text-slate-600
          "
          >
            Email
          </label>

          <div className="relative mt-2">
            <Mail
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
              size={20}
            />

            <input
              className="
                w-full
                pl-12
                pr-4
                py-3

                rounded-xl

                bg-slate-50

                border
                border-slate-200

                outline-none

                transition-all
                duration-300

                focus:bg-white
                focus:ring-2
                focus:ring-blue-500

                hover:shadow-md
              "
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            className="
            text-sm
            font-medium
            text-slate-600
          "
          >
            Password
          </label>

          <div className="relative mt-2">
            <Lock
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              className="
                w-full
                pl-12
                pr-12
                py-3

                rounded-xl

                bg-slate-50

                border
                border-slate-200

                outline-none

                transition-all
                duration-300

                focus:bg-white
                focus:ring-2
                focus:ring-blue-500

                hover:shadow-md
              "
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-slate-400
                hover:text-blue-600
                transition
              "
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {error && (
          <p
            className="
              text-red-500
              text-sm
              mb-4
              text-center
              animate-pulse
            "
          >
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          className="
            w-full

            bg-gradient-to-r
            from-blue-900
            to-blue-600

            text-white

            py-3

            rounded-xl

            font-semibold

            shadow-lg
            shadow-blue-500/30

            transition-all
            duration-300

            hover:scale-[1.03]
            hover:shadow-xl

            active:scale-95
          "
        >
          Login
        </button>

        <p
          className="
          text-center
          text-xs
          text-slate-400
          mt-8
        "
        >
          Demo: hazeeq@bank.com / password123
        </p>
      </div>
    </div>
  );
}

export default Login;
