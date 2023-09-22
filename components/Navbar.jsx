"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-4">
        <Image
          src="/hermanlogo.svg"
          alt="hermanlogo"
          width={200}
          height={200}
        />
        <div className="md:hidden flex flex-row justify-center items-center gap-3">
          <div>
            {isOpen ? (
              <Button onClick={() => handleClose()} variant="outlined">
                {" "}
                <CloseIcon />{" "}
              </Button>
            ) : (
              <Button onClick={() => handleClose()} variant="outlined">
                {" "}
                <MenuIcon />{" "}
              </Button>
            )}
          </div>
          <Avatar
            src="/hermandp.png"
            alt="herman"
            sx={{ width: 100, height: 100 }}
          />
        </div>

        <ul className="flex justify-between text-4xl items-center md:gap-5 gap-3 font-serif font-semibold max-sm:hidden">
          <li className=" hover:underline">About</li>
          <li className=" hover:underline">Skills</li>
          <li className=" hover:underline">Projects</li>
          <li className=" hover:underline">contact</li>
        </ul>
      </nav>
      {isOpen && (
        <div className="relative">
          <nav className="flex justify-between items-center  md:hidden absolute top-0 left-0 z-50">
            <ul className="flex justify-between flex-col items-center md:gap-5 gap-3 font-serif font-semibold bg-gray-900 py-5 px-8 rounded-3xl relative text-3xl">
              <li
                onClick={() => setIsOpen(false)}
                className=" hover:underline mt-7"
              >
                About
              </li>
              <li onClick={() => setIsOpen(false)} className=" hover:underline">
                Skills
              </li>
              <li onClick={() => setIsOpen(false)} className=" hover:underline">
                Projects
              </li>
              <li onClick={() => setIsOpen(false)} className=" hover:underline">
                contact
              </li>
              <div className="absolute top-0 right-0 m-2">
                <IconButton
                  onClick={() => setIsOpen(false)}
                  className=" bg-slate-500 px-2 rounded-full hover:bg-red-400"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
