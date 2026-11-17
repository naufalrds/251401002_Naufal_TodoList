import { useState } from "react";
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "../data/dummyTodos";

const emptyForm = {
  title: "",
  description: "",
  status: "to-do",
  priority: "low",
  deadline: "",
};

// Modal form dipakai untuk tambah (mode="add") dan ubah (mode="edit")
export default function TodoForm({ mode, initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialData ?? emptyForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return setError("Judul wajib diisi.");
    if (!form.deadline) return setError("Deadline wajib diisi.");
    onSubmit({ ...form, title: form.title.trim() });
  };

  return (
    <div className="overlay" onClick={onCancel}>
      <form
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2 className="modal-title">
          {mode === "add" ? "Tambah Todo" : "Update Todo"}
        </h2>

        <label htmlFor="title">Judul</label>
        <input id="title" name="title" value={form.title} onChange={handleChange} />

        <label htmlFor="description">Deskripsi</label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={form.description}
          onChange={handleChange}
        />

        <div className="row">
          <div className="col">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={form.status} onChange={handleChange}>
              {STATUS_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <label htmlFor="priority">Prioritas</label>
            <select id="priority" name="priority" value={form.priority} onChange={handleChange}>
              {PRIORITY_OPTIONS.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <label htmlFor="deadline">Deadline</label>
        <input
          id="deadline"
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <div className="row actions">
          <button type="button" className="btn btn-red" onClick={onCancel}>
            Batal
          </button>
          <button type="submit" className="btn btn-blue">
            {mode === "add" ? "Tambah" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
