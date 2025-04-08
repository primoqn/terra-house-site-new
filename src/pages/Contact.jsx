export default function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-semibold text-center">Contact</h2>
      <p className="text-center">Ne găsești pe Str. Alexandru cel Bun 9B, București</p>
      <div className="w-full h-64">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.3127790233645!2d26.12365407655176!3d44.44110667107585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4ce960b351%3A0x9c1b3dd6c11b249b!2sTerra%20House%20Apartments!5e0!3m2!1sen!2sro!4v1712560000000!5m2!1sen!2sro"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
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
