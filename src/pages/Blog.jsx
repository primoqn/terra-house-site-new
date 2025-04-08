export default function Blog() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Blog</h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-blue-600 font-medium hover:underline">Top 5 locuri de vizitat în București</a>
          <p className="text-sm text-gray-500">RO / EN • 5 aprilie 2025</p>
        </li>
        <li>
          <a href="#" className="text-blue-600 font-medium hover:underline">Restaurante elegante în apropiere</a>
          <p className="text-sm text-gray-500">RO / EN • 4 aprilie 2025</p>
        </li>
      </ul>
    </div>
  );
}
