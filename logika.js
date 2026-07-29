// 1. Variabel menggunakan let dan const
const NAMA_TOKO = "Toko Akbar Gans"; // const: Nilai tidak bisa diubah
let statusToko = "Buka";         // let: Nilai bisa diubah nanti

// 2. Arrow function dengan parameter dan mengembalikan nilai (return)
// Fungsi ini menerima object produk dan mencetak detailnya
export const formatProduk = (produk) => {
  // 4a. Destructuring pada Objek
  const { nama, harga, stok } = produk;

  // 3. Template Literals (Menggunakan backtick ` dan ${})
  return `Produk: ${nama} | Harga: Rp${harga} | Stok: ${stok} pcs`;
};

// Fungsi untuk menggabungkan data
export const gabungData = () => {
  // 4b. Destructuring pada Array
  const pilihanWarna = ["Merah", "Biru", "Hijau"];
  const [warnaUtama, warnaKedua] = pilihanWarna; // warnaUtama = "Merah", warnaKedua = "Biru"

  // 5a. Spread Operator pada Array (Menggabungkan dua array)
  const sepatuLokal = ["Specs", "Eagle"];
  const sepatuImpor = ["Nike", "Adidas"];
  const semuaSepatu = [...sepatuLokal, ...sepatuImpor]; // ["Specs", "Eagle", "Nike", "Adidas"]

  // 5b. Spread Operator pada Objek (Menggabungkan dua objek)
  const dataDasar = { id: 101, nama: "Sepatu Running" };
  const dataHarga = { harga: 500000, stok: 15 };
  const produkLengkap = { ...dataDasar, ...dataHarga }; 
  // Hasilnya: { id: 101, nama: "Sepatu Running", harga: 500000, stok: 15 }

  // Mengembalikan hasil kombinasi untuk digunakan di file utama
  return { warnaUtama, semuaSepatu, produkLengkap };
};
