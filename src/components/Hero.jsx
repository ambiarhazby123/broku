import heroImg from "../assets/Container.png";
import { Link } from "react-router-dom";

export default function Hero() {
  // Fungsi untuk mengirim data ke webhook n8n saat tombol diklik
  const handleSendWebhook = async () => {
    try {
      await fetch('http://localhost:5678/webhook-test/023df11f-2b68-471a-9684-6b5a39b68aea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pesan: "Halo, data tes dikirim dari tombol Mulai Sekarang Si Sehat!",
          waktu: new Date().toISOString()
        }),
      });
      console.log('Data tes berhasil dikirim ke webhook n8n!');
    } catch (error) {
      console.error('Gagal mengirim webhook:', error);
    }
  };

  return (
    <section className="flex justify-between items-center px-12 py-20 bg-[#edfcf2]">
      
      {/* LEFT */}
      <div className="max-w-xl">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          STRATEGI BERBASIS DATA
        </span>

        <h1 className="text-5xl font-bold text-green-900 mt-6 leading-tight">
          Pantau Kesehatan <br />
          <span className="text-gray-500">Bisnis Anda</span> <br />
         Lebih Mudah Dengan Sisehatku.
        </h1>

        <p className="text-gray-600 mt-6">
          SiSehatku Analytics memudahkan data operasional anda menjadi
          wawasan strategis yang mendorong efisiensi dan laba lebih maksimal.
        </p>

        {/* BUTTON */}
        <div className="flex gap-4 mt-8">

          {/* BUTTON KE REGISTER + KIRIM WEBHOOK N8N */}
          <Link to="/registrasi" onClick={handleSendWebhook}>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
              Mulai Sekarang →
            </button>
          </Link>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={heroImg}
        alt="hero"
        className="w-[450px] rounded-2xl shadow-lg"
      />
      
    </section>
  );
}