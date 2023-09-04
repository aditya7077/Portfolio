import { useState } from 'react';
import Footer from '../components/footer';
import './contact.css'
function Contact() {
    const [name, setName] = useState()


    function handleChange(e){
        setName(e.target.value)
    }
    

    function handleClick(){
      if(name){
        alert(`We will be in touch ${name}`)
      }
      else{
        alert('Please Enter The Name')
      }
      
        
        
        
    }


  return (
    <>
    <div className="container-fluid">
      <div className="row row2">
        <div className="col col1 col3" style={{ color: "#c5c4c4" }}>
          <h1>Contact</h1>
          <p>Lets connect to each other.</p>
        </div>
      </div>
      <div
        className="row justify-content-evenly abt-sec2"
        style={{ background: "black", height: "100%", textAlign: "left" }}
      >
        <div className="col-md-5" style={{ color: "#c5c4c4" }}>
            <h2 style={{textAlign:'center'}}>Contact Form</h2>
          <form>
            <label htmlFor="formGroupExampleInput" className="form-label">
              Your Name
            </label>
            <input onChange={handleChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput" 
              
            />
            <label htmlFor="formGroupExampleInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput" 
              
            />
            <label htmlFor="formGroupExampleInput" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput" 
              
            />
            <label htmlFor="formGroupExampleInput" className="form-label">
              Message
            </label>
            <textarea
              type="textarea"
              className="form-control"
              id="formGroupExampleInput" 
              
            />
           
            <button onClick={handleClick} className="btn btn10" type="submit">Send Message</button>
            
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
export default Contact;
