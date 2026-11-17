import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { dummyTodos } from "./data/dummyTodos";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import TodoForm from "./components/TodoForm";
import ConfirmDialog from "./components/ConfirmDialog";
import Toast from "./components/Toast";

export default function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [showAdd, setShowAdd] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState("");
  const closeToast = useCallback(() => setToast(""), []);

  // CREATE
  const addTodo = (data) => {
    const nextId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { id: nextId, ...data }]);
    setShowAdd(false);
    setToast("Tugas berhasil ditambahkan.");
  };

  // UPDATE
  const updateTodo = (data) => {
    setTodos(todos.map((t) => (t.id === editTarget.id ? { ...t, ...data } : t)));
    setEditTarget(null);
    setToast("Tugas berhasil diperbarui.");
  };

  // DELETE
  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== deleteTarget.id));
    setDeleteTarget(null);
    setToast("Tugas berhasil dihapus.");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <TodoListPage
              todos={todos}
              onAddClick={() => setShowAdd(true)}
              onDeleteClick={setDeleteTarget}
            />
          }
        />
        <Route
          path="/todo/:id"
          element={<TodoDetailPage todos={todos} onUpdateClick={setEditTarget} />}
        />
      </Routes>

      {showAdd && (
        <TodoForm mode="add" onSubmit={addTodo} onCancel={() => setShowAdd(false)} />
      )}
      {editTarget && (
        <TodoForm
          mode="edit"
          initialData={editTarget}
          onSubmit={updateTodo}
          onCancel={() => setEditTarget(null)}
        />
      )}
      {deleteTarget && (
        <ConfirmDialog
          message={`Yakin ingin menghapus "${deleteTarget.title}"?`}
          onConfirm={deleteTodo}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
      {toast && <Toast message={toast} onClose={closeToast} />}
    </>
  );
}
