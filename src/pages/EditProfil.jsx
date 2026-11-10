import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";

export default function EditProfil() {
  const navigate = useNavigate();

  const safeParse = (value) => {
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  };

  const savedData = safeParse(localStorage.getItem("profileData"));
  const user = safeParse(localStorage.getItem("user"));

  const [isSaving, setIsSaving] = useState(false);

  // 🔥 FORM
  const [formData, setFormData] = useState({
    nama: savedData?.nama || user?.name || user?.username || "Pengguna",
    namaUsaha: savedData?.namaUsaha || "",
    jenisUsaha: savedData?.jenisUsaha || "",
    kategori: savedData?.kategori || "",
    lamaUsaha: savedData?.lamaUsaha || "",
    usia: savedData?.usia || "",
    gender: savedData?.gender || "Perempuan",
    role: savedData?.role || "",
  });

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 HANDLE ROLE
  const handleRole = (role) => {
    setFormData({
      ...formData,
      role,
    });
  };

  // 🔥 SIMPAN KE LOCALSTORAGE (100% AMAN DI VERCEL TANPA PHP/DATABASE)
  const handleSubmit = () => {
    if (!formData.nama.trim()) {
      alert("Nama pengguna wajib diisi");
      return;
    }

    if (!formData.namaUsaha.trim()) {
      alert("Nama usaha wajib diisi");
      return;
    }

    if (!formData.jenisUsaha.trim()) {
      alert("Jenis usaha wajib diisi");
      return;
    }

    if (!formData.kategori) {
      alert("Kategori usaha wajib dipilih");
      return;
    }

    if (!formData.lamaUsaha) {
      alert("Lama usaha wajib diisi");
      return;
    }

    if (!formData.usia) {
      alert("Usia wajib diisi");
      return;
    }

    if (!formData.role) {
      alert("Pilih posisi terlebih dahulu");
      return;
    }

    try {
      setIsSaving(true);

      // Simpan data ke local storage agar dikenali oleh seluruh halaman
      localStorage.setItem("profileData", JSON.stringify(formData));
      localStorage.setItem("profileComplete", "true");

      alert("Profil berhasil diperbarui!");
      navigate("/beranda");

    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan data ke browser.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f7fb]">
      <NavbarDashboard />

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 md:px-8 md:py-10 lg:px-12 xl:px-16">
        {/* HEADER */}
        <section className="max-w-3xl">
          <h1 className="break-words text-2xl font-bold text-green-900 md:text-3xl">
            Edit Profil Broku
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
            Kelola informasi akun dan profil usaha Broku Anda.
          </p>
        </section>

        {/* CARD */}
        <section className="mt-6 rounded-2xl border bg-white p-4 shadow-sm sm:mt-8 sm:p-6 lg:p-8">
          {/* FORM */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {/* NAMA */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Nama Pengguna
              </label>

              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border bg-gray-50 p-3 outline-none transition focus:border-green-800 focus:bg-white"
              />
            </div>

            {/* NAMA USAHA */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Nama Usaha
              </label>

              <input
                type="text"
                name="namaUsaha"
                value={formData.namaUsaha}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border bg-gray-50 p-3 outline-none transition focus:border-green-800 focus:bg-white"
              />
            </div>

            {/* JENIS */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Jenis Usaha
              </label>

              <input
                type="text"
                name="jenisUsaha"
                value={formData.jenisUsaha}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border bg-gray-50 p-3 outline-none transition focus:border-green-800 focus:bg-white"
              />
            </div>

            {/* KATEGORI */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Kategori Usaha
              </label>

              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border bg-gray-50 p-3 outline-none transition focus:border-green-800 focus:bg-white"
              >
                <option value="">Pilih Kategori</option>
                <option value="Kuliner">Kuliner</option>
                <option value="Fashion">Fashion</option>
                <option value="Retail">Retail</option>
                <option value="Jasa">Jasa</option>
                <option value="Kerajinan">Kerajinan</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            {/* LAMA */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Lama Usaha (Tahun)
              </label>

              <input
                type="number"
                name="lamaUsaha"
                value={formData.lamaUsaha}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border bg-gray-50 p-3 outline-none transition focus:border-green-800 focus:bg-white"
              />
            </div>

            {/* USIA */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Usia Pemilik
              </label>

              <input
                type="number"
                name="usia"
                value={formData.usia}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border bg-gray-50 p-3 outline-none transition focus:border-green-800 focus:bg-white"
              />
            </div>

            {/* GENDER */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border bg-gray-50 p-3 outline-none transition focus:border-green-800 focus:bg-white"
              >
                <option value="Perempuan">Perempuan</option>
                <option value="Laki-laki">Laki-laki</option>
              </select>
            </div>

            {/* ROLE */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-gray-700">
                Posisi
              </label>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:flex md:flex-wrap md:gap-4">
                <button
                  type="button"
                  onClick={() => handleRole("Pemilik")}
                  className={`rounded-xl border px-5 py-3 text-sm transition sm:py-2 ${
                    formData.role === "Pemilik"
                      ? "bg-green-800 text-white border-green-800"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Pemilik
                </button>

                <button
                  type="button"
                  onClick={() => handleRole("Karyawan")}
                  className={`rounded-xl border px-5 py-3 text-sm transition sm:py-2 ${
                    formData.role === "Karyawan"
                      ? "bg-green-800 text-white border-green-800"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Karyawan
                </button>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-8 flex flex-col gap-5 border-t pt-6 sm:mt-10 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-relaxed text-gray-400">
              🔒 Data profile Broku tersimpan aman di browser.
            </p>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4">
              <button
                onClick={() => navigate("/beranda")}
                className="w-full rounded-xl border px-6 py-3 text-gray-500 transition hover:bg-gray-50 sm:w-auto sm:border-0"
              >
                Batal
              </button>

              <button
                onClick={handleSubmit}
                disabled={isSaving}
                className="w-full rounded-xl bg-green-800 px-6 py-3 text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto font-semibold"
              >
                {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}