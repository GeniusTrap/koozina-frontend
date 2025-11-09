import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#EADFC8] py-4">
        <div className="container mx-auto px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            <div className="text-center md:text-left">
              <img src={assets.k88} alt="Logo" className="h-24 mx-auto md:mx-0 mb-4" />
              <p className="text-gray-700 mt-4">
  Koozina, spécialiste des plans de travail sur mesure en Quartz. 
  Qualité expertise professionnelle pour transformer votre cuisine.
</p>
            </div>

            <div className="text-center">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-nous</h3>
  <div className="flex flex-col items-center space-y-4">

    <a href="#" className="flex items-center justify-center space-x-2 text-gray-700 hover:text-[#A67B5B] transition-colors">
      <div className="bg-[#A67B5B] p-2 rounded-full">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>
      <span> Instagram </span>
    </a>

    <a href="#" className="flex items-center justify-center space-x-2 text-gray-700 hover:text-[#A67B5B] transition-colors">
      <div className="bg-[#A67B5B] p-2 rounded-full">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </div>
      <span>Facebook</span>
    </a>
  </div>
</div>

            <div className="text-center md:text-left md:ml-40">
  <h3 className="text-xl font-bold text-gray-800 mb-4"> Contact </h3>
  <div className="space-y-3 text-gray-700">

    <div className="flex items-center justify-center md:justify-start space-x-3">
      <div className="bg-[#A67B5B] p-2 rounded-full">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <span> Raoued Sidi Amor </span>
    </div>

    <div className="flex items-center justify-center md:justify-start space-x-3">
      <div className="bg-[#A67B5B] p-2 rounded-full">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <span> 22 504 580 </span>
    </div>

    <div className="flex items-center justify-center md:justify-start space-x-3">
      <div className="bg-[#A67B5B] p-2 rounded-full">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <span>Kais88.js@gmail.com</span>
    </div>
  </div>
</div>

          </div>
        </div>
      </footer>

      <div className="bg-black py-2 w-full overflow-hidden">
  <div className="animate-marquee whitespace-nowrap">
    <span className="text-white">
      © {new Date().getFullYear()} Koozina. Tous droits réservés.
    </span>
  </div>
</div>
    </>
  )
}

export default Footer