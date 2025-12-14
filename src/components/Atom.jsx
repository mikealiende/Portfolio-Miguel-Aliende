import './Atom.css'

const Atom = () => {
    return (
        <div className="atom-container">
            <div className="atom">
                <div className="nucleus"></div>
                <div className="orbit orbit-1">
                    <div className="electron"></div>
                </div>
                <div className="orbit orbit-2">
                    <div className="electron"></div>
                </div>
                <div className="orbit orbit-3">
                    <div className="electron"></div>
                </div>
            </div>
        </div>
    )
}

export default Atom