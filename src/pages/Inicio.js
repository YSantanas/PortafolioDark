import "bootstrap-icons/font/bootstrap-icons.css";

import { Center } from "@chakra-ui/react";

import Foto1 from "../assets/foto1.jpg";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

export const Inicio = () => {
  return (
    
    <div className="Pag-header">
      <Heading as="h2" color="gray.100" size="2xl" py="5" fontFamily='Heading Font Name'>
        Acerca de mi
      </Heading>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        boxShadow="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src={Foto1}
          alt="Caffe Latte"
          boxSize="auto"
          p="1"
          rounded="md"
          boxShadow="2xl"
        />

        <Stack>
          <CardBody>
            <Heading size="lg">Inicio</Heading>

            <Text py="5" color="teal.600">
              Mi nombre es Yvette, me dedico ponderantemente al desarrollo web.
            </Text>
          </CardBody>
          <Center>
            <CardFooter >
              <Link color="purple.600" href="https://github.com/YSantanas" isExternal>
                <i class="bi bi-github"></i>
              </Link>

              <Link
              color="linkedin.600"
                ml="5"
                href="https://www.linkedin.com/in/m-yvette-santana-s%C3%A1nchez-615968229/"
                isExternal
              >
                <i class="bi bi-linkedin"></i>
              </Link>
              <Link
              color="facebook.600"
                ml="5"
                href="https://facebook.com/yvet.santana.75"
                isExternal
              >
                <i class="bi bi-facebook"></i>
              </Link>
            </CardFooter>
          </Center>
        </Stack>
      </Card>
     
    </div>
    
  );
};
export default Inicio;
