import React from "react";
import logo from "../LogoYvette.png";

import { Button, Stack, Heading, Center } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="App-header">
      <header>
        <Center>
        <Link style={{ color: "white" }} to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        </Center>
        <Heading as="h2" color="gray.100" size="2xl">
          Portafolío
        </Heading>
        <br />
        <Stack direction="row" spacing={3} align="center">
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link style={{ color: "white" }} to="/">
              Inicio
            </Link>
          </Button>

          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link style={{ color: "white" }} to="/Acerca">
              Acerca de
            </Link>
          </Button>

          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link style={{ color: "white" }} to="/Proyectos">
              Proyectos
            </Link>
          </Button>

          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link style={{ color: "white" }} to="/Contactame">
              Contáctame
            </Link>
          </Button>
        </Stack>
      </header>
    </div>
  );
};
export default Header;
