
import { useState } from "react";

export default function HomePage() {
  const [lang, setLang] = useState("ro");
  const isRO = lang === "ro";

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Terra House Apartments</h1>
        <p className="text-lg">
          {isRO
            ? "Cazare modernă în inima Bucureștiului – Str. Alexandru cel Bun 9B"
            : "Modern accommodation in the heart of Bucharest – Alexandru cel Bun St. 9B"}
        </p>
        <img
          src="/banner_terra_house.jpg"
          alt="Banner Terra House Apartments"
          className="w-full mt-6 rounded-xl shadow-xl"
        />
      </header>
    </div>
  );
}
