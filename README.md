# Alyn‑App

## Deskripsi

Alyn‑App adalah situs portofolio berbasis Next.js dan Prismic CMS yang dirancang untuk menampilkan pekerjaan, studi kasus, dan integrasi teknologi secara dinamis. Konten dikelola melalui Prismic sehingga non‑pengembang dapat memperbarui situs tanpa mengubah kode.

## Fitur Utama

* Manajemen konten melalui Prismic CMS, memungkinkan pembuatan dan pengeditan halaman tanpa deploy ulang.
* Sistem slice modular yang dapat digunakan ulang, termasuk:

  * **Case Studies**: menampilkan daftar studi kasus dengan relasi ke page‑type `case_study`.
  * **Integrations**: menampilkan ikon/teknologi serta logo utama di tengah layout.
* Navigasi responsif:

  * Desktop: menu horizontal penuh.
  * Mobile: menu geser (slide‑in) dengan tombol buka/tutup.
* Optimasi gambar menggunakan next/image untuk performa.
* Styling dengan Tailwind CSS dan utilitas `clsx`.
* Tipe statis yang kuat melalui TypeScript untuk prediktabilitas kode.

## Teknologi

* Frontend: Next.js (React + Server/Client Components)
* CMS & Data: Prismic (`@prismicio/client`, `@prismicio/react`, `@prismicio/next`)
* Styling: Tailwind CSS + clsx
* Ikon: react‑icons (misalnya `FaGithub`, `FaFigma`)
* Bahasa: TypeScript

## Struktur Folder (ringkas)

```
src/
├── components/            ← Komponen UI yang digunakan ulang  
├── slices/                ← Model Slice untuk Prismic  
├── prismic.ts             ← Konfigurasi client Prismic  
├── pages/                 ← Halaman Next.js  
└── styles/                ← (opsional) file konfigurasi styling  
```

## Instalasi & Pengembangan Lokal

1. Clone repositori:

   ```bash
   git clone https://github.com/revanzaRaihan/alyn-app.git
   cd alyn-app
   ```
2. Install dependensi:

   ```bash
   npm install
   ```
3. Siapkan variabel lingkungan:

   * Salin `.env.local.example` ke `.env.local`
   * Isi variabel seperti `PRISMIC_ENDPOINT`, `PRISMIC_ACCESS_TOKEN` sesuai akun Prismic kamu.
4. Jalankan server development:

   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.

## Build & Deployment

Untuk menghasilkan versi produksi:

```bash
npm run build
npm run start
```

Gunakan platform deployment seperti Vercel, Netlify atau yang sesuai. Pastikan variabel lingkungan sudah terkonfigurasi di environment produksi.

## Cara Kontribusi

Kontribusi sangat disambut:

* Buat issue apabila menemukan bug atau punya usulan fitur baru.
* Fork repositori, buat branch fitur, kemudian ajukan pull request.
* Ikuti standar penulisan kode dan pastikan linter/formatter berjalan sebelum merge.

## Lisensi

Repositori ini dilisensikan di bawah lisensi MIT.
Untuk detail, lihat file `LICENSE`.

## Kontak

[Revan Raihan](https://github.com/revanzaRaihan) – [email (jika ada)]

---

Terima kasih telah melihat proyek Alyn‑App. Semoga bermanfaat!
