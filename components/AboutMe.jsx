"use client";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function AboutMe() {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <section id="about" className="flex items-center flex-col">
      <div className="text-2xl">A little About Me</div>
      <div>
        <p className="md:hidden block px-4">
          Herman Athor, A Front-End Developer based in Copenhagen
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full relative">
          <img
            src="/hermandp.png"
            alt="herman dp"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setMoreInfo((prev) => !prev)}
            type="button"
            className="text-white bg-gradient-to-r sm:text-sm text-xl absolute -bottom-4 left-20 md:left-40 w-1/2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg  px-10 py-2 text-center mr-2 mb-2 "
          >
            {moreInfo ? "Know More" : "Briefly"}
          </button>
        </div>
        <div className="flex justify-center items-center">
          {!moreInfo ? (
            <p className="text-center text-2xl p-4">
              I'm Herman, a front-end developer from Uganda now calling Denmark
              home. Proud dad to an awesome son. My journey began with a
              computer science program, but life led me on a global adventure.
              Self-taught in coding, I joined HackYourFuture. I'm now crafting
              personal projects and seeking team opportunities. Dedicated, a
              team player, and a fast learner. Outside work, I cherish time with
              friends, scenic walks, board games, and continuous learning. My
              goal? To grow within a team, enhance problem-solving skills, and
              contribute to impactful tech projects, both environmentally and
              socially.
            </p>
          ) : (
            <div className="text-center text-lg md:text-xl p-4">
              <p>
                Hello, world! My name is Herman, your friendly neighborhood
                front-end developer. Picture this: I started my journey in sunny
                Uganda, but my quest for coding adventures led me to the
                enchanting land of Denmark. Oh, I'm a proud dad of an incredibly
                awesome son.
              </p>
              <br />
              <p>
                Now, let's rewind a bit. Once upon a time, I embarked on a
                computer science program that lasted a year. But then, like a
                character in an epic tale, I had to pack my bags and venture
                abroad to Sweden, and later, Denmark. Those computer science
                tutorials didn't stand a chance against my wanderlust!
              </p>
              <br />
              <p>
                But wait, there's more. Somewhere along the way, I felt the
                spark of passion for software development ignite within me. Like
                a modern-day coding wizard, I decided to teach myself the
                mystical arts of coding and crafting software, mainly focusing
                on the ever-evolving world of web development.
              </p>
              <br />
              <p>
                My journey took an exciting twist when I joined the legendary
                boot camp known as HackYourFuture. Imagine it like joining a
                secret society of developers, where we decipher the codes that
                make the digital realm come alive.
              </p>
              <br />
              <p>
                Fast forward to today, I'm a coding maverick, working on
                intriguing personal projects while actively seeking fellow
                adventurers to join my quest. My superpowers? Dedication,
                teamwork, and a knack for learning faster than a caffeinated
                squirrel.
              </p>
              <br />
              <p>
                But hey, I'm not all 1s and 0s! When I'm not battling bugs or
                crafting code, you'll find me chatting up friends, strolling
                through the scenic wonders of Denmark, challenging my comrades
                to epic board game battles, and, of course, diving headfirst
                into the vast ocean of knowledge. Learning, you see, is my
                ultimate quest, and I find it both fun and rewarding.
              </p>
              <br />
              <p>
                So, what's the grand plan? I'm on a mission to grow within a
                dynamic team, sharpen my problem-solving skills to legendary
                proportions, and contribute to tech projects that make a real
                impact, save the environment, or create social change. Join me
                on this epic journey through the digital realm, won't you? Let's
                code our way to a brighter tomorrow!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
