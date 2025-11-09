import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Devis Personnalisé",
      description: "Obtenez un devis gratuit et sur mesure selon vos dimensions, couleurs et besoins spécifiques",
      image: assets.devis  
    },
    {
      id: 2, 
      title: "Plans de Travail Sur Mesure",
      description: "Fabrication de plans de travail personnalisés selon vos dimensions exactes et choix de matériaux",
      image: assets.workshop  
    },
    {
      id: 3,
      title: "Installation Professionnelle",
      description: "Installation par nos experts dans tout le territoire tunisien selon votre gouvernorat",
      image: assets.kitchen  
    },
    {
      id: 4,
      title: "Nos Réalisations",
      description: "Découvrez nos projets réalisés pour vous inspirer et voir la qualité de notre travail",
      image: assets.realisation  
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De la conception à l'installation, nous vous accompagnons dans votre projet sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                {service.id === 1 || service.id === 4 ? (
  <Link 
  to={service.id === 1 ? "/devis" : "/nos-projets"} 
  className="text-[#A67B5B] font-medium hover:text-[#8B6B4F] transition-colors"
>
  {service.id === 1 ? "Demander un devis" : "En savoir plus"} →
</Link>
) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme de couleurs et finitions pour vos plans de travail
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "MILENA", image: assets.c2 },
            { name: "LUSIDA BLACK", image: assets.c20 },
            { name: "CARAMELA", image: assets.c10 },
            { name: "ALASKA", image: assets.c3 },
            { name: "NERO", image: assets.c4 }
            
          ].map((color, index) => (
            <div key={index} className="text-center">
              <div className="h-56 md:h-72 bg-gray-200 rounded-lg overflow-hidden mb-2">
                <img 
                  src={color.image} 
                  alt={color.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-gray-800">{color.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
  <Link 
  to="/catalog" 
  className="text-[#A67B5B] font-medium hover:text-[#8B6B4F] transition-colors text-lg"
>
  Voir tout le catalogue de couleurs →
</Link>
</div>
      </div>
      </div>
    </div>
    
  )
}

export default Services