"use client";

import emailjs from "@emailjs/browser";

import React, { useRef } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Grid, Box, TextField, Button } from "@mui/material";

function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q6cb5pp",
        "template_4gkm94r",
        form.current,
        "na67JSOIendhK0zHT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="mb-10 p-10 md:p-0">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-black">
          Wanna Know more About Me
        </h1>
      </div>
      <div>
        <h1 className="text-2xl">
          Don't hestate to call Me{" "}
          <span className=" text-lg block italic">
            Or even a simple feedback is highly appreciated
          </span>
        </h1>
      </div>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Box className="flex flex-col mt-9 ">
              <div className="flex flex-row  justify-start align-start items-center">
                <div className="p-2 m-2 rounded-full bg-slate-500">
                  <EmailOutlinedIcon />
                </div>
                <div>
                  <h6>Email</h6>
                  <a href="mailto:hermanathorg@gmail.com">
                    hermanathorg@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-start align-start items-center">
                <div className="p-2 m-2 rounded-full bg-slate-500">
                  <PhoneInTalkOutlinedIcon />
                </div>
                <div>
                  <h6>Phone</h6>
                  <a href="tel:+4591870973">+4591870973</a>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="text-2xl px-3 my-4 pl-7">Send Me a Message</div>
            <div>
              <form ref={form} onSubmit={sendEmail} className="p-10 md:p-2">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      className="text-white"
                      sx={{ input: { color: "white" } }}
                      required
                      label="Full Name"
                      defaultValue="Company"
                      focused
                      fullWidth
                      type="text"
                      name="user_name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      sx={{ input: { color: "white" } }}
                      required
                      label="Email"
                      defaultValue="email@example.com"
                      focused
                      fullWidth
                      type="email"
                      name="user_email"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      inputProps={{ style: { color: "white" } }}
                      required
                      label="Message"
                      defaultValue="I wanna Hire You"
                      multiline
                      maxRows={10}
                      focused
                      fullWidth
                      type="text"
                      name="message"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Button type="submit" variant="outlined">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default ContactMe;
