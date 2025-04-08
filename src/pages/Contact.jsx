export default function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-semibold text-center">Contact</h2>
      <p className="text-center">Ne găsești pe Str. Alexandru cel Bun 9B, București</p>
      <div className="w-full h-64">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.333... (scurtat)"
          loading="lazy"
        ></iframe>
      </div>
      <div className="text-center">
        <a href="https://wa.me/40740800500" target="_blank" className="inline-block px-4 py-2 bg-green-600 text-white rounded-xl">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
