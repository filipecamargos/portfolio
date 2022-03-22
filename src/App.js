import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/MainContent/MainContent";

function App() {
  //Manage the page content in relation to the options on Sidebar
  const [contentDisplay, setContentDysplay] = useState("Home");

  //About click
  const handleAboutClick = () => {
    setContentDysplay("About");
  };

  //Project click
  const handleProjectClick = () => {
    setContentDysplay("Projects");
  };

  //Experience click
  const handleExperienceClick = () => {
    setContentDysplay("Experience");
  };

  //Contact click
  const handleContactClick = () => {
    setContentDysplay("Contact");
  };

  return (
    <div>
      <Sidebar
        onAboutClick={handleAboutClick}
        onProjectClick={handleProjectClick}
        onExperienceClick={handleExperienceClick}
        onContactClick={handleContactClick}
        contentDisplay={contentDisplay}
      />
      <Main contentDisplay={contentDisplay} />
    </div>
  );
}

export default App;
