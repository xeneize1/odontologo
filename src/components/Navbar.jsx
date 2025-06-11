import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-blue-600">Clínica Dental - DentalMec</h1>
      <ul className="flex gap-4 text-gray-700">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      
    </nav>
  )
}
