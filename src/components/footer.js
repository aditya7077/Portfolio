import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
const Footer = () => {
  return (
    <div className="container-fluid">
    <div className="row justify-content-evenly pt-5  text-left" style={{backgroundColor:'#2f2d2d',color:'#c5c4c4'}}>
      <div className="col-md-3 mb-4">
        <h4 className="mb-3">About</h4>
        <p>
          This is Aditya Agrahari, IIIT Bhopal undergraduate. <br/>I enjoy discussing new projects and design challenges.<br/>
          
        </p>
        
      </div>
      
      <div className="col-md-3 mb-4">
        <h4 className="mb-3">Contact</h4>
        <p>
          IIIT Bhopal,
          <br />
          Bhopal,
          
          Madhya Pradesh
          <br />
          <i className="bi bi-telephone"></i> : 8756778735 <br/>
          <Link to='https://instagram.com/ani_agrahari?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'><i class="bi bi-instagram"></i></Link>
          <Link to='https://github.com/aditya7077'><i class="bi bi-github"></i></Link>
          <Link to='https://www.linkedin.com/in/aditya-agrahari-055a6225a'><i class="bi bi-linkedin"></i></Link>
          <a href = "mailto:adityaagrahari10112002@gmail.com "><i class="bi bi-envelope-at"></i></a>
          
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
