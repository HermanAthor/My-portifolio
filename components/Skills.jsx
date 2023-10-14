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
        <h1 className="text-3xl">Technical Skills</h1>
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

      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container p-20">
        {skillsData.map((data) => {
          return <TechStack key={data.id} data={data} />;
        })}
      </div> */}
    </section>
  );
}

export default Skills;
