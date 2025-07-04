import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'

export default function App() {
  return (
    /*<div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>*/
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-50 shadow p-4 flex justify-between items-center flex-wrap gap-4 md:gap-0">
        <h1 className="text-xl font-bold text-blue-600">Dentalmec - Odontología en Mendoza</h1>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row gap-4 text-sm items-center justify-center">
            <li><a href="#servicios" className="hover:text-blue-600">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-blue-600">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
            <li><a
          href="https://wa.me/5492614601970?text=Hola%2C+quisiera+pedir+un+turno+para+la+cl%C3%ADnica+odontol%C3%B3gica"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow"
        >
          Pedir turno
        </a></li>
          </ul>
        </nav>
        
      </header>

      {/* Hero */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Bienvenido a Dentalmec - Clínica Odontológica Mendoza</h2>
        <p className="text-lg mb-6">Sonríe con Confianza. Ofrecemos atención odontológica de alta calidad para toda la familia.</p>
        {/*<button className="mt-6 bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100">Pedí tu turno</button>*/}
        <a
          href="https://wa.me/5492614601970?text=Hola%2C+quisiera+pedir+un+turno+para+la+cl%C3%ADnica+odontol%C3%B3gica"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 px-6 rounded-xl shadow-md"
        >
          Pedir turno por WhatsApp
        </a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-12 px-4 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-8">Nuestros Servicios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <img src="/images/limpieza.png" alt="Limpieza" className="mx-auto w-20 h-20 mb-2" />
            <h4 className="font-semibold">Limpieza Dental</h4>
            <p className="text-sm">Higiene profunda para una sonrisa saludable.</p>
          </div>
          <div>
            <img src="/images/ortodoncia.png" alt="Ortodoncia" className="mx-auto w-20 h-20 mb-2" />
            <h4 className="font-semibold">Ortodoncia</h4>
            <p className="text-sm">Brackets y alineadores para corregir tu mordida.</p>
          </div>
          <div>
            <img src="/images/implantes.png" alt="Implantes" className="mx-auto w-20 h-20 mb-2" />
            <h4 className="font-semibold">Implantes Dentales</h4>
            <p className="text-sm">Reemplazo duradero de piezas dentales.</p>
          </div>
          <div>
            <img src="/images/blanqueamiento.png" alt="Blanqueamiento" className="mx-auto w-20 h-20 mb-2" />
            <h4 className="font-semibold">Blanqueamiento</h4>
            <p className="text-sm">Dientes más blancos con técnicas seguras.</p>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="bg-white py-12 px-4">
        <h3 className="text-2xl font-bold text-center mb-6">Sobre Nosotros</h3>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="text-sm md:w-1/2">
            <p>Contamos con un equipo de profesionales con años de experiencia en el cuidado dental. Nos enfocamos en brindar atención cálida, personalizada y efectiva.</p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/doctor.png" alt="Doctor" className="rounded-xl shadow w-full h-auto" />
          </div>
        </div>
      </section>

 <section className="mt-16 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">Dónde Estamos</h3>
        <p className="mb-4">Visitanos en nuestra clínica ubicada en San José Guaymallén, a pocos minutos del centro de Mendoza.</p>
        <div className="w-full h-96">
          <iframe
            title="Ubicación Clínica Odontológica Mendoza"
            /*src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3521357302955!2d-68.84405582496377!3d-32.89018366949992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0970579fb36d%3A0x7dc678b561fdd10!2sMendoza!5e0!3m2!1ses!2sar!4v1717440000000!5m2!1ses!2sar"*/
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.583725225602!2d-68.8112661!3d-32.8827317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e092cb597cc4f%3A0x5464ae249be71848!2sConsultorio%20Dental%20Escobar!5e0!3m2!1ses-419!2sar!4v1749984068587!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-12 px-4 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-6">Contacto</h3>
        <div className="max-w-xl mx-auto text-center space-y-2">
          <p><strong>Dirección:</strong> Correa Saa 1540 - San José - Guaymallén - Mendoza - Argentina</p>
          <p><strong>Email:</strong> betoescobar1827@gmail.com</p>
          <p><strong>Teléfono:</strong> (54) 261-460-1970</p>
          <p><strong>Horario:</strong> Lunes a Viernes, 9:00 a 18:00</p>
          <div className="mt-6">
            <img src="/images/clinica.png" alt="Clínica" className="w-full rounded shadow mx-auto" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-8">
        <p className="text-sm">© 2025 Clínica Odontológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
