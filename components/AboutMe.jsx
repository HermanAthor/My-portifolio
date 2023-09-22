import { Grid } from "@mui/material";
import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col justify-items-start items-center text-white  h-screen">
      <div className="flex flex-col items-center text-5xl ">
        <h1>A little about me</h1>
        <div className=" w-36 hover:w-60 bg-blue-700 h-1 mt-7"></div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <p>I'm a Front-End developer Who's</p>
          <ul>
            <li>Dedicated</li>
            <li>Fast Learner</li>
            <li>Team Player</li>
            <li>
              Introvert I think this is like 50% of the time 'Rough estimate'
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
