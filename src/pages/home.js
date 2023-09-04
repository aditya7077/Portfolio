import "./home.css";

import { Link } from "react-router-dom";

import Footer from "../components/footer";
function Home() {
  return (
    <>
    <div className="container-fluid">
      <div className="row row1">
        <div className="col col1" style={{color:'#c5c4c4'}}>
          <p>HI, I'M ADITYA</p>
          <h1>WEB DEVELOPER</h1>

          <Link to="/project" className="btn btn-primary">
            Project
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
      </div>
     
    
    </div>
     <Footer></Footer>
     </>

  );
}
export default Home;
