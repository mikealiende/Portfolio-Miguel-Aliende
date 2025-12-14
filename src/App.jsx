// src/App.jsx
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
    </div>
  )
}

export default App