import React from "react";

import { Typography, Stack, Avatar } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";

function TechStack({ data }) {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <Stack
        textAlign="center"
        direction="column"
        alignItems="center"
        bgcolor="#838787"
        spacing={1}
        p={1}
        borderRadius={3}
        minWidth="5.7rem"
      >
        <Avatar
          className=" object-cover"
          src={data.img}
          alt="icon image"
          sx={{ width: { xs: 100, md: 200 }, height: { xs: 100, md: 200 } }}
        />
        <Typography variant="h6">{data.title}</Typography>
      </Stack>
    </AnimationOnScroll>
  );
}

export default TechStack;
