import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Heading } from "@chakra-ui/react";

import git1 from "../assets/git1.png";
import git2 from "../assets/git2.png";
import git3 from "../assets/git3.png";
import git4 from "../assets/git4.png";
import git5 from "../assets/git5.png";
import git6 from "../assets/git6.png";
import git7 from "../assets/git7.png";

import { Button, Link, Center } from "@chakra-ui/react";

const fotos = [git1, git2, git3, git4, git5, git6,git7];
const nombres = [
  "TreeAcademy",
  "Proyecto IA",
  "Flash Basket",
  "Big Cars",
  "MYSS-Cine",
  "MiPC",
  "cine",
];
const descripcion = [
  "Página web para la venta de cursos de diferentes carreras.",
  "Página web que implementa algoritmos de Inteligencia Artificial.",
  "Página web sobre de deportes que implementa firebase.",
  "Página web que implementa la base de datos de un concesionario de coche",
  "Página web para añadir,modificar y eliminar datos de peliculas.",
  "Aplicación móvil que implementa la venta de productos electrónicos.",
  "plicación móvil ",
];


const direccion = [
  "https://github.com/YSantanas/treeAcademyFULL",
  "https://github.com/YSantanas/IAProyecto",
  "https://github.com/YSantanas/IAFlask",
  "https://github.com/YSantanas/BaseDProyecto",
  "https://github.com/YSantanas/webCine",
  "https://github.com/YSantanas/miPC",
];

const Proyectos = () => {
  return (
    <div className="Pag-header">
      <Heading as="h2" color="gray.100" size="2xl" py="5" fontFamily='Heading Font Name'>
        Proyectos
      </Heading>

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className="card-github">
              <Card.Img variant="top" src={fotos[idx]} class="img-thumbnail" />
              <Card.Body>
                <Card.Title>{nombres[idx]}</Card.Title>
                <Card.Text>{descripcion[idx]}</Card.Text>
              </Card.Body>
              <Center>
                <Button
                  height="60px"
                  width="100%"
                  colorScheme="teal"
                  variant="ghost"
                >
                   
                  <Link href={direccion[idx]} isExternal>
                  <i class="bi bi-github"> Acceder</i> 
                  </Link>
                  
                </Button>
              </Center>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Proyectos;
