import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import PokeInfo from './views/PokeInfo'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/pokemones' element = {<Pokemones />} />
        <Route path='/pokemones/:name' element = {<PokeInfo />} />
      </Routes>
    </>
  )
}

export default App
