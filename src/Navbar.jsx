import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <div className="nav">
      <NavLink to="/" className='homebtn'>Home</NavLink>
      <NavLink to="/pastes" className='pastesbtn'>Pastes</NavLink>
    </div>
  )
}

export default Navbar;
