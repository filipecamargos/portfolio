import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Mobilesidebar from "./components/Mobilebar/Mobilebar"
import Main from "./components/MainContent/MainContent";

function App() {
  //Manage the page content in relation to the options on Sidebar
  const [contentDisplay, setContentDysplay] = useState("Home");

  //Home click
  const handleHomeClick = () => {
    setContentDysplay("Home");
  };

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

  return (
    <div>
      <Sidebar
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onProjectClick={handleProjectClick}
        onExperienceClick={handleExperienceClick}
        contentDisplay={contentDisplay}
      />
      {(contentDisplay !== "Home") && <Mobilesidebar
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onProjectClick={handleProjectClick}
        onExperienceClick={handleExperienceClick}
        contentDisplay={contentDisplay}
      />}
      <Main contentDisplay={contentDisplay} />
    </div>
  );
}

export default App;
