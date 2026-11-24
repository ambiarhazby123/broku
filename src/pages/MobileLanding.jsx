import { Link } from "react-router-dom";

export default function MobileLanding() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-8 bg-gradient-to-br from-white via-green-50 to-green-200">

      <h1 className="text-5xl font-bold text-center text-green-900">
        Broku
      </h1>

      <div className="mt-24">

        <h2 className="text-3xl font-bold text-green-900">
          Evaluasi Usaha Anda
        </h2>

        <h2 className="text-3xl font-bold text-green-700">
          Lebih Cerdas
        </h2>

        <p className="mt-4 text-gray-600">
          Transformasi data UMKM menjadi wawasan strategis
          yang membantu pertumbuhan bisnis berkelanjutan.
        </p>

      </div>

      <div className="mt-10 space-y-4">

        <Link
          to="/registrasi"
          className="block text-center bg-green-800 text-white py-4 rounded-xl hover:bg-green-900"
        >
          Daftar
        </Link>

        <Link
          to="/login"
          className="block text-center bg-white border border-green-200 text-green-900 py-4 rounded-xl"
        >
          Masuk
        </Link>

      </div>

    </div>
  );
}