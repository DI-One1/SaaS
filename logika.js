// 1. Variabel menggunakan let dan const
const NAMA_TOKO = "Toko Akbar Gans";
let totalTugasDibuat = 0;

// Simulasi mengambil data awal dari server (Menggunakan Promise)
export const ambilDataAwalDariServer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, judul: "Belajar JavaScript Modern", status: "Selesai" },
        { id: 2, judul: "Mempraktikkan Async Await", status: "Belum" }
      ]);
    }, 1500);
  });
};

// Arrow function untuk membuat template HTML (Menggunakan Template Literals & Destructuring)
export const buatTemplateHTML = (tugas) => {
  // Destructuring Objek tugas
  const { id, judul, status } = tugas;
  const warnaStatus = status === "Selesai" ? "green" : "orange";

  // Mengembalikan string HTML menggunakan Template Literals
  return `
    <li style="margin-bottom: 10px; padding: 5px; border-bottom: 1px dashed #ccc;">
      <strong>${judul}</strong> - 
      <span style="color: ${warnaStatus}; font-weight: bold;">[${status}]</span>
      <button onclick="hapusTugasKe(${id})" style="margin-left: 10px; color: red;">Hapus</button>
    </li>
  `;
};

// Arrow function untuk menambah tugas baru (Menggunakan Spread Operator)
export const tambahTugasKeDaftar = (daftarLama, judulBaru) => {
  totalTugasDibuat++;
  
  const tugasBaru = {
    id: Date.now(), // Membuat ID unik berdasarkan waktu saat ini
    judul: judulBaru,
    status: "Belum"
  };

  // Menggabungkan array menggunakan Spread Operator [...arrayLama, objekBaru]
  return [...daftarLama, tugasBaru];
};
