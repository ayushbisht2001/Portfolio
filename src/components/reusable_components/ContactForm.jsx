import React from "react";
import { Box, Col, Row } from "../../utility/styled_components/box";
import {
  ContactInput,
  Form,
  SimpleContactInput,
} from "../../utility/styled_components/input";
import FormInput from "./Forms";

const ContactForm = () => {
  return (
    <Box w="100%" h="100%" d="grid" justify="flex-start" align="center">
      <Box w="500px" h="500px" rad="100%" border="2px solid blue">
        <Box w="350px" h="350px" m="5rem auto" border="2px solid blue">
          <Box d="flex" justify="space-around" h="30%" align="center">
            <ContactInput></ContactInput>

            <ContactInput></ContactInput>
          </Box>

          <Box d="flex" justify="center" align="center" h="70%">
            <ContactInput></ContactInput>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;

export const SimpleContactForm = (props) => {
  return (
    <Form
      d="grid"
      w="100%"
      h="auto"
      rows="auto"
      cols="50% 50%"
      gap="10px"
      p="10px"
    >
      <Col h="auto">
        <FormInput label="Name" ph="Ayush Bisht" h="3rem" />
      </Col>
      <Col h="auto">
        <FormInput label="Email" ph="abc@gmail.com" h="3rem" />
      </Col>
      <Col
        sx={`
            grid-column : 1 / span 2;
        `}
        h="auto"
      >
        <FormInput h="6rem" label="Message" ph="Hi,👋👋" />
      </Col>
    </Form>
  );
};
