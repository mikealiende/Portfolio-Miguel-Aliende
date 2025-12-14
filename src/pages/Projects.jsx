import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Modal from '../components/Modal'
import './Projects.css'
import Reveal from '../components/Reveal'

const basePath = import.meta.env.BASE_URL;

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const openModal = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }
    const engineeringProjects = [
        {
            title: "Diagramas de radiación de antenas 5G",
            category: "Telecomunicaciones",
            description: "Simulación de diagramas de radiación de antenas 5G.",
            link: "#"
        },
        {
            title: "Mars V",
            category: "Ingeniería",
            description: "Project details coming soon.",
            link: "#"
        },
        {
            title: "Power Line Communication (PLC)",
            category: "Telecomunicaciones",
            description: "Simulación y análisis de sistemas PLC.",
            link: "#"
        },
        {
            title: "Clock Speaker",
            category: "Electrónica",
            description: "Video explicativo del funcionamiento.",
            link: "#"
        },
        {
            title: "Robotic Arm",
            category: "Robótica",
            description: "Schematics, PCB design, and mobile application control.",
            link: "#"
        },
        {
            title: "SatCom on the Move",
            category: "Telecomunicaciones",
            description: "Sistema de comunicación satelital para vehículos móviles.",
            link: "#"
        }
    ]

    const quantumProjects = [
        {
            title: "Diseño y simulación de criptomoneda cuántica",
            category: "Computación cuántica",
            description: "Modificación en la PoW de Bitcoin para necesariamnete se tenga que resolver con recursos cuánticos.",
            technologies: ["Python", "Pennylane"],
            // CORRECCIÓN AQUÍ: Comillas invertidas ` ` y quitada la barra inicial extra
            images: [`${basePath}projects/qbitcoin.png`, `${basePath}projects/qbitcoin.mp4`],
            extendedDescription: "La idea es sustituir el puzle clásico basando en hash por un puzle cuántico basado en Max-Cut. \n\n La resolución de la prueba de se hace con el algortimo QAOA.",
            github: "https://github.com/mikealiende/Quantum-Blockchain",
            link: "#"
        },
        {
            title: "Cerebro digital Computación cuántica",
            category: "Computación cuántica",
            description: "Este es mi cerebro digitial de Obsidian sobre física cuántica y computación cuántica.",
            technologies: ["Obsidian", "Markdown"],
            // CORRECCIÓN AQUÍ: Comillas invertidas ` `
            images: [`${basePath}projects/Obsidian.png`],
            link: "https://obsidian-quartz.vercel.app"
        }
    ]

    return (
        <div className="projects-page">

            <div className="container section">

                <Reveal>
                    <h1 className="page-title">Mis Proyectos</h1>
                </Reveal>


                <section className="project-section">
                    <Reveal>
                        <h2 className="section-title">Computación cuántica</h2>
                    </Reveal>
                    <div className="projects-grid">
                        {quantumProjects.map((project, index) => (
                            <Reveal key={index} width="100%" className="project-reveal">
                                <div onClick={() => openModal(project)}>
                                    <ProjectCard {...project} link={null} />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="project-section">
                    <Reveal>
                        <h2 className="section-title">Ingeniería & Telecomunicaciones</h2>
                    </Reveal>
                    <div className="projects-grid">
                        {engineeringProjects.map((project, index) => (
                            <Reveal key={index} width="100%" className="project-reveal">
                                <div onClick={() => openModal(project)}>
                                    <ProjectCard {...project} link={null} />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            </div>
            {/* EL MODAL AL FINAL */}
            <Modal
                isOpen={!!selectedProject}
                onClose={closeModal}
                project={selectedProject}
            />
        </div>
    )
}

export default Projects