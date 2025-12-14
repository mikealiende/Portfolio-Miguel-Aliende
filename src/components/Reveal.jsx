import { useEffect, useRef, useState } from 'react'

// Aceptamos 'className' para poder darle estilos desde fuera
const Reveal = ({ children, width = "fit-content", className = "" }) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }, { threshold: 0.1 })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) observer.disconnect()
        }
    }, [])

    return (
        // Quitamos overflow: hidden y añadimos className
        <div ref={ref} className={className} style={{ width, position: 'relative' }}>
            <div
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(75px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                    height: '100%' // IMPORTANTE: Para que el contenido llene el alto
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Reveal