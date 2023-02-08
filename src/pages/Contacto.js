import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

import { Heading } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

export const Contacto = () => {
  return (
    <div className="Pag-header" id="contactame">
      <div className="container">
        <Navbar />

        <Heading
          as="h2"
          color="gray.100"
          size="2xl"
          py="5"
          fontFamily="Heading Font Name"
        >
          Contáctame
        </Heading>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-12 p-3 mb-2p-3 mb-2 bg-light text-dark rounded border border-info border border-2 bg-opacity-80">
            <Form>
              <Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control placeholder="Jane Doe" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="@example.com" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3 pb-1 pt-1">
                <Form.Group as={Col} controlId="formCiudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <InputGroup className="mb-3">
                <InputGroup.Text>Mensaje</InputGroup.Text>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  controlId="formMensaje"
                  placeholder="Motivo del mensaje"
                />
              </InputGroup>

              <div className="d-grid gap-2">
                <Button class="btn btn-outline-success" size="lg" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacto;
