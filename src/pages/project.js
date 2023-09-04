import Card from "../components/card";
import p1_src from "../images/p1.png";
import p2_src from "../images/p2.jpg";
import p3_src from "../images/p3.jpeg";
import p4_src from "../images/p4.jpeg";
import p5_src from "../images/p5.png";
import "./project.css";
import Footer from '../components/footer'
function Project() {
  return (
    <>
    <div className="container-fluid">
      <div className="row row2">
        <div className="col col1 col3" style={{color:'#c5c4c4'}}>
          <h1>Projects</h1>
          <p>Some of my recent works.</p>
        </div>
      </div>
      <div className="row">
        <div className="col col2" style={{ background: "black" }}>
          <h3>Projects</h3>
        </div>
      </div>
      <div
        className="row justify-content-evenly"
        style={{ background: "black", height: "100%" }}
      >
        <div className="col-md-3">
          <Card
            para="This is the React App for the expense tracker. You can keep track of your daily expenses with the app and go back to measure how well you stick to your budget."
            path="https://github.com/aditya7077/Expense_Tracker"
            title="Expense Tracker"
            img_src={p1_src}
            path2="https://aditya7077.github.io/Expense_Tracker/"
          />
        </div>
        <div className="col-md-3">
          <Card
            para="This project provides demonstration of front-end skills by recreating the core features and design elements that make YouTube front page so captivating."
            path="https://github.com/aditya7077/Youtube_Clone"
            title="Youtube Clone"
            img_src={p2_src}
            path2="https://aditya7077.github.io/Youtube_Clone/"
          />
        </div>
        <div className="col-md-3">
          <Card
            para="Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen and viewports."
            path="https://github.com/aditya7077/Responsive_Webpage"
            title="Responsive Webpage"
            img_src={p3_src}
            path2="https://aditya7077.github.io/Responsive_Webpage/"
          />
        </div>
        <div className="col-md-3">
          <Card
            para="Input validation is the process of testing input received by the application for compliance against a standard defined within the application."
            path="https://github.com/aditya7077/Form_validation"
            title="Form Validation"
            img_src={p4_src}
            path2="https://aditya7077.github.io/Form_validation/"
          />
        </div>
        <div className="col-md-3">
          <Card
            para="The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words."
            path="https://github.com/aditya7077/Word_Counter"
            title="Word Counter"
            img_src={p5_src}
            path2="https://aditya7077.github.io/Word_Counter/"
          />
        </div>
        
      </div>
    </div>
      <Footer></Footer>
      </>
  );
}
export default Project;
