# Todo List — React.js

Kuis Praktikum Pengembangan Frontend. Aplikasi To-Do List dengan React.js (Vite), React Router, dan data dummy.

## Fitur
- Menampilkan daftar tugas
- Melihat detail tugas (`/todo/:id`)
- Menambah tugas lewat modal form
- Memperbarui tugas lewat modal form
- Menghapus tugas dengan konfirmasi
- Notifikasi (toast) setiap operasi berhasil
- State dikelola dengan `useState`, perubahan langsung tampil tanpa reload

## Struktur data
```js
{ id, title, description, priority, deadline, status }
```

## Menjalankan
```bash
npm install
npm run dev
```

## Screenshot
Tambahkan screenshot di sini:

| Halaman | Screenshot |
|---|---|
| Daftar tugas | ![list](screenshots/list.png) |
| Tambah todo | ![add](screenshots/add.png) |
| Detail tugas | ![detail](screenshots/detail.png) |
| Update todo | ![update](screenshots/update.png) |
| Konfirmasi hapus | ![delete](screenshots/delete.png) |
