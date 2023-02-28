import { Box, Text, useColorMode } from "@chakra-ui/react";
import "./App.css";
import "./home.css";
import Navbar from "./Pages/Navbar";
import "./Pages/Page.css";
import Allroutes from "./components/Allroutes";
import About from "./Pages/About";
import Skills from "./Pages/Skillls";
import Calender from "./Pages/Calender";
import Stats from "./Pages/Stats";
import Project from "./Pages/Project";
import Contacts from "./Pages/Contact";

function App() {
 

  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div className="App">
      <div
        className="container"
        style={{ bg: colorMode === "dark" ? "#13022C" : "#d3cedb" }}
      >
        <Navbar />
        <Allroutes />
        <About />
        <Skills />
        <Calender />
        <Stats />
        <Project />
        <Contacts />
        {/* <Box
          p="10px 0px"
          w="100%"
          bg={colorMode === "dark" ? "#13022C" : "#f3d2d1"}
        >
          <Text
            fontWeight="bold"
            fontSize={["xs", "sm", "md"]}
            color={colorMode === "dark" ? "white" : "#13022C"}
            textAlign="center"
          >
            Designed and developed by Avinash Kalmegh, @2023 All rights
            reserved
          </Text>
        </Box> */}
      </div>
    </div>
  );
}

export default App;
