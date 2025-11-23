import React from 'react'
import { assets } from '../assets/assets'

const Catalog = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 pt-38 py-16">
      <div className="container mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4"> Catalogue de Couleurs </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de couleurs Quartz pour votre plan de travail
          </p>
        </div>

        <div className="space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {couleursQuartz.slice(0, 4).map((couleur, index) => (
              <div key={index} className="text-center">
                <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={couleur.image} 
                    alt={couleur.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-lg">{couleur.name}</p>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {couleursQuartz.slice(4, 8).map((couleur, index) => (
              <div key={index} className="text-center">
                <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={couleur.image} 
                    alt={couleur.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-lg">{couleur.name}</p>
              </div>
            ))}
          </div>

          {/* Ligne 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {couleursQuartz.slice(8, 12).map((couleur, index) => (
              <div key={index} className="text-center">
                <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={couleur.image} 
                    alt={couleur.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-lg">{couleur.name}</p>
              </div>
            ))}
          </div>

          {/* Ligne 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {couleursQuartz.slice(12, 16).map((couleur, index) => (
              <div key={index} className="text-center">
                <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={couleur.image} 
                    alt={couleur.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-lg">{couleur.name}</p>
              </div>
            ))}
          </div>

          {/* Ligne 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {couleursQuartz.slice(16, 20).map((couleur, index) => (
              <div key={index} className="text-center">
                <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={couleur.image} 
                    alt={couleur.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-lg">{couleur.name}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {couleursQuartz.slice(20, 24).map((couleur, index) => (
              <div key={index} className="text-center">
                <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={couleur.image} 
                    alt={couleur.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-lg">{couleur.name}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {couleursQuartz.slice(24, 27).map((couleur, index) => (
              <div key={index} className="text-center">
                <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={couleur.image} 
                    alt={couleur.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-800 text-lg">{couleur.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Vous avez trouvé la couleur parfaite ? Obtenez un devis personnalisé
          </p>
          <a 
            href="/devis" 
            className="inline-block bg-[#A67B5B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6B4F] transition-colors duration-300"
          >
            Demander un devis
          </a>
        </div>

      </div>
    </div>
  )
}

export default Catalog