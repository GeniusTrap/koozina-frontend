import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'

const NosProjets = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [projects, setProjects] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const projectsPerPage = 4

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await axios.get(`${backendUrl}/api/realisations`, {
        params: {
          page: currentPage,
          limit: projectsPerPage
        }
      })
      setProjects(response.data.data)
      setTotalPages(response.data.pagination.totalPages)
    } catch (error) {
      console.error('Erreur chargement projets:', error)
      setError('Erreur de connexion au serveur')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [currentPage])

  return (
    <div className="min-h-screen bg-gray-50 pt-26 py-16">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center mb-12">
          <img src={assets.kitchenP} alt="" />
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project._id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

          {!loading && !error && projects.length > 0 && (
        <div className="flex justify-center items-center space-x-2 mt-16">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Précédent
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1 
                  ? 'bg-[#A67B5B] text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
        )}
        {loading && (
  <div className="text-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A67B5B] mx-auto"></div>
    <p className="text-gray-600 mt-4">Chargement des projets...</p>
  </div>
)}

{error && (
  <div className="text-center py-12">
    <div className="text-red-500 text-lg mb-4">⚠️</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Erreur de connexion</h3>
    <p className="text-gray-600">{error}</p>
  </div>
)}

{!loading && !error && projects.length === 0 && (
  <div className="text-center">
    <div className="text-4xl mb-4">🏗️</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucun projet pour le moment</h3>
    <p className="text-gray-600">
      Notre entreprise n'a pas encore soumis de projets réalisés. 
      Revenez bientôt pour découvrir nos réalisations !
    </p>
  </div>
)}

      </div>
    </div>
  )
}

export default NosProjets