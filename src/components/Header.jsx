import React from "react";
import logo from "../LogoYvette.png";

import { Button, Stack, Heading, Center } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="App-header">
      <header>
        <Center>
          <img src={logo} className="App-logo" alt="logo" />
        </Center>
        <Heading as="h2" color="gray.100" size="2xl">
          Portafolio
        </Heading>
        <br />
        <Stack direction={["column", "row"]} spacing={3} align="center">
          {/* <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link to="/">Inicio</Link>
         
          </Button> */}

          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link to="/acerca#acerca">Acerca de</Link>
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
            <Link to="/proyectos#proyectos">Proyectos</Link>
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
            <Link to="/contactame#contactame">Contactame</Link>
          </Button>
        </Stack>
      </header>
    </div>
  );
};
export default Header;
