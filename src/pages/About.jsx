import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <h1 className="page-title">About Me</h1>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate Telecommunications Engineer with a deep interest in Quantum Computing.
                            My journey has led me to explore the intersection of classical engineering and quantum mechanics,
                            aiming to contribute to the next generation of computing technologies.
                        </p>
                    </div>

                    <section className="education-section">
                        <h2 className="section-title">Education</h2>

                        <div className="education-card">
                            <div className="edu-header">
                                <h3 className="edu-degree">Master in Quantum Computing</h3>
                                <span className="edu-year">2023 - Present</span>
                            </div>
                            <p className="edu-school">University / Institution Name</p>
                            <p className="edu-description">
                                Specializing in quantum algorithms, error correction, and quantum hardware architectures.
                                (Add more details about your thesis or key subjects here).
                            </p>
                        </div>

                        <div className="education-card">
                            <div className="edu-header">
                                <h3 className="edu-degree">Telecommunications Engineering</h3>
                                <span className="edu-year">Graduated</span>
                            </div>
                            <p className="edu-school">University Name</p>
                            <p className="edu-description">
                                Focus on signal processing, antenna design, and communication systems.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default About
