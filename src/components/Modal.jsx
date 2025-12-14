import './Modal.css'

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null

    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose()
        }
    }

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <span className="modal-category">{project.category}</span>
                    <h2 className="modal-title">{project.title}</h2>

                    {/* Tecnologías usadas */}
                    {project.technologies && (
                        <div className="modal-techs">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="modal-body">
                    <p>{project.description}</p>

                    {/* Video (si existe) */}
                    {project.video && (
                        <div className="modal-video">
                            <iframe
                                src={project.video}
                                title="Project Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {/* Galería de Imágenes (si existe) */}
                    {project.images && (
                        <div className="modal-gallery">
                            {project.images.map((img, index) => (
                                <img key={index} src={img} alt={`Project detail ${index + 1}`} />
                            ))}
                        </div>
                    )}
                    {project.extendedDescription && (
                        <div className="modal-extended-text">
                            <p>{project.extendedDescription}</p>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    {project.github && (
                        <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal