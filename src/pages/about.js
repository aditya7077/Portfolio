import "./about.css";
import Footer from "../components/footer";

function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row row2">
          <div className="col col1 col3" style={{ color: "#c5c4c4" }}>
            <h1>About</h1>
            <p>Lets discuss something about me.</p>
          </div>
        </div>
        

        <div
          className="row justify-content-evenly abt-sec2"
          style={{ background: "black", height: "100%", textAlign: "center" }}
        >
          <div className="col-md-5" style={{ color: "#c5c4c4" }}>
            <h3 className="heading">Who Am I ?</h3>
            <br />
            <h4>React Developer</h4>
            <p>
              Hello there, I'm Aditya Agrahari, and I'm currently embarking on
              an exciting educational journey at IIIT Bhopal. Pursuing a
              Bachelor's degree in Electronics and Communication Engineering, I
              find myself at the intersection of technology.
              Hailing from the charming city of Pratapgarh in Uttar Pradesh, I
              bring a unique perspective to my studies and passions. As I
              navigate through my academic years from 2022 to 2026, I am
              nurturing a burgeoning skill set in web development. By combining
              my technical prowess with an eye for design, I am enthusiastically
              engaged in crafting seamless and captivating digital experiences.
              Join me on this adventure as I merge my academic pursuits with my
              passion for web development, turning lines of code into compelling
              user journeys.
            </p>
            <br />
            <h3>Skills</h3>
            <p>
              <button type="button" class="btn btn-primary">
                HTML
              </button>
              <button type="button" class="btn btn-secondary">
                CSS
              </button>
              <button type="button" class="btn btn-success">
                JAVASCIPT
              </button>
              <button type="button" class="btn btn-danger">
                REACT JS
              </button><br/>
              <button type="button" class="btn btn-warning">
                BOOTSTRAP
              </button>
              <button type="button" class="btn btn-info">
                GIT
              </button>
              <button type="button" class="btn btn-light">
                GITHUB
              </button>
              <button type="button" class="btn btn-dark">
                C
              </button>
              <button type="button" class="btn btn-dark">
                C++
              </button>
              <button type="button" class="btn btn-dark">
                OOPS
              </button>


              
            </p>
            
            
          </div>
          {/* <div className="col-md-3">
            <img src={profile_pic} alt="" className="img-fluid"></img>
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default About;
