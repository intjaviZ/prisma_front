function ErrorCard({ message }) {
  return (
    <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl shadow-sm">
      <strong>Error:</strong> {message || "Algo salió mal, intenta de nuevo."}
    </div>
  );
}
export default ErrorCard;