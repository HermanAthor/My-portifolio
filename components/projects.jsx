"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const projects = [
  {
    id: 1,
    image: "/portifolio.png",
    projectName: "My Portifolio",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "https://github.com/HermanAthor/My-portifolio",
    demo: "herman-portifolio.vercel.app",
    tech: ["Nextjs", "React", "Tailwind", "Git"],
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=600",
    projectName: "Athormax",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "#",
    demo: "#",
    tech: ["Nextjs", "React", "Tailwind", "Git"],
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=600",
    projectName: "AthorStore",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "#",
    demo: "#",
    tech: ["Nextjs", "React", "Tailwind", "Git"],
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=600",
    projectName: "NotesApp",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "#",
    demo: "#",
    tech: ["Nextjs", "React", "Tailwind", "Git"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="">
      <Grid className="flex justify-center items-center">
        <Typography
          className="text-5xl md:text-7xl font-sans font-extrabold text-black"
          variant="h3"
        >
          Projects I have built
        </Typography>
      </Grid>
      <Container>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-0">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </Container>
    </section>
  );
}

const Project = ({ project }) => {
  const { image, projectName, description, code, demo, tech } = project;
  return (
    <Card
      className="mb-4 mt-4 flex flex-col rounded-2xl p-4 dark:bg-[#3e3e42] bg-slate-500 hover:border-blue-300 hover:bg-slate-300 "
      variant="outlined"
    >
      <CardMedia
        component="img"
        image={image}
        height="175"
        alt={projectName}
        className="object-contain h-64 w-full"
      />
      <CardContent>
        <Typography variant="h4">{projectName}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Box className="mt-3">
          {tech?.map((tool) => {
            return (
              <span
                className="p-2 m-3  border-blue-200 border-2 rounded-xl "
                key={tool}
              >
                {tool}
              </span>
            );
          })}
        </Box>
      </CardContent>
      <CardActions>
        <Button>
          <a href={demo}>Demo</a>
        </Button>
        <Button>
          <a href={code}>Code</a>
        </Button>
      </CardActions>
    </Card>
  );
};
