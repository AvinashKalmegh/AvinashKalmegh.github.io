import { Box, Button, Image, Text, useColorMode } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import Bookit from "../Images/Bookit.png";
import Bewakoof from "../Images/Bewakoof.png";
import Shoppers from "../Images/Shoppers.png";
import Indiegogo from "../Images/Indiegogo.png";
import tictactoe from "../Images/tictactoe.png";
import stylevibe from "../Images/StyleVibe.png"

function Project() {
  let projectdata = [
    {
      id: 1,
      name: "Bookit.com",
      img: Bookit,
      type: "Group",
      desc: "A travel website, where user can login, signup, plan their trips, book flight, book hotels, wishlist the trips, view nearby restaurants, search by location etc.",
      techstack: "JavaScript, HTML, CSS",
      livelink: "https://neon-salmiakki-934ec6.netlify.app/",
      gitlink: "https://github.com/sapna1309/Booking-Clone",
    },
    {
      id: 2,
      name: "Bewakoof.com Clone",
      img: Bewakoof,
      type: "Individual",
      techstack: "JavaScript, HTML, CSS",
      desc: "An E-Commerce website where user can login, signup, view products",
      livelink: "https://resplendent-blancmange-e7938d.netlify.app/",
      gitlink: "https://github.com/AvinashKalmegh/Bewakoof.com",

    },
    {
      id: 3,
      name: "Shoppers.com",
      img: Shoppers,
      type: "Individual",
      desc: "An E-Commerce website having the unique feature which allows the users to sell their products as well. User can Login, Signup, view products, add products to the cart etc.",
      techstack: "React, Chakra-ui, CSS",
      livelink: "https://velvety-rugelach-479069.netlify.app/",
      gitlink: "https://github.com/AvinashKalmegh/Shoppers.com/tree/main/Shoppers",

    },
    {
      id: 4,
      name: "Indiegogo Clone",
      img: Indiegogo,
      type: "Individual",
      desc: "A crowdfunding, where user can signin, login, check for various projects to give/recieve fundings, etc.",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://stellar-kangaroo-072d7e.netlify.app/",
      gitlink: "https://github.com/AvinashKalmegh/Indiegogo.com",
    },
    {
      id: 5,
      name: "Tic-Tac-Toe",
      img: tictactoe,
      type: "Individual",
      desc: "Enjoy a classic game of tic-tac-toe with a simple and intuitive interface.",
      techstack: "React, Css",
      livelink: "https://tic-tac-toe-seven-kappa.vercel.app/",
      gitlink: "https://github.com/AvinashKalmegh/Tic-Tac-Toe",
    },
    {
      id: 6,
      name: "Style Vibe",
      img: stylevibe,
      type: "Group",
      desc: "Style Vibe is an e-commerce platform to buy mens and womens clothing products.",
      techstack: "React, Express.Js, Mongodb, Chakra-ui, Node.Js",
      livelink: "https://stylevibe.netlify.app/",
      gitlink: "https://github.com/ParbhatKataria1/Style-Fashion",
    }
   
  ];

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      id="Project"
      w="full"
      bg={colorMode === "dark" ? "#13022C" : "#fbf0f0"}
      color={colorMode === "dark" ? "#d3cedb" : "#13022C"}
      p="30px 0px"
      textAlign="center"
      pt={["40px", "60px", "80px"]}
    >
      <Box w="85%" m="auto">
        <Text
          mb="25px"
          color={colorMode === "dark" ? "white" : "#13022C"}
          textAlign="center"
          fontWeight="400"
          fontSize={["3xl", "4xl", "5xl"]}
        >
          Projects
        </Text>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          {projectdata &&
            projectdata.map((project) => {
              return (
                <Box
                  key={project.id}
                  className={
                    colorMode === "dark" ? "projectouter" : "projectouterlight"
                  }
                >
                  <Box className="project-card">
                    <Image w="100%" src={project.img} alt="project-thumbnail" />
                    <Box w="100%" className="project-description">
                      <Text className="project-title" fontSize={["xl", "2xl", "2xl"]}>
                        {project.name}
                      </Text>
                      <Text fontSize={["lg", "xl", "xl"]}>
                        ( {project.type} )
                      </Text>
                      <Text fontSize={["xs", "sm", "md"]}>{project.desc}</Text>
                      <Text className="project-tech-stack" fontSize={["sm", "md", "lg"]} fontWeight="bold">
                        Techstacks :-{project.techstack}
                      </Text>
                      <Box
                        display="flex"
                        w={["100%", "100%", "100%"]}
                        m="auto"
                        justifyContent="space-around"
                      >
                        <Button
                         className="project-deployed-link"
                          as="a"
                          target="_blank"
                          href={project.livelink}
                          _hover={{ bg: "#4E406F", color: "#ffffff" }}
                          mt="10px"
                          p={["5px 5px", "5px 5px", "10px 10px"]}
                          fontSize={["sm", "sm", "md"]}
                          bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                          color={colorMode === "dark" ? "#13022c" : "white"}
                          border="none"
                          variant="solid"
                          leftIcon={<BiLinkExternal />}
                        >
                          Live
                        </Button>
                        <Button
                        className="project-github-link"
                          as="a"
                          target="_blank"
                          href={project.gitlink}
                          _hover={{ bg: "#4E406F", color: "#ffffff" }}
                          mt="10px"
                          p={["5px 5px", "5px 5px", "10px 10px"]}
                          fontSize={["sm", "sm", "md"]}
                          bg={colorMode === "dark" ? "#C1B6DB" : "#251942"}
                          color={colorMode === "dark" ? "#13022c" : "white"}
                          border="none"
                          variant="solid"
                          leftIcon={<BsGithub />}
                        >
                          Github
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
