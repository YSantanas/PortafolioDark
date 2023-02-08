import React from "react";
import logo from "../LogoYvette.png";

import { Button, Stack, Heading, Center } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const Inicio = () => {
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
        {/* <Stack direction={["column", "row"]} spacing={3} align="center"> */}
        <div className="row gap-4 justify-content-center">
          <Button
            className="col-lg-3 col-6"
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link to="/acerca" className="text-white text-decoration-none">
              Acerca de
            </Link>
          </Button>

          <Button
            className="col-lg-3 col-6"
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link to="/proyectos" className="text-white text-decoration-none">
              Proyectos
            </Link>
          </Button>

          <Button
            className="col-lg-3 col-6"
            colorScheme="teal"
            variant="solid"
            size="lg"
            height="48px"
            width="120px"
            border="2px"
            borderColor="gray.300"
          >
            <Link to="/contactame" className="text-white text-decoration-none">
              Contactame
            </Link>
          </Button>
          {/* </Stack> */}
        </div>
      </header>
    </div>
  );
};
export default Inicio;
