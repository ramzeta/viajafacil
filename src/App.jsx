
import React from "react";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", pais: "", financiacion: "no estoy seguro" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Formulario enviado:", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-sky-700 mb-2">ViajaFácil</h1>
            <p className="text-lg text-gray-600 mb-4">
              Gestionamos tu visado y financiamos tu viaje para que disfrutes sin preocupaciones. Ideal para familias, aventureros y estudiantes.
            </p>

            {submitted ? (
              <div className="text-green-600 font-semibold">¡Gracias! Nos pondremos en contacto contigo pronto.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="nombre" onChange={handleChange} value={form.nombre} placeholder="Nombre completo" className="border p-2 w-full rounded" required />
                <input type="tel" name="telefono" onChange={handleChange} value={form.telefono} placeholder="Teléfono o WhatsApp" className="border p-2 w-full rounded" required />
                <input type="email" name="email" onChange={handleChange} value={form.email} placeholder="Correo electrónico" className="border p-2 w-full rounded" required />
                <input type="text" name="pais" onChange={handleChange} value={form.pais} placeholder="País de destino" className="border p-2 w-full rounded" required />
                <select name="financiacion" onChange={handleChange} value={form.financiacion} className="border p-2 w-full rounded">
                  <option value="si">Sí, quiero financiación</option>
                  <option value="no">No</option>
                  <option value="no estoy seguro">No estoy seguro</option>
                </select>
                <button type="submit" className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700">Enviar solicitud</button>
              </form>
            )}
          </div>
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Viaje en familia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-6 bg-sky-50">
          <h2 className="text-xl font-semibold text-sky-800 mb-2">Testimonios</h2>
          <p className="italic text-gray-700">"Gracias a ViajaFácil, conseguimos el visado para nuestras vacaciones familiares en tiempo récord y además financiamos el viaje sin estrés." - Laura, Sevilla</p>
          <p className="italic text-gray-700 mt-2">"Nos ayudaron con todo para estudiar en Canadá. Rápido, claro y siempre disponibles." - Diego y Marta, Valencia</p>
        </div>
      </div>
    </div>
  );
}
