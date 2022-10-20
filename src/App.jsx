import './App.css'
import { Contact as Contact } from './components/Contacto/Contact'
import { Home } from './components/Home/Home'
import { Models } from './components/Modelos/Models'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './components/Nosotros/AboutUs'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App bg-[#f8fafc]">
      <NavBar />
      <Home />
      <Models />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App