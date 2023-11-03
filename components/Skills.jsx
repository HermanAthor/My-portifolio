"use client";
import { skillsData } from "@/Data/skillsData";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TechStack from "./TechStack";
import { Container, Stack } from "@mui/material";

function Skills() {
  return (
    <section id="skills">
      <div className="flex justify-center items-center mt-0 mb-7">
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-black">
          technical skills
        </h1>
      </div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Stack
          m="auto"
          direction="row"
          columnGap={{ xs: 2, sm: 4, md: 6 }}
          rowGap={{ xs: 2, sm: 4, md: 6 }}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          {skillsData.map((data) => {
            return <TechStack key={data.id} data={data} />;
          })}
        </Stack>
      </Container>
    </section>
  );
}

export default Skills;
