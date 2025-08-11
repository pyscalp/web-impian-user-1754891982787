import React from 'react';

// Disclaimer Popup Component
const DisclaimerPopup = ({ onClose }) => {
  return (
    <div id="disclaimer-popup" className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fade-in">
        <div className="text-center">
          <div className="text-yellow-500 text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Pemberitahuan Penting</h3>
          <div className="text-sm text-gray-600 mb-6 space-y-2">
            <p>Website ini adalah hasil kreasi <strong>NYAI-Autokeren</strong> menggunakan domain keren.co.id</p>
            <p>Kami tidak bertanggung jawab atas informasi bisnis yang tercantum dalam website ini.</p>
            <p>Mohon lakukan verifikasi sendiri sebelum melakukan transaksi.</p>
          </div>
          <div className="space-y-3">
            <button 
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              ✅ Saya Mengerti, Lanjutkan
            </button>
            <a 
              href="https://autokeren.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              🌐 Kunjungi NYAI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [showDisclaimer, setShowDisclaimer] = React.useState(true);

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.filter = 'none';
      mainContent.style.pointerEvents = 'auto';
    }
  };

  React.useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent && showDisclaimer) {
      mainContent.style.filter = 'blur(2px)';
      mainContent.style.pointerEvents = 'none';
    }
  }, [showDisclaimer]);

  return (
    <div className="min-h-screen bg-gray-50">
      {showDisclaimer && <DisclaimerPopup onClose={closeDisclaimer} />}
      
      <div id="main-content" className="transition-all duration-500">
        <header className="bg-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-gray-800">Web Impian User</h1>
                <span className="text-sm text-gray-500">by</span>
                <a href="https://autokeren.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
                  🌐 NYAI
                </a>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Beranda</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">Tentang</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition duration-300">Layanan</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Kontak</a>
              </nav>
            </div>
          </div>
        </header>

        <section id="home" className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">Web Impian User</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              unknown Terpercaya dengan Layanan Berkualitas Tinggi
            </p>
            <div className="space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                Hubungi Sekarang
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full text-lg transition duration-300">
                Lihat Layanan
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Website generik untuk kebutuhan pengguna yang belum spesifik. Dapat digunakan untuk berbagai jenis bisnis sesuai kebutuhan dan konten yang akan diunggah pengguna.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl text-blue-600 mb-2">🏆</div>
                    <h3 className="font-bold text-gray-800">Kualitas Terjamin</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl text-green-600 mb-2">⚡</div>
                    <h3 className="font-bold text-gray-800">Pelayanan Cepat</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl text-purple-600 mb-2">💎</div>
                    <h3 className="font-bold text-gray-800">Harga Terjangkau</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl text-blue-600 mb-4">🔧</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Layanan Premium {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Deskripsi layanan berkualitas tinggi dengan standar profesional terbaik untuk unknown.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                    Selengkapnya
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl mb-8">
                Siap melayani kebutuhan unknown Anda dengan profesional dan terpercaya.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">📱</span>
                  <span className="text-lg">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">📧</span>
                  <span className="text-lg">info@webimpianuser.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">📍</span>
                  <span className="text-lg">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2024 Web Impian User. Semua hak dilindungi.</p>
              </div>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <a href="https://autokeren.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">
                  🌐 NYAI-Autokeren
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;