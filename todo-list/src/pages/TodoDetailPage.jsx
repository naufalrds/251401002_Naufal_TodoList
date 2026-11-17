import { useNavigate, useParams } from "react-router-dom";

export default function TodoDetailPage({ todos, onUpdateClick }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <div className="detail-wrap">
        <div className="detail-card">
          <p>Tugas tidak ditemukan.</p>
          <button className="btn btn-red" onClick={() => navigate("/")}>
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-wrap">
      <div className="detail-card">
        <div className="detail-left">
          <h3>Judul</h3>
          <p>{todo.title}</p>
          <h3>Deskripsi</h3>
          <div className="desc-box">{todo.description}</div>
        </div>
        <div className="detail-right">
          <h3>Status</h3>
          <p>{todo.status}</p>
          <h3>Prioritas</h3>
          <p>{todo.priority}</p>
          <h3>Deadline</h3>
          <p>{todo.deadline}</p>
          <div className="row actions">
            <button className="btn btn-red" onClick={() => navigate("/")}>
              Kembali
            </button>
            <button className="btn btn-blue" onClick={() => onUpdateClick(todo)}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
