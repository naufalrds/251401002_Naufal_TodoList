// Struktur data mengikuti atribut REST API: id, title, description, priority, deadline, status
export const STATUS_OPTIONS = ["to-do", "in progress", "done"];
export const PRIORITY_OPTIONS = ["low", "medium", "high"];

export const dummyTodos = [
  {
    id: 5,
    title: "Mengerjakan Proyek Computer Vision",
    description:
      "Menyelesaikan proyek akhir computer vision tentang deteksi penggunaan helm",
    priority: "high",
    deadline: "2026-10-11",
    status: "in progress",
  },
  {
    id: 4,
    title: "Mempelajari Dasar Zustand",
    description: "Memahami store, action, dan selector pada Zustand.",
    priority: "low",
    deadline: "2026-11-25",
    status: "in progress",
  },
  {
    id: 3,
    title: "Membuat Website Portfolio",
    description: "Membuat website portfolio pribadi dengan React.",
    priority: "low",
    deadline: "2026-10-20",
    status: "in progress",
  },
  {
    id: 2,
    title: "Mempelajari React Hooks",
    description: "Latihan useState, useEffect, dan custom hooks.",
    priority: "low",
    deadline: "2026-10-11",
    status: "to-do",
  },
];
