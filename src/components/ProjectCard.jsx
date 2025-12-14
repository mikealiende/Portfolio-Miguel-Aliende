import './ProjectCard.css'

const ProjectCard = ({ title, category, description, link }) => {
    return (
        <div className="project-card">
            <div className="card-content">
                <span className="project-category">{category}</span>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                {link && <a href={link} className="project-link">View Details &rarr;</a>}
            </div>
        </div>
    )
}

export default ProjectCard
