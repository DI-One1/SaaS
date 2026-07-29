// 1. Perbaikan Import: Masukkan fungsi helper To-Do List yang benar dari logika.js
import { ambilDataAwalDariServer, buatTemplateHTML, tambahTugasKeDaftar } from './logika.js';

let daftarTugas = [];

const listContainer = document.getElementById('list-container');
const inputTugas = document.getElementById('input-tugas');
const tombolTambah = document.getElementById('tombol-tambah');

const renderLayar = () => {
  listContainer.innerHTML = ""; // Bersihkan layar lama
  
  daftarTugas.forEach(tugas => {
    const stringHTML = buatTemplateHTML(tugas);
    listContainer.innerHTML += stringHTML;
  });
};

// Fungsi inisialisasi aplikasi menggunakan ASYNC/AWAIT
const jalankanAplikasi = async () => {
  try {
    listContainer.innerHTML = "<li>⏳ Sedang mengambil data dari server...</li>";
    
    // Menunggu data awal selesai diambil dari server simulasi
    const dataAwal = await ambilDataAwalDariServer();
    
    daftarTugas = dataAwal; 
    renderLayar();          
  } catch (error) {
    console.error("Gagal memuat aplikasi:", error);
  }
};

// 2. Perbaikan Tombol Tambah: Melengkapi kode yang terpotong di baris 35-36
tombolTambah.addEventListener('click', () => {
  const teksTugas = inputTugas.value.trim();
  
  if (teksTugas !== "") {
    // Memperbarui array menggunakan fungsi helper (Spread Operator)
    daftarTugas = tambahTugasKeDaftar(daftarTugas, teksTugas);
    
    renderLayar();         // Render ulang layar dengan data baru
    inputTugas.value = ""; // Kosongkan kolom input kembali
  }
});

// Fitur Hapus
window.hapusTugasKe = (idTugas) => {
  daftarTugas = daftarTugas.filter(tugas => tugas.id !== idTugas);
  renderLayar(); 
};

// Jalankan aplikasi pertama kali
jalankanAplikasi();
