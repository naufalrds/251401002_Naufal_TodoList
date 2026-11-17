export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="overlay" onClick={onCancel}>
      <div className="modal modal-small" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Konfirmasi</h2>
        <p className="confirm-text">{message}</p>
        <div className="row actions">
          <button className="btn btn-gray" onClick={onCancel}>
            Batal
          </button>
          <button className="btn btn-red" onClick={onConfirm}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
