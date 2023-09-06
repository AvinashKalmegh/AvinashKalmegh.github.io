import {
    Box,
    Button,
    Icon,
    Text,
    Input,
    Textarea,
    Divider,
    useColorMode,
  } from "@chakra-ui/react";
  import { useContext } from "react";
  import {
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineLink,
  } from "react-icons/ai";
  import { MdCall, MdSend } from "react-icons/md";
  import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
  import "./Page.css";
  import React from "react";
  import emailjs from "@emailjs/browser";
  import "./Page.css";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  function Contacts() {
    const { toggleColorMode, colorMode } = useColorMode();
  
    const navigate = useNavigate();
  
    const [values, setValues] = useState({
      fullName: "",
      email: "",
      message: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .send("service_eh6x54a", "template_7kdfkn8", values, "8QS3chHs4lYzCDpA5")
        .then(
          (response) => {
            console.log("SUCCESS!", response);
            console.log(values);
            setValues({
              fullName: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    };
  
    const handleChange = (e) => {
      setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    };
  
    return (
      <Box
        id="Contact"
        bg={
          colorMode === "dark"
            ? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)"
            : "#f7e1e0"
        }
        color={colorMode === "dark" ? "white" : "#13022C"}
        p={["30px 0px", "30px 0px", "60px 0px"]}
        pt="75px"
      >
        <Text
          fontWeight="400"
          fontSize={["2xl", "3xl", "4xl"]}
          textAlign="center"
          mb="20px"
        >
          Contact Me
        </Text>
        <Box
          w={["80%", "85%", "85%"]}
          m="auto"
          mt="50px"
          textAlign="center"
          p="60px auto"
          display={["inline", "inline", "flex"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            w={["80%", "80%", "40%"]}
            m="auto"
            display={["none", "none", "inline"]}
          >
            <Box
              w="100%"
              p={["15px", "38px", "15px"]}
              display="grid"
              gap="20px"
              gridTemplateColumns={[
                "Repeat(4, 1fr)",
                "Repeat(4, 1fr)",
                "Repeat(2, 1fr)",
              ]}
            >
              <Box mb="20px"  >
                <a id="contact-phone" href="tel:7020859256" rel="noreferrer" target="_blank">
                  <Button 
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "20px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <MdCall />
                  </Button>
                </a>
              </Box>
              <Box mb="20px" >
                <a
                id="contact-email"
                  href="mailto: avinashkalmegh93@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button 
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "20px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <AiOutlineMail />
                  </Button>
                </a>
              </Box>
              <Box mb="20px" id="contact-github">
                <a
                  href="https://github.com/AvinashKalmegh"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "20px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <AiOutlineGithub />
                  </Button>
                </a>
              </Box>
              <Box mb="20px" id="contact-linkedin">
                <a
                  href="https://www.linkedin.com/in/avinash-kalmegh-584919237/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "20px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <AiOutlineLinkedin />
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            className={colorMode === "dark" ? "contact" : "contactlight"}
            width={["80%", "70%", "50%"]}
            m={["auto", "auto", ""]}
            pt="40px"
            borderRadius={"5%"}
          >
            <Box width="80%" m="auto">
              <form onSubmit={handleSubmit}>
                <Text
                  fontSize={["2xl", "4xl", "3xl"]}
                  color={colorMode === "dark" ? "white" : "#13022C"}
                  fontWeight="600"
                >
                  Message Me
                </Text>
                <br />
                <Input
                  fontSize={["15px", "16px", "16px"]}
                  outline={
                    colorMode === "dark"
                      ? "1px solid #C1B6DB"
                      : "1px solid #13022C"
                  }
                  borderColor={
                    colorMode === "dark"
                      ? "rgba(200, 137, 230, 0.637)"
                      : "#13022C"
                  }
                  w="100%"
                  color={colorMode === "dark" ? "white" : "#13022C"}
                  value={values.fullName}
                  required={"required"}
                  onChange={handleChange}
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your Name here"
                />
                <br />
                <Input
                  fontSize={["15px", "16px", "16px"]}
                  outline={
                    colorMode === "dark"
                      ? "1px solid #C1B6DB"
                      : "1px solid #13022C"
                  }
                  mt="15px"
                  borderColor={
                    colorMode === "dark"
                      ? "rgba(200, 137, 230, 0.637)"
                      : "#13022C"
                  }
                  value={values.email}
                  required={"required"}
                  color={colorMode === "dark" ? "white" : "#13022C"}
                  onChange={handleChange}
                  label="E-Mail"
                  name="email"
                  type="email"
                  placeholder="Enter your Email Id here"
                />
                <br />
                <Textarea
                  fontSize={["15px", "16px", "16px"]}
                  outline={
                    colorMode === "dark"
                      ? "1px solid #C1B6DB"
                      : "1px solid #13022C"
                  }
                  mt="15px"
                  borderColor={
                    colorMode === "dark"
                      ? "rgba(200, 137, 230, 0.637)"
                      : "#13022C"
                  }
                  value={values.message}
                  required={"required"}
                  color={colorMode === "dark" ? "white" : "#13022C"}
                  onChange={handleChange}
                  label="Your message here"
                  name="message"
                  placeholder="Enter your Message here"
                />
                <br />
                <Button
                  _hover={{ bg: "#4E406F", color: "#ffffff" }}
                  mt="15px"
                  p={["10px", "10px", "15px"]}
                  fontSize={["sm", "sm", "md"]}
                  bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                  color={colorMode === "dark" ? "#13022c" : "white"}
                  border="none"
                  variant="solid"
                 onClick={handleSubmit}
                  _focus={{ outline: "none" }}
                  value="Send"
                  rightIcon={<MdSend />}
                >
                  Send
                </Button>
              </form>
            </Box>
          </Box>
          <Box
            w={["80%", "80%", "40%"]}
            m="auto"
            display={["inline", "inline", "none"]}
          >
            <Box
              w="90%"
              m="auto"
              p={["35px", "50px", "15px"]}
              pb="0px"
              display="grid"
              gap="20px"
              gridTemplateColumns={[
                "Repeat(4, 1fr)",
                "Repeat(4, 1fr)",
                "Repeat(2, 1fr)",
              ]}
            >
              <Box>
                <a href="tel:7020859256" rel="noreferrer" target="_blank">
                  <Button
                  id="contact-phone"
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "10px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <MdCall />
                  </Button>
                </a>
              </Box>
              <Box>
                <a
                  href="mailto: avinashkalmegh93@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button  id="contact-email"
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "10px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <AiOutlineMail />
                  </Button>
                </a>
              </Box>
              <Box>
                <a
                  href="https://github.com/AvinashKalmegh"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                   id="contact-github"
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "10px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <AiOutlineGithub />
                  </Button>
                </a>
              </Box>
              <Box>
                <a
                  href="https://www.linkedin.com/in/avinash-kalmegh-584919237/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                  id="contact-linkedin"
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    p={["0px", "10px", "35px"]}
                    fontSize={["2xl", "4xl", "6xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                  >
                    <AiOutlineLinkedin />
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default Contacts;
  