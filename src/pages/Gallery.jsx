export default function Gallery() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Galerie</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
            Imagine {i}
          </div>
        ))}
      </div>
    </div>
  );
}
