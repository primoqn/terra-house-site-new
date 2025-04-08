export default function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Terra House Apartments</h1>
      <p className="text-lg mb-6">Locul unde luxul întâlnește ospitalitatea.</p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a href="/apartment-1" className="px-4 py-2 bg-blue-600 text-white rounded-xl">Apartament 1</a>
        <a href="/apartment-2" className="px-4 py-2 bg-blue-600 text-white rounded-xl">Apartament 2</a>
      </div>
    </div>
  );
}
