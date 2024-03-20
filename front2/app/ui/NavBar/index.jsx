"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import styles from "@/app/ui/NavBar/NavBar.module.sass";

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    let prevScrollY = 0;

    if (window.scrollY <= 0) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }

    if (window.scrollY >= window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      console.log(window.scrollY);
      console.log(prevScrollY);

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
      className={`fixed z-50 w-full text-white ${
        !isScrolled ? styles.fulltransparent : styles.semitransaparent
      } ${mostrar ? styles.show : styles.hide}`}
      id="nav"
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
        <Navbar.Link href="#" className="text-white">
          Home
        </Navbar.Link>
        <Navbar.Link href="#Image-Info" className="text-white">
          Locales
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
