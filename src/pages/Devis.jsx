import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { assets } from '../assets/assets'

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    superficie: '',
    couleur: '',
    gouvernorat: ''
  })
  const [showColorDropdown, setShowColorDropdown] = useState(false)
  const [loading, setLoading] = useState(false)

  const gouvernoratsTunisie = [
    "Ariana", "Béja", "Ben Arous", "Bizerte", "Gabès", "Gafsa", "Jendouba",
    "Kairouan", "Kasserine", "Kébili", "Le Kef", "Mahdia", "La Manouba",
    "Médenine", "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", "Siliana",
    "Sousse", "Tataouine", "Tozeur", "Tunis", "Zaghouan"
  ]

  const couleursQuartz = [
    { name: "CALACATTA ALDEON", image: assets.c21 },
    { name: "CALACATTA CLARA", image: assets.c22 },
    { name: "PIANA", image: assets.c23 },
    { name: "BOLERA", image: assets.c24 },
    { name: "STATUARIO ORO", image: assets.c25 },
    { name: "FELISIA", image: assets.c26 },
    { name: "SANTA", image: assets.c27 },
    { name: "MIA", image: assets.c1 },
    { name: "MILENA", image: assets.c2 },
    { name: "ALASKA", image: assets.c3 },
    { name: "OLIVIA", image: assets.c4 },
    { name: "SADIRA", image: assets.c5 },
    { name: "ADMIRA", image: assets.c6 },
    { name: "TORNADO", image: assets.c7 },
    { name: "SIMA", image: assets.c8 },
    { name: "NIDIA", image: assets.c9 },
    { name: "CARAMELA", image: assets.c10 },
    { name: "VISENDRA", image: assets.c11 },
    { name: "CORDELLA", image: assets.c12 },
    { name: "AYMINA", image: assets.c13 },
    { name: "DAISY", image: assets.c14 },
    { name: "ARIA", image: assets.c15 },
    { name: "ELATRIS", image: assets.c16 },
    { name: "VENERA", image: assets.c17 },
    { name: "LUSETIA WHITE", image: assets.c18 },
    { name: "LUSIDA GREY", image: assets.c19 },
    { name: "LUSIDA BLACK", image: assets.c20 }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleColorSelect = (couleurName) => {
    setFormData({
      ...formData,
      couleur: couleurName
    })
    setShowColorDropdown(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      await axios.post(`${backendUrl}/api/devis`, formData)
      alert('Votre demande de devis a été envoyée avec succès ! Nous vous contacterons rapidement.')
      
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        superficie: '',
        couleur: '',
        gouvernorat: ''
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi du devis:', error)
      alert('Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const selectedColor = couleursQuartz.find(color => color.name === formData.couleur)

  return (
    <div className="min-h-screen bg-gray-50 pt-38 py-16">
      <div className="container mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Demande de Devis</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour votre plan de travail en Quartz
          </p>
        </div>

        {/* Formulaire */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Nom et Prénom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent"
                  placeholder="Votre prénom"
                />
              </div>
            </div>

            {/* Email et Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  Téléphone *
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

            {/* Superficie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Superficie (m²) *
              </label>
              <input
                type="number"
                name="superficie"
                value={formData.superficie}
                onChange={handleChange}
                required
                min="1"
                step="0.1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent"
                placeholder="Ex: 4.5"
              />
            </div>

            {/* Couleur - Version améliorée */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Couleur préférée
              </label>
              
              {/* Sélecteur personnalisé */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowColorDropdown(!showColorDropdown)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent bg-white text-left flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    {selectedColor ? (
                      <>
                        <div className="w-8 h-8 rounded border border-gray-300 overflow-hidden">
                          <img 
                            src={selectedColor.image} 
                            alt={selectedColor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>{selectedColor.name}</span>
                      </>
                    ) : (
                      <span className="text-gray-500">Sélectionnez une couleur</span>
                    )}
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown des couleurs */}
                {showColorDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-1 p-2">
                      {couleursQuartz.map((couleur, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleColorSelect(couleur.name)}
                          className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors text-left w-full"
                        >
                          <div className="w-10 h-10 rounded border border-gray-300 overflow-hidden flex-shrink-0">
                            <img 
                              src={couleur.image} 
                              alt={couleur.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{couleur.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Champ caché pour le formulaire */}
              <input
                type="hidden"
                name="couleur"
                value={formData.couleur}
                onChange={handleChange}
              />
            </div>

            {/* Gouvernorat */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gouvernorat *
              </label>
              <select
                name="gouvernorat"
                value={formData.gouvernorat}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67B5B] focus:border-transparent"
              >
                <option value="">Sélectionnez votre gouvernorat</option>
                {gouvernoratsTunisie.map((gouvernorat, index) => (
                  <option key={index} value={gouvernorat}>{gouvernorat}</option>
                ))}
              </select>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#A67B5B] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#8B6B4F] transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Envoi en cours...' : 'Demander un devis'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              * Champs obligatoires
            </p>
          </form>
        </div>

        {/* Informations supplémentaires */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-gray-600">
            Notre équipe vous contactera dans les 24h pour finaliser votre devis personnalisé.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Devis