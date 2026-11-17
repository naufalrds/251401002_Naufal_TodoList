import { useNavigate } from "react-router-dom";
import { EyeIcon, TrashIcon } from "../components/Icons";

const truncate = (text, max = 30) =>
  text.length > max ? text.slice(0, max) + "..." : text;

export default function TodoListPage({ todos, onAddClick, onDeleteClick }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <button className="btn btn-blue" onClick={onAddClick}>
          Tambah Todo
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Status</th>
            <th>Prioritas</th>
            <th>Deadline</th>
            <th className="center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{truncate(todo.title)}</td>
              <td>{todo.status}</td>
              <td>{todo.priority}</td>
              <td>{todo.deadline}</td>
              <td className="center">
                <button
                  className="icon-btn btn-blue"
                  title="Lihat detail"
                  onClick={() => navigate(`/todo/${todo.id}`)}
                >
                  <EyeIcon />
                </button>
                <button
                  className="icon-btn btn-red"
                  title="Hapus"
                  onClick={() => onDeleteClick(todo)}
                >
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {todos.length === 0 && (
        <p className="empty">Belum ada tugas. Klik "Tambah Todo" untuk membuat tugas baru.</p>
      )}
    </div>
  );
}
