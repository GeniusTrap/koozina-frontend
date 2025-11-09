import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  const features = [
    {
      image: assets.chocs, 
      title: "Anti-chocs",
      description: "Résistance aux impacts pour une durabilité optimale"
    },
    {
      image: assets.scratch, 
      title: "Anti-Scratch",
      description: "Surface résistante aux rayures pour garder son éclat"
    },
    {
      image: assets.chaleur,
      title: "Chaleur 180°C", 
      description: "Résistance aux hautes températures pour une utilisation intensive"
    },
    {
      image: assets.impérmeable,
      title: "Imperméable",
      description: "Surface étanche idéale pour les environnements humides"
    }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        

        <div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    Le Quartz - Pierre Naturelle Reconstituée
  </h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
    Le Quartz est un matériau noble composé à 90-95% de quartz naturel mélangé à des résines. 
    Cette composition unique lui confère une résistance exceptionnelle et un aspect luxueux, 
    faisant de lui le choix idéal pour les plans de travail de cuisine haut de gamme et durables.
  </p>
</div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
  {features.map((feature, index) => (
    <div key={index} className="text-center">
      <div className="h-16 mb-4 flex items-center justify-center">
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-16 h-16 object-contain"  
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {feature.description}
      </p>
    </div>
  ))}
</div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
    Notre Engagement Qualité
  </h3>
  <p className="text-gray-600 leading-relaxed mb-4">
    Chez Koozina, nous sélectionnons rigoureusement nos matériaux Quartz auprès des meilleurs 
    fabricants européens. Chaque plan de travail est conçu pour allier esthétique et 
    performance, garantissant une longévité exceptionnelle.
  </p>
  <p className="text-gray-600 leading-relaxed">
    Notre expertise technique nous permet de vous proposer des solutions sur mesure 
    adaptées à vos besoins spécifiques, avec une finition impeccable et un service 
    d'installation professionnel.
  </p>
</div>

          <div className="lg:w-2/5">
  <div className="bg-gray-200 h-64 lg:h-72 rounded-lg flex items-center justify-center overflow-hidden">
    <img src={assets.k8} alt="Notre qualité HPL" className="w-full h-full object-cover" />
  </div>
</div>
        </div>
          <div className="text-center mt-14 py-10 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            COMMENT AVOIR UN PLAN DE TRAVAIL
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Vous pouvez avoir un devis ici
          </p>
          <a 
            href="/devis" 
            className="inline-block bg-white text-[#A67B5B] border-2 border-[#A67B5B] px-8 py-3 rounded-lg font-semibold hover:bg-[#A67B5B] hover:text-white transition-colors duration-300"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  )
}

export default About