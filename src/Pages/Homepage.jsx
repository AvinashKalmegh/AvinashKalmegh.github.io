import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text, useColorMode } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import mypic from "../Images/mypic.jpg";
import resume from "../Images/Avinash-Kalmegh-Resume.pdf";

function Homepage() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box  id="Home"  bg={colorMode === "dark" ? "#13022C" : "#fbf0f0"}>
      <Box
        w="100.1156%"
        ml="-1.069px"
        pt={["50px", "50px", "50px"]}
        color="#e1cefd"
        bg={colorMode === "dark" ? "#13022C" : "#fbf0f0"}
      >
        <Box
          h="570px"
          w="85%"
          color={colorMode === "dark" ? "#d3cedb" : "#13022C"}
          m="auto"
          display={["inline", "inline", "flex"]}
          alignItems="center"
          justifyContent="space-around"
          pb="60px"
        >
          <Box mt={["50px", "50px", "0px"]} w={["100%", "100%", "60%"]}>
            <Box textAlign="left" pl={["20px", "60px", "20px"]}>
              <Text
                fontWeight="500"
                fontFamily="sans-serif"
                display="flex"
                alignItems="center"
                fontSize={["2xl", "3xl", "4xl"]}
              >
                Hi, my name is
              </Text>
              <Text id="user-detail-name" fontFamily="cursive" fontSize={["2xl", "4xl", "5xl"]}>
                Avinash Kalmegh
              </Text>
              <Box
              
                fontFamily="sans-serif"
                fontSize={["20px", "3xl", "3xl"]}
                display="flex"
                gap={["5px", "7px", "8px"]}
              >
                I'm a
                <Typewriter
                  options={{
                    strings: [" Full Stack Web Developer.", " Problem Solver."],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 200,
                  }}
                />
              </Box>
              <Button
              // id="resume-button-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1xhABIqF3q0EsSpnZlSdTegrl72RpRAgj/view?usp=sharing",
                    "_blank"
                  )
                }
                _hover={{ bg: "#4E406F", color: "white" }}
                mt="10px"
                p={["15px 15px", "20px 20px", "25px 25px"]}
                fontSize={["md", "lg", "xl"]}
                bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                color={colorMode === "dark" ? "#13022c" : "white"}
                border="none"
                variant="solid"
                leftIcon={<DownloadIcon />}
              >
                <a id="resume-button-2" href={resume} download rel="noreferrer">
                  Resume
                </a>
              </Button>
             
              <Box mt="15px" gap="15px" display="flex" color="#13022c">
                <a
                  href="https://github.com/AvinashKalmegh"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    pr="0px"
                    pl="5px"
                    fontSize={["2xl", "3xl", "4xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                    leftIcon={<AiOutlineGithub />}
                  ></Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/avinash-kalmegh-584919237/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    _hover={{ bg: "#4E406F", color: "#ffffff" }}
                    pr="0px"
                    pl="5px"
                    fontSize={["2xl", "3xl", "4xl"]}
                    bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                    color={colorMode === "dark" ? "#13022c" : "white"}
                    border="none"
                    variant="solid"
                    leftIcon={<AiOutlineLinkedin />}
                  ></Button>
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            bg={colorMode === "dark" ? "#C4A9EC" : "#301952"}
            p="5px"
            w={["45%", "35%", "25%"]}
            m="20px auto 0px auto"
            rounded={["10%", "10%", "10%"]}
          >
            <Image
             className="home-img"
              boxShadow="xl"
              w="100%"
              rounded={["10%", "10%", "10%"]}
              src={mypic}
              alt="img"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
