import React, {useRef, useState} from "react";
import { Box, Col, Row } from "../../utility/styled_components/box";
import emailjs from '@emailjs/browser';
import { PrimaryBtn } from "../../utility/styled_components/button";
import {
  ContactInput,
  Form,
  SimpleContactInput,
} from "../../utility/styled_components/input";
import { PText, Span } from "../../utility/styled_components/text";
import FormInput from "./Forms";
import {BsCheck2All} from "react-icons/bs";
import {VscError} from "react-icons/vsc"

const ContactForm = () => {

  const form = useRef();


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

  const form = useRef()

  const [ form_state, setFormState] = useState("none");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_lm9x6ab', form.current, '4oWrVjuM8ngyVVijR')
      .then((result) => {
          setFormState("send")
      }, (error) => {
          setFormState("failed")
      });
  };
  return (
    <Form
     ref = {form}
      onSubmit = {sendEmail}
 >
      <Box 
      d="grid"
      w="100%"
      h="auto"
      rows="auto"
      cols="50% 50%"
      gap="10px"
      p="10px"
      >

      <Col h="auto">
        <FormInput required = "true" name = "name" label="Name" ph="Ayush Bisht" h="3rem" />
      </Col>
      <Col h="auto">
        <FormInput required = "true" type = "email" name = "email" label="Email" ph="xyz@gmail.com" h="3rem" />
      </Col>
      <Col
        sx={`
            grid-column : 1 / span 2;
        `}
        h="auto"
      >
        <FormInput required = "true" name = "message" h="6rem" label="Message" ph="Hi,👋👋" />
      </Col>
      </Box>
      <PText
      w = "10vw"
      d = "block"
      type = "t"
      size = "1rem"
        
      >
      { form_state == "send" ? <>
      <BsCheck2All color = "white"  /> 
      &nbsp;Thanks I've got your message and I will get back to you sooner.

      </>
         :( form_state == "failed" ? <>
         <VscError color = "red" />
         &nbsp;Sorry, we are facing some issues at email services.         
         </> 
          : ""
         )
    }
      </PText>
 
    <PrimaryBtn h = "auto" float = "right" p = "10px"   >
      <Span type = "s">
        Connect
      </Span>
    </PrimaryBtn>
    </Form>
  );
};
