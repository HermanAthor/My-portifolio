"use client"

import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Grid,Box, TextField, Button } from '@mui/material';

function ContactMe() {
  return (
    <div className='mb-10'>
        <div className='flex justify-center items-center'>
            <h1 className='items-center mx-auto text-3xl my-4 mb-4'>Wanna Know more About Me</h1>
        </div>
        <div>
            <h1 className='text-2xl'>Don't hestate to call Me <span className=' text-lg block italic'>Or even a simple feedback is highly appreciated</span></h1>
        </div>
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Box className="flex flex-col mt-9">
                        <div className='flex flex-row  justify-start align-start items-center'>
                            <div className='p-2 m-2 rounded-full bg-slate-500'><EmailOutlinedIcon/></div>
                            <div>
                                <h6>Email</h6>
                                <h6>hermanathorg@gmail.com</h6>
                            </div>
                        </div>
                        <div className='flex flex-row justify-start align-start items-center'>
                            <div className='p-2 m-2 rounded-full bg-slate-500'><PhoneInTalkOutlinedIcon/></div>
                            <div>
                                <h6>Phone</h6>
                                <h6>+4591870973</h6>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='text-xl px-3 my-4'>Send Me a Message</div>
                    <div>
                        <form action="submit">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        className='text-white'
                                        sx={{ input: { color: 'white' } }} 
                                        required
                                        label="Full Name"
                                        defaultValue="Company"
                                        focused
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        sx={{ input: { color: 'white' } }} 
                                        required
                                        label="Email"
                                        defaultValue="email@example.com"
                                        focused
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField
                                        inputProps={{ style: { color: "white" } }}

                                        required
                                        label="Message"
                                        defaultValue="I wanna Hire You"
                                        multiline
                                        maxRows={4}
                                        focused
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Button variant="outlined">Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default ContactMe