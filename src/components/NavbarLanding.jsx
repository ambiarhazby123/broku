import { Link } from "react-router-dom";

export default function NavbarLanding() {
  return (
    <nav className="flex justify-between items-center px-12 py-5 bg-white shadow-sm">
      
      <h1 className="font-bold text-lg text-green-900">SiSehat</h1>

      <div className="flex gap-4 md:gap-8 text-sm text-gray-500">
        <span className="hover:text-green-700 cursor-pointer">Beranda</span>
        <span className="hover:text-green-700 cursor-pointer">Asesmen</span>
        <span className="hover:text-green-700 cursor-pointer">Perbandingan</span>
        <span className="hover:text-green-700 cursor-pointer">Rekomendasi</span>
        <span className="hover:text-green-700 cursor-pointer">Eksplorasi</span>
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/login" className="text-gray-600 hover:text-green-700">
          Masuk
        </Link>

        <Link
          to="/registrasi"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Daftar
        </Link>
      </div>

    </nav>
  );
}