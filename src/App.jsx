import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {  
  return (
    <>
      <Navbar />
      <div style={{marginTop: '6vh'}}></div>
      <Hero />
      <About />
    </>
  )
}

export default App
