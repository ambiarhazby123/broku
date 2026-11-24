import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function RegistrasiMobile({
  form,
  setForm,
  showPassword,
  setShowPassword,
  handleRegister,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-800 to-green-700 pt-20">

      <div className="bg-white rounded-t-[40px] min-h-screen p-8">

        <Link
          to="/login"
          className="text-3xl text-green-900"
        >
          ←
        </Link>

        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-green-800">
          Broku
        </p>

        <h1 className="text-4xl font-bold text-green-900 mt-2">
          Bikin Akun
        </h1>

        <div className="space-y-5 mt-10">

          <input
            placeholder="Nama Lengkap"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full bg-[#EEF1F5] rounded-xl p-4"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full bg-[#EEF1F5] rounded-xl p-4"
          />

          <input
            placeholder="Nomor WhatsApp"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="w-full bg-[#EEF1F5] rounded-xl p-4"
          />

          <div className="bg-[#EEF1F5] rounded-xl flex items-center p-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="bg-transparent outline-none flex-1"
            />

            <button
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold mt-6"
          >
            Daftar
          </button>

        </div>

      </div>

    </div>
  );
}