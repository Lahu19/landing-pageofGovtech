import React from "react";
import Home from "./home";
import Impact from "./impact";

const ScrollToComponents = () => {
  return (
    <div>
      <div id="home"><Home /></div>
      <div id="impact"><Impact /></div>
      <div id="chapters">This is the Chapters Component</div>
      <div id="chapterStructure">This is the Chapter Structure Component</div>
    </div>
  );
};

export default ScrollToComponents;
