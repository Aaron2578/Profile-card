import react from "react";
import reactdom from "react-dom/client";
import "./index.css";

const skillObj = [
  {
    skill: "HTML",
    color: "4px solid red",
    level: "Advanced",
    img: "html.png",
  },
  {
    skill: "CSS",
    color: "4px solid lightblue",
    level: "Advanced",
    img: "css.png",
  },
  {
    skill: "JAVASCRIPT",
    color: "4px solid yellow",
    level: "Intermediate",
    img: "js.png",
  },
  {
    skill: "REACT",
    color: "4px solid skyblue",
    level: "Beginer",
    img: "React.png",
  },
];

function App() {
  return (
    <div>
      <Card />
      <CopyRights />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Profile />
      <div className="about_skillwrapper">
        <About />
        <Skill />
        <More />
      </div>
    </div>
  );
}
function Profile() {
  return (
    <div className="profile">
      <img
        src="profile.png"
        alt="Profile-image"
        width={"12%"}
        className="profile-img"
      />
      <p className="profile-name">Aaron C</p>
      <p className="designation">Front-end Developer</p>
    </div>
  );
}
function About() {
  return (
    <p className="aboutPara">
      "As a recent graduate, I'm looking for an entry-level position in web
      development where I can use my knowledge and abilities to keep getting
      better. I am excited to learn and develop in a demanding and cooperative
      work environment."
    </p>
  );
}
function Skill() {
  return (
    <div className="skill">
      {skillObj.map((skill) => (
        <Skillset
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          img={skill.img}
        />
      ))}
    </div>
  );
}

function Skillset({ skill, color, level, img, radius }) {
  return (
    <div className="skillwrapper" style={{}}>
      {/* <span>{skill}</span> */}
      <span>
        <img src={img} alt="" height={"50px"} />
      </span>
    </div>
  );
}
function More() {
  return (
    <div className="btnGrp">
      <button className="btn">
        <a href="AARON NEW JOB RESUME.pdf" target="_blank">
          Resume
        </a>
      </button>
      <button className="btn">
        <a href="https://aaronc.netlify.app/" rel="noreferrer" target="_blank">
          Portfolio
        </a>
      </button>
    </div>
  );
}
function CopyRights() {
  const getYear = new Date().getFullYear();
  //   console.log(getYear);
  return (
    <footer className="footer">
      <p>&copy; Copyrights {getYear}. All rights reserved.</p>
    </footer>
  );
}
const rootElement = document.getElementById("root");
const root = reactdom.createRoot(rootElement);
root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
