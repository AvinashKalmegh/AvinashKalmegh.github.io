import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";
import "../home.css";
import resume from "../Images/Avinash-Kalmegh-Resume.pdf";

// Navbar : id="nav-menu"
// Home section : id="home"
// About section : id="about" class="about section"
// Skills section : id="skills"
// Projects section : id="projects"
// Contact section : id="contact"

function Navbar() {
  const [isscroll, setisscroll] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");

  function isScrolling() {
    if (window.scrollY > 80) {
      setisscroll(true);
    } else {
      setisscroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Box  
      id="nav-menu"
      zIndex={1}
      bg={
        isscroll
          ? colorMode === "dark"
            ? "#2c2244"
            : "#f3d2d1"
          : colorMode === "dark"
          ? "#13022C"
          : "#f7e1e0"
      }
      w="100%"
      p="10px 0px"
      boxShadow="md"
      color="#ffffff"
      position="fixed"
    >
      <Box
        w="95%"
        m="auto"
        display={["flex", "flex", "flex"]}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          rounded="50%"
          mt="5px"
          mb="5px"
          className={colorMode === "dark" ? "rotateno" : "rotateyes"}
        >
          <AnchorLink href="#Home">
            <Image
              w={["60px", "60px", "70px"]}
              h={["60px"]}
              src="/portfolio-logo.png"
              alt="logo"
              transform="rotate(180deg)"
              borderRadius={"10%"}
            />
          </AnchorLink>
        </Box>
        <Box
          display={["none", "none", "flex"]}
          gap={["auto", "15px", "30px"]}
          justifyContent={["space-around", "space-between", "space-between"]}
          
          alignItems="center"
          border={"0px solid red"}
        >
          <Link id="home" display="flex" to="/">
            <AnchorLink href="#Home">
              <Text
                color={colorMode === "dark" ? "white" : "#1a0933"}
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
              >
                Home
              </Text>
            </AnchorLink>
          </Link>
          <Link id="about" className="about section" display="flex" to="/about">
            <AnchorLink href="#About">
              <Text
                color={colorMode === "dark" ? "white" : "#1a0933"}
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
              >
                About
              </Text>
            </AnchorLink>
          </Link>
          <Link id="skills" display="flex" to="/skills">
            <AnchorLink href="#Skills">
              <Text
                color={colorMode === "dark" ? "white" : "#1a0933"}
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
              >
                Skills
              </Text>
            </AnchorLink>
          </Link>
          <Link id="projects" display="flex">
            <AnchorLink href="#Project">
              <Text
                color={colorMode === "dark" ? "white" : "#1a0933"}
                fontWeight="500"
                _active={{ textDecoration: "underlined" }}
                fontSize={["sm", "sm", "lg"]}
              >
                Project
              </Text>
            </AnchorLink>
          </Link>
          <Link id="contact" display="flex">
            <AnchorLink href="#Contact">
              <Text
                color={colorMode === "dark" ? "white" : "#1a0933"}
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
              >
                Contact
              </Text>
            </AnchorLink>
          </Link>
          <Text
          className="nav-link resume"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1xhABIqF3q0EsSpnZlSdTegrl72RpRAgj/view?usp=sharing",
                "_blank"
              )
            }
            color={colorMode === "dark" ? "white" : "#1a0933"}
            fontWeight="500"
            fontSize={["sm", "sm", "lg"]}
          >
            <a id="resume-button-1" href={resume} download>
              Resume
            </a>
          </Text>
          {/* <IconButton
            aria-label="toggle theme"
            rounded="full"
            size="md"
            onClick={toggleColorMode}
            _hover={{ color: colorMode === "dark" ? "#13022c" : "white" }}
            backgroundColor={colorMode === "dark" ? "#d3cedb" : "#13022C"}
            color={colorMode === "dark" ? "#13022C" : "white"}
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          /> */}
        </Box>
        <IconButton
          aria-label="Open Menu"
          bg="none"
          size="lg"
          p="0px"
          _hover={{ bg: "none" }}
          mr={1}
          color="black"
          icon={<HamburgerIcon w="1.7em" h="1.7em" />}
          display={["flex", "flex", "none"]}
          onClick={() => changeDisplay("flex")}
        />
      </Box>
      <Flex>
        <Flex
          w="100%"
          h="100%"
          color="white"
          bg={
            isscroll
              ? colorMode === "dark"
                ? "#13022c"
                : "#ad99ad"
              : colorMode === "dark"
              ? "#13022C"
              : "#c9c7c9"
          }
          zIndex={20}
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              bg="none"
              color={colorMode === "dark" ? "white" : "#1a0933"}
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>
          <Box
            display="flex"
            gap="30px"
            flexDir="column"
            align="center"
            fontSize="2xl"
            color={colorMode === "dark" ? "white" : "#1a0933"}
          >
            <AnchorLink href="#Home" onClick={() => changeDisplay("none")}>
              <Text _hover={{ fontSize: "4xl" }}> Home</Text>
            </AnchorLink>
            <AnchorLink href="#About" onClick={() => changeDisplay("none")}>
              <Text _hover={{ fontSize: "4xl" }}> About</Text>
            </AnchorLink>
            <AnchorLink href="#Skills" onClick={() => changeDisplay("none")}>
              <Text _hover={{ fontSize: "4xl" }}> Skills</Text>
            </AnchorLink>
            <AnchorLink href="#Project" onClick={() => changeDisplay("none")}>
              <Text _hover={{ fontSize: "4xl" }}> Projects</Text>
            </AnchorLink>
            <AnchorLink href="#Contact" onClick={() => changeDisplay("none")}>
              <Text _hover={{ fontSize: "4xl" }}> Contact</Text>
            </AnchorLink>
            <Text
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1xhABIqF3q0EsSpnZlSdTegrl72RpRAgj/view?usp=sharing",
                  "_blank"
                )
              }
              _hover={{ textDecoration: "none", fontSize: "4xl" }}
            >
              <a href={resume} download rel="noreferrer">
                {" "}
                Resume
              </a>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
