// 6. Memasukkan (Import) fungsi dari modul file lain
import { formatProduk, gabungData } from './logika.js';

// --- EKSEKUSI DAN PENGUJIAN ---

// Membuat objek produk tiruan
const produkBaru = {
  nama: "Kemeja Flanel",
  harga: 150000,
  stok: 25
};

// Menguji fungsi formatProduk (Arrow Function + Template Literals + Destructuring Object)
const infoProduk = formatProduk(produkBaru);
console.log(infoProduk); 
// Output: Produk: Kemeja Flanel | Harga: Rp150000 | Stok: 25 pcs


// Menguji fungsi gabungData (Destructuring Array + Spread Operator Array & Object)
const hasilGabung = gabungData();

console.log(`Warna Favorit: ${hasilGabung.warnaUtama}`); 
// Output: Warna Favorit: Merah

console.log("Semua Stok Sepatu:", hasilGabung.semuaSepatu); 
// Output: Semua Stok Sepatu: [ 'Specs', 'Eagle', 'Nike', 'Adidas' ]

console.log("Data Produk Lengkap:", hasilGabung.produkLengkap); 
// Output: Data Produk Lengkap: { id: 101, nama: 'Sepatu Running', harga: 500000, stok: 15 }
window.produkBaruGlobal = produkBaru;
window.infoProdukGlobal = infoProduk;
