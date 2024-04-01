import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import JsonData from "./resources/data/data.json";


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
