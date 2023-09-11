import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">The Stepping Stone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav> 
    </>
  )
}

export default Navbar