function LoadingCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-center justify-center space-x-2">
      <span className="text-gray-600">Pensando</span>
      <Dots />
    </div>
  );
}

function Dots() {
  return (
    <div className="flex space-x-1">
      <span className="animate-bounce delay-0">.</span>
      <span className="animate-bounce delay-100">.</span>
      <span className="animate-bounce delay-200">.</span>
    </div>
  );
}

export default LoadingCard;