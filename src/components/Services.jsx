import React from 'react'

const services = [
  { title: "Ortodoncia", desc: "Alineamos tus dientes con tecnología moderna." },
  { title: "Implantes", desc: "Recuperá tu sonrisa con implantes duraderos." },
  { title: "Limpieza Dental", desc: "Higiene bucal profesional y preventiva." }
]

export default function Services() {
  return (
    <section className="p-10 bg-white">
      <h3 className="text-3xl font-bold text-center text-blue-700 mb-8">Nuestros Servicios</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-blue-100 p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
