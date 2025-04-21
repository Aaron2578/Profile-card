import react, { useState, useEffect } from "react";
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
  {
    skill: "CANVA",
    color: "4px solid skyblue",
    level: "Beginer",
    img: "canva.png",
  },
  {
    skill: "FIGMA",
    color: "4px solid skyblue",
    level: "Beginer",
    img: "figma.png",
  },
  {
    skill: "ADOBE PHOTOSHOP",
    color: "4px solid skyblue",
    level: "Beginer",
    img: "photoshop.jpg",
  },
];

const message = [
  "Create ...",
  "... Build ...",
  "... Innovate ...",
  "... Focus ...",
  "... Grow",
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
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString().toLocaleUpperCase()
  );
  // const [step, setStep] = useState(1);
  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString().toLocaleUpperCase());
  }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % message.length);
    }, 3000); // change every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

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
      <p className="message">
        {/* <span>... </span> */}
        {message[index]}
        {/* <span> ...</span> */}
      </p>
      <p className="clock">{currentTime}</p>
      {/* <button onMouseOver={update}>Change</button> */}
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
          key={skill.skill}
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
      {/* <button className="btn">
        <a href="AARON NEW JOB RESUME.pdf" target="_blank">
          Resume
        </a>
      </button> */}
      <button className="btn">
        <a href="https://aaronc.netlify.app/" rel="noreferrer" target="_blank">
          More ...
        </a>
      </button>
    </div>
  );
}
function CopyRights() {
  {/* const getYear = new Date().getFullYear();
      console.log(getYear); */}
  return (
    <footer className="footer">
     {/* <p>&copy; {getYear}. All rights reserved.</p> */}
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        Built with
        {
          <span>
            <img src="favicon.ico" height={"20px"} alt="react-img"></img>
          </span>
        } React.js
      </p>
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
