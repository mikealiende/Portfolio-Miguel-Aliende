import './Home.css'
import Atom from '../components/Atom'
const Home = () => {
    return (
        <div className="home">
            <Atom />
            <div className="container home-container">

                {/* Columna Izquierda: Texto */}
                <div className="home-text">
                    <h1 className="hero-title">
                        Hola, Soy <span className="text-gradient">Miguel Aliende</span>
                    </h1>
                    <p className="hero-subtitle">
                        Ingeniería de Telecomunicaciones & Computación Cuántica
                    </p>
                    <div className="cta-group">
                        <a href="#projects" className="btn">Ver Proyectos</a>
                        <a href="#about" className="btn btn-outline">Sobre Mí</a>
                    </div>
                </div>

                {/* Columna Derecha: Imagen */}
                <div className="home-image">
                    <div className="image-glow"></div>
                    <img src="/profile.png" alt="Miguel Aliende" />
                </div>
            </div>
            {/* Indicador */}
            <a href="#projects" className="scroll-down">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span className="arrow"></span>
            </a>
        </div>
    )
}

export default Home