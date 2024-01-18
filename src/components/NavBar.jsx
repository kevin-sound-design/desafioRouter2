import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const isActiveNav = ({isActive}) => {
    return isActive ? "active" : "notActive";
  }
  return (
    <nav className='myNavBar'>
      <div className='navLink'>
        <NavLink to = "/" className = {isActiveNav}>
          Home
        </NavLink>
        <NavLink to = "/pokemones" className = {isActiveNav}>
          Pokemones
        </NavLink>
      </div>
      <div className='iconoPagina'>
        <NavLink to="/">
          <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokemon_go_icon_138275.png" alt="icono-pokemon" />
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar