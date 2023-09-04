import './card.css'

import { Link } from "react-router-dom";
function Card({ img_src, para, path, path2 ,title}) {
  return (
    <>
      <div className="card" style={{ width: "18rem;", color:'#c5c4c4'}}>
        <img src={img_src} className="card-img-top card-img img-fluid" alt="..."/>
        <div className="card-body" style={{color:'#c5c4c4'}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{para}</p>

          <Link to={path} className="btn btn-primary btn1">
            Code
          </Link>
          <Link to={path2} className="btn btn-primary btn2">
            Site
          </Link>
        </div>
      </div>
    </>
  );
}
export default Card;
