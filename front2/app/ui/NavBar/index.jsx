"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import styles from "@/app/ui/NavBar/NavBar.module.sass";

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    let prevScrollY = 0;
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (prevScrollY > window.scrollY) {
        setMostrar(true);
      } else {
        setMostrar(false);
      }
      prevScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      fluid
      rounded
      className={`fixed z-50 w-full color-white ${
        isScrolled ? "bg-white" : " bg-transparent text-white"
      } ${mostrar ? styles.show : styles.hide}`}
    >
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
