import { Box, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
const Stats = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    // streak
    <Box
   
      bg={
        colorMode === "dark"
          ? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)"
          : "#f7e1e0"
      }
      color={colorMode === "dark" ? "white" : "#13022C"}
      p="30px 0px"
    >
      <Text
        mb={["-10px", "15px", "30px"]}
        textAlign="center"
        fontWeight="400"
        fontSize={["3xl", "4xl", "5xl"]}
      >
        My Github Stats
      </Text>
      <Box w={["80%", "80%", "60%"]} m="auto">
        <Link href="https://github.com/AvinashKalmegh">
          <Image
          id="github-streak-stats"
            align="left"
            alt="img"
            h="200px"
            src={
              colorMode === "dark"
                ? "https://github-readme-streak-stats.herokuapp.com?user=AvinashKalmegh&theme=midnight-purple&date_format=M%20j%5B%2C%20Y%5D"
                : "https://github-readme-streak-stats.herokuapp.com?user=AvinashKalmegh&theme=#f3d2d1&date_format=M%20j%5B%2C%20Y%5D"
            }
          />
        </Link>
      </Box>

      <Box
        w={["80%", "70%", "60%"]}
        display="flex"
        m="auto"
        mt={["", "10px", "0px"]}
        gap="10px"
      >
        <Link   href="https://github.com/AvinashKalmegh">
          <Image
          id="github-top-langs"
            align="center"
            h={["", "120px", "300px"]}
            alt="img"
            src={
              colorMode === "dark"
                ? "https://github-readme-stats.vercel.app/api/top-langs/?username=AvinashKalmegh&theme=midnight-purple"
                : "https://github-readme-stats.vercel.app/api/top-langs/?username=AvinashKalmegh&theme=#f3d2d1"
            } //launguages
          />
        </Link>
        <Link href="https://github.com/AvinashKalmegh">
          <Image
           id="github-stats-card"
            align="left"
            h={["", "120px", "300px"]}
            alt="img"
            src={
              colorMode === "dark"
                ? "https://github-readme-stats.vercel.app/api?username=AvinashKalmegh&count_private=true&show_icons=true&theme=midnight-purple"
                : "https://github-readme-stats.vercel.app/api?username=AvinashKalmegh&count_private=true&show_icons=true&theme=#f3d2d1"
            } //stats
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Stats;
