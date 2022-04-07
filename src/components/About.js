import React, { useState } from "react";

export default function About() {
  const [myStyle, setMystyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
      });
      setBtnText("Enable light Mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark Mode");
    }
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Anaylize Your Text 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Text analysis involves information retrieval, lexical analysis to study word frequency distributions, pattern recognition, tagging/annotation, information extraction, data mining techniques including link and association analysis, visualization, and predictive analytics. The overarching goal is, essentially, to turn text into data for analysis, via application of natural language processing (NLP), different types of algorithms and analytical methods. An important phase of this process is the interpretation of the gathered information.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Free To Use 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">This is a list of free and open-source software packages, computer software licensed under free software licenses and open-source licenses. Software that fits the Free Software Definition may be more appropriately called free software; </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">A text-based web browser is a web browser that renders only the text of web pages, and ignores most graphic content. Under small bandwidth connections, usually, they render pages faster than graphical web browsers due to lowered bandwidth demands. Additionally, the greater CSS, JavaScript and typography functionality of graphical browsers require more CPU resources</div>
    </div>
  </div>

      <div className="container my-3">
        <button onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div>
  </div>
  );
}
