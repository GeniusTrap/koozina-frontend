import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { backendUrl } from '../App'
import axios from 'axios'


const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: ''
  })

    const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(`${backendUrl}/api/contacts`, formData)
      
      alert('Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.')
      
      setFormData({
        nom: '',
        telephone: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-38 py-16">
      <div className="container mx-auto px-4">
        

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contactez-Nous</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discutons de votre projet de plan de travail sur mesure
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6"> Envoyez-nous un message </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent"
                      placeholder="XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet, vos dimensions, vos préférences de matériaux..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading} 
                  className="w-full bg-[#A67B5B] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#8B6B4F] transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'} 
                </button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              
              <div className="mb-8">
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={assets.contact} 
                    alt="Contact Koozina" 
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              {/* Informations de contact */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nos Coordonnées</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#EADFC8] p-2 rounded-full">
                      <svg className="w-5 h-5 text-[#A67B5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Adresse locale</p>
                      <p className="text-gray-600">Raoued Sidi Amor, Tunisie</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-[#EADFC8] p-2 rounded-full">
                      <svg className="w-5 h-5 text-[#A67B5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Téléphone</p>
                      <p className="text-gray-600">22 504 580</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-[#EADFC8] p-2 rounded-full">
                      <svg className="w-5 h-5 text-[#A67B5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">Kais88.js@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-[#EADFC8] p-2 rounded-full">
                      <svg className="w-5 h-5 text-[#A67B5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Horaires d'ouverture</p>
                      <p className="text-gray-600">Lun - Sam: 8h00 - 18h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact