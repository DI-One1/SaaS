// 6. Memasukkan (Import) fungsi dari modul file lain
import { formatProduk, gabungData } from './logika.js';
let daftarTugas = [];

const listContainer = document.getElementById('list-container');
const inputTugas = document.getElementById('input-tugas');
const tombolTambah = document.getElementById('tombol-tambah');

const renderLayar = () => {
  listContainer.innerHTML = ""; // Bersihkan layar lama
  
  // Melakukan perulangan untuk setiap tugas di dalam array
  daftarTugas.forEach(tugas => {
    const stringHTML = buatTemplateHTML(tugas);
    listContainer.innerHTML += stringHTML;
  });
};

// Fungsi inisialisasi aplikasi menggunakan ASYNC/AWAIT
const jalankanAplikasi = async () => {
  try {
    listContainer.innerHTML = "<li>⏳ Sedang mengambil data dari server...</li>";
    
    // MEenunggu data awal selesai diambil dari server simulasi
    const dataAwal = await ambilDataAwalDariServer();
    
    daftarTugas = dataAwal; // Masukkan ke variabel let kita
    renderLayar();          // Tampilkan ke layar
  } catch (error) {
    console.error("Gagal memuat aplikasi:", error);
  }
};

// Event Listener saat tombol "Tambah" diklik oleh user
tombolTambah.addEventListener('click', () => {
  const teksTugas = inputTugas.value.trim();
  
  if (teksTugas !== "") {
    // Memperbarui array menggunakan fungsi helper (Spread Operator)
    daftarTugas = tambahTugasKeDaftar(daftarTugas, teksTugas);
    
    renderLayar();         // Render ulang layar dengan data baru
    inputTugas.value = ""; // Kosongkan kolom input kembali
  }
});

// Fitur Hapus: Daftarkan fungsi ke objek window agar bisa dipanggil dari atribut onclick="hapusTugasKe()" di HTML
window.hapusTugasKe = (idTugas) => {
  // Memfilter array untuk membuang ID yang dipilih
  daftarTugas = daftarTugas.filter(tugas => tugas.id !== idTugas);
  renderLayar(); // Render ulang setelah dihapus
};

// Jalankan aplikasi pertama kali saat halaman dimuat
jalankanAplikasi();
