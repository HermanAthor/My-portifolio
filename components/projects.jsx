"use client";
import {
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
    projectName: "E-commerce Store",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "https://github.com/HermanAthor/My-portifolio",
    demo: "herman-portifolio.vercel.app",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=600",
    projectName: "E-commerce Store",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "#",
    demo: "#",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=600",
    projectName: "E-commerce Store",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "#",
    demo: "#",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=600",
    projectName: "E-commerce Store",
    description:
      "been working at Kona Software Lab Limited since August 2021 as a Full Stack Developer. I have also been involved in a number of research projects regarding Artificial Intelligence, Computer Networks and Cyber-security.",
    code: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="">
      <Grid className="flex justify-center items-center">
        <Typography variant="h3">Projects I have built</Typography>
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
  const { image, projectName, description, code, demo } = project;
  return (
    <Card
      className="mb-4 mt-4 flex flex-col rounded p-4 dark:bg-[#3e3e42]"
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
