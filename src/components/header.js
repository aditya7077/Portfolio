import { Link } from "react-router-dom";


function Header() {
  return (

      <nav
        className="navbar navbar-expand-lg bg-body-danger"
        style={{ background: "black", opacity: "0.8", color: "whitesmoke" }}
      >
        <div className="container-fluid">
          
          <Link to='/Portfolio' className="brand">Portfolio.</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'22px'}}>
              <li className="nav-item">
                
                <Link to='/Portfolio' className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/project' className="nav-link active">Project</Link>
              </li>
              <li className="nav-item">
              <Link to='/about' className="nav-link active">About</Link>
              </li>
              <li className="nav-item">
              <Link to='/contact' className="nav-link active">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
  );
}
export default Header;
