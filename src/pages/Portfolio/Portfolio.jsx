import React from "react";
import LettestProject from "./LettestProject";
import { Link } from "react-router-dom";
import OurDoneProjects from "./OurDoneProjects";

const Portfolio = () => {
  return (
    <div className="">
      <LettestProject></LettestProject>
      <OurDoneProjects></OurDoneProjects>
    </div>
  );
};

export default Portfolio;
