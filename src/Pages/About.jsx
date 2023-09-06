import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import "../home.css";
import gif from "../Images/aboutgif.gif";

function About() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
        id="About"
        className="about section"
      bg={
        colorMode === "dark"
          ? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)"
          : "#f7e1e0"
      }
      color="#ffffff"
      p="30px 0px"
      mt="-2px"
      pt={["50px", "70px", "80px"]}
    >
      <Box w="87%" m="auto">
        <Box
          display={["inline", "inline", "flex"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
          
            w={["90%", "80%", "45%"]}
            m="auto"
            color={colorMode === "dark" ? "white" : "#13022C"}
          >
            <Text
              textAlign="center"
              fontWeight="400"
              mt="20px"
              fontSize={["2xl", "3xl", "4xl"]}
            >
              About Me
            </Text>
            <Text
              id="user-detail-intro"
              fontFamily="calibri"
              mt="10px"
              fontSize={["md", "lg", "xl"]}
            >
              A self-motivated, hard-working and ambitious Full Stack Web
              Developer with proficiency in MERN, JavaScript, MongoDB, Frontend,
              Backend, java, SQL, NodeJS, HTML, CSS, Express, Problem-solving
              mindset and ability to perform well in collaboration. 1200+ hours
              of coding. Looking forward to work as an accountable and competent
              employee in a tech company.
            </Text>
          </Box>
          <Image w={["90%", "90%", "45%"]} m="auto" src={gif} alt="img" />
        </Box>
        <Box
          padding="20px 0px"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          color={colorMode === "dark" ? "white" : "#13022C"}
        >
          <Box>
            <Box
              className="aboutcircle"
              rounded="50%"
              padding={["6px", "8px", "10px"]}
              bg="url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBw0HBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExUYKCggGBoxJxMTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKDQ0NFQ0NDysZFRkrKy0tLS0rKysrLSstKysrKy0rKysrKysrKysrLSsrKysrKysrKystKys3Ky0rKystLf/AABEIALEBHAMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAACAQAEAwUH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAUE/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD4zCiQoi6EjQokKArIsiyNIUA8jRcaLAUkZcWRcA8iYuKuAbBxcXFwNHBxMPExtbBxMPEwQwMQ8SwS2BiWGlYlgWDTsSmJY8diU6NFOwKlKpRTsCjTo0ydgUadGilYNGlUpk7AZagpu6FEhRF05FhRIUKpI0KJCgKSNCkaLCqSKuNIoKSNjYshYB5BxcXFxhwcTDxMZsHEw8TGCwMQ7BoksCxDGwSWBUpVKZOwKNOjRTsCpSo0UrBo06NMnQo06NFKhRp0aZOhUKiZKu+FEhRB1IsKJChVIsKJCgKyLFjRYVSRYUiQoCkjLIsigpImLi4uAbBxMPExmwcGw0sEtgWJSqUSWBRp0aKdgVKVGmSsGjTo0U6FGnRpkqFGnRopUKNOjTJ0KNOjTJUKhURSrvhwYURdSFCgwoVSFCgwoCsWFEhQqsWFEhQqsWLGhQFJGkXGi4B5ExDxLGGwLBp0aJLBo06FFKwaNOjTJ0KNOhRSo0adGmSoUadCilRo0qlMlQo0qNMnRo0qNGJUaJUTJV7CFBhRF04UKDChVYUKDChVYUKDCgKwoUGFCqQoUGFCqwoQwgVjJVSgNGjSo0yVGjSo0yVGjSo0UqNGlRpkqNGlRpkqNGlRop0KlWpTJUaNKjTJUaFOhRSo0aVGmSr2EKBDiLpwoUGFCqQoUCHAVhQoEKFVhwoEKFVhwoEWApKcXRlbQPKepamprDrUatoiS1qNWjRStSjVo0ydShSo0UqlGrRpkqlClRopUalWjTJUaNKjTJ0aNKjRiVGiVEyVd8KBCiLpQ4UCHCqQoUCFAVlOLBiwFJThQIUpVJTlUF0DynraOroH0tTU1NZtVLU1BLa1StaNElrUatGinalGrUpkrUo1aNFOpRq0aZKpRq0aKVSjVo0ydSjVo0yVSitQUq7oUCFEnRlOLAhQqkpwoEKApKUKBClBSU4uhq6VSU9XQ1dA0pto62sbT1B1tZtJNTU1gtapa2oJLWG1rUoktSpWqUydqUatGinalGrUopWpRq0aZOpRq0aKVSjVo0ydSitQyVdsKBCiL3ylCgQoCspylAlWUDynFGLoKSnKugugeU10NXQNpa2jraGDpa2pqa2NpampqaOBq6lqagltXRralrEtapWo2mJa1o1rUop2pUrJRTtSjVo0ydqUatGilalGlRpk7UqMwpuuFAixJ7pThQJVA8pwpQlXQUlOVdDV0Dynq6OroGlLV0NXQNpa2jraw6Wto62s2lqamprBpampqaIWro2talokta0bWtS0SWtUajaJLWtSsNFO1qNWjRTtSjVqUydqUatEU7WZmErpiyhCib1SlClCVQUlNdGVdA8paUoLoHlPV0NbWNKeroaugbS1dDW1sbS1tHW1sbS1tHU1m0tTU1NYurqampoltXURLRJa1qMNoktapWqWiS1LUrUaZO1qNWjRTtaozCRmZmZ5oSMR6YSxWA8VYzAeLFRgNCZmA6szMKszALMzCyMzMyNWZipUZhLURmEtSpWYU6NRGElRKzCSjUrMKdRmYSszMzP/2Q== )"
            >
              <Box
                className="aboutinner"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSize={["45px", "60px", "80px"]}
                rounded="50%"
                bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3TpT_7tToXh4yXi-cgCRFLlKXre2Tx6e8sZKLi-fU-Ris1sYekc9OZF3La-2_XcCiGjQtu3fAmM&usqp=CAU&ec=48600113)"
              >
                <Text
                  color="#13022c"
                  fontWeight="bold"
                  fontSize={["sm", "lg", "xl"]}
                >
                  1200+
                </Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={["xs", "md", "xl"]}>Hours Of</Text>
              <Text fontSize={["xs", "md", "xl"]}>Coding</Text>
            </Box>
          </Box>
          <Box>
            <Box
              className="aboutcircle"
              rounded="50%"
              padding={["6px", "8px", "10px"]}
              bg="url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBw0HBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExUYKCggGBoxJxMTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKDQ0NFQ0NDysZFRkrKy0tLS0rKysrLSstKysrKy0rKysrKysrKysrLSsrKysrKysrKystKys3Ky0rKystLf/AABEIALEBHAMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAACAQAEAwUH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAUE/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD4zCiQoi6EjQokKArIsiyNIUA8jRcaLAUkZcWRcA8iYuKuAbBxcXFwNHBxMPExtbBxMPEwQwMQ8SwS2BiWGlYlgWDTsSmJY8diU6NFOwKlKpRTsCjTo0ydgUadGilYNGlUpk7AZagpu6FEhRF05FhRIUKpI0KJCgKSNCkaLCqSKuNIoKSNjYshYB5BxcXFxhwcTDxMZsHEw8TGCwMQ7BoksCxDGwSWBUpVKZOwKNOjRTsCpSo0UrBo06NMnQo06NFKhRp0aZOhUKiZKu+FEhRB1IsKJChVIsKJCgKyLFjRYVSRYUiQoCkjLIsigpImLi4uAbBxMPExmwcGw0sEtgWJSqUSWBRp0aKdgVKVGmSsGjTo0U6FGnRpkqFGnRopUKNOjTJ0KNOjTJUKhURSrvhwYURdSFCgwoVSFCgwoCsWFEhQqsWFEhQqsWLGhQFJGkXGi4B5ExDxLGGwLBp0aJLBo06FFKwaNOjTJ0KNOhRSo0adGmSoUadCilRo0qlMlQo0qNMnRo0qNGJUaJUTJV7CFBhRF04UKDChVYUKDChVYUKDCgKwoUGFCqQoUGFCqwoQwgVjJVSgNGjSo0yVGjSo0yVGjSo0UqNGlRpkqNGlRpkqNGlRop0KlWpTJUaNKjTJUaFOhRSo0aVGmSr2EKBDiLpwoUGFCqQoUCHAVhQoEKFVhwoEKFVhwoEWApKcXRlbQPKepamprDrUatoiS1qNWjRStSjVo0ydShSo0UqlGrRpkqlClRopUalWjTJUaNKjTJ0aNKjRiVGiVEyVd8KBCiLpQ4UCHCqQoUCFAVlOLBiwFJThQIUpVJTlUF0DynraOroH0tTU1NZtVLU1BLa1StaNElrUatGinalGrUpkrUo1aNFOpRq0aZKpRq0aKVSjVo0ydSjVo0yVSitQUq7oUCFEnRlOLAhQqkpwoEKApKUKBClBSU4uhq6VSU9XQ1dA0pto62sbT1B1tZtJNTU1gtapa2oJLWG1rUoktSpWqUydqUatGinalGrUopWpRq0aZOpRq0aKVSjVo0ydSitQyVdsKBCiL3ylCgQoCspylAlWUDynFGLoKSnKugugeU10NXQNpa2jraGDpa2pqa2NpampqaOBq6lqagltXRralrEtapWo2mJa1o1rUop2pUrJRTtSjVo0ydqUatGilalGlRpk7UqMwpuuFAixJ7pThQJVA8pwpQlXQUlOVdDV0Dynq6OroGlLV0NXQNpa2jraw6Wto62s2lqamprBpampqaIWro2talokta0bWtS0SWtUajaJLWtSsNFO1qNWjRTtSjVqUydqUatEU7WZmErpiyhCib1SlClCVQUlNdGVdA8paUoLoHlPV0NbWNKeroaugbS1dDW1sbS1tHW1sbS1tHU1m0tTU1NYurqampoltXURLRJa1qMNoktapWqWiS1LUrUaZO1qNWjRTtaozCRmZmZ5oSMR6YSxWA8VYzAeLFRgNCZmA6szMKszALMzCyMzMyNWZipUZhLURmEtSpWYU6NRGElRKzCSjUrMKdRmYSszMzP/2Q==)"
            >
              <Box
                className="aboutinner"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSize={["45px", "60px", "80px"]}
                rounded="50%"
                bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3TpT_7tToXh4yXi-cgCRFLlKXre2Tx6e8sZKLi-fU-Ris1sYekc9OZF3La-2_XcCiGjQtu3fAmM&usqp=CAU&ec=48600113)"
              >
                <Text
                  color="#13022c"
                  fontWeight="bold"
                  fontSize={["sm", "lg", "xl"]}
                >
                  500+
                </Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={["xs", "md", "xl"]}>Github</Text>
              <Text fontSize={["xs", "md", "xl"]}>Commits</Text>
            </Box>
          </Box>
          <Box>
            <Box
              className="aboutcircle"
              rounded="50%"
              padding={["6px", "8px", "10px"]}
              bg="url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBw0HBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExUYKCggGBoxJxMTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKDQ0NFQ0NDysZFRkrKy0tLS0rKysrLSstKysrKy0rKysrKysrKysrLSsrKysrKysrKystKys3Ky0rKystLf/AABEIALEBHAMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAACAQAEAwUH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAUE/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD4zCiQoi6EjQokKArIsiyNIUA8jRcaLAUkZcWRcA8iYuKuAbBxcXFwNHBxMPExtbBxMPEwQwMQ8SwS2BiWGlYlgWDTsSmJY8diU6NFOwKlKpRTsCjTo0ydgUadGilYNGlUpk7AZagpu6FEhRF05FhRIUKpI0KJCgKSNCkaLCqSKuNIoKSNjYshYB5BxcXFxhwcTDxMZsHEw8TGCwMQ7BoksCxDGwSWBUpVKZOwKNOjRTsCpSo0UrBo06NMnQo06NFKhRp0aZOhUKiZKu+FEhRB1IsKJChVIsKJCgKyLFjRYVSRYUiQoCkjLIsigpImLi4uAbBxMPExmwcGw0sEtgWJSqUSWBRp0aKdgVKVGmSsGjTo0U6FGnRpkqFGnRopUKNOjTJ0KNOjTJUKhURSrvhwYURdSFCgwoVSFCgwoCsWFEhQqsWFEhQqsWLGhQFJGkXGi4B5ExDxLGGwLBp0aJLBo06FFKwaNOjTJ0KNOhRSo0adGmSoUadCilRo0qlMlQo0qNMnRo0qNGJUaJUTJV7CFBhRF04UKDChVYUKDChVYUKDCgKwoUGFCqQoUGFCqwoQwgVjJVSgNGjSo0yVGjSo0yVGjSo0UqNGlRpkqNGlRpkqNGlRop0KlWpTJUaNKjTJUaFOhRSo0aVGmSr2EKBDiLpwoUGFCqQoUCHAVhQoEKFVhwoEKFVhwoEWApKcXRlbQPKepamprDrUatoiS1qNWjRStSjVo0ydShSo0UqlGrRpkqlClRopUalWjTJUaNKjTJ0aNKjRiVGiVEyVd8KBCiLpQ4UCHCqQoUCFAVlOLBiwFJThQIUpVJTlUF0DynraOroH0tTU1NZtVLU1BLa1StaNElrUatGinalGrUpkrUo1aNFOpRq0aZKpRq0aKVSjVo0ydSjVo0yVSitQUq7oUCFEnRlOLAhQqkpwoEKApKUKBClBSU4uhq6VSU9XQ1dA0pto62sbT1B1tZtJNTU1gtapa2oJLWG1rUoktSpWqUydqUatGinalGrUopWpRq0aZOpRq0aKVSjVo0ydSitQyVdsKBCiL3ylCgQoCspylAlWUDynFGLoKSnKugugeU10NXQNpa2jraGDpa2pqa2NpampqaOBq6lqagltXRralrEtapWo2mJa1o1rUop2pUrJRTtSjVo0ydqUatGilalGlRpk7UqMwpuuFAixJ7pThQJVA8pwpQlXQUlOVdDV0Dynq6OroGlLV0NXQNpa2jraw6Wto62s2lqamprBpampqaIWro2talokta0bWtS0SWtUajaJLWtSsNFO1qNWjRTtSjVqUydqUatEU7WZmErpiyhCib1SlClCVQUlNdGVdA8paUoLoHlPV0NbWNKeroaugbS1dDW1sbS1tHW1sbS1tHU1m0tTU1NYurqampoltXURLRJa1qMNoktapWqWiS1LUrUaZO1qNWjRTtaozCRmZmZ5oSMR6YSxWA8VYzAeLFRgNCZmA6szMKszALMzCyMzMyNWZipUZhLURmEtSpWYU6NRGElRKzCSjUrMKdRmYSszMzP/2Q==)"
            >
              <Box
                className="aboutinner"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSize={["45px", "60px", "80px"]}
                rounded="50%"
                bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3TpT_7tToXh4yXi-cgCRFLlKXre2Tx6e8sZKLi-fU-Ris1sYekc9OZF3La-2_XcCiGjQtu3fAmM&usqp=CAU&ec=48600113)"
              >
                <Text
                  color="#13022c"
                  fontWeight="bold"
                  fontSize={["sm", "lg", "xl"]}
                >
                  5+
                </Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={["xs", "md", "xl"]}>Projects</Text>
              <Text fontSize={["xs", "md", "xl"]}>Done</Text>
            </Box>
          </Box>
          <Box>
            <Box
              className="aboutcircle"
              rounded="50%"
              padding={["6px", "8px", "10px"]}
              bg="url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBw0HBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExUYKCggGBoxJxMTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKDQ0NFQ0NDysZFRkrKy0tLS0rKysrLSstKysrKy0rKysrKysrKysrLSsrKysrKysrKystKys3Ky0rKystLf/AABEIALEBHAMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAACAQAEAwUH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAUE/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD4zCiQoi6EjQokKArIsiyNIUA8jRcaLAUkZcWRcA8iYuKuAbBxcXFwNHBxMPExtbBxMPEwQwMQ8SwS2BiWGlYlgWDTsSmJY8diU6NFOwKlKpRTsCjTo0ydgUadGilYNGlUpk7AZagpu6FEhRF05FhRIUKpI0KJCgKSNCkaLCqSKuNIoKSNjYshYB5BxcXFxhwcTDxMZsHEw8TGCwMQ7BoksCxDGwSWBUpVKZOwKNOjRTsCpSo0UrBo06NMnQo06NFKhRp0aZOhUKiZKu+FEhRB1IsKJChVIsKJCgKyLFjRYVSRYUiQoCkjLIsigpImLi4uAbBxMPExmwcGw0sEtgWJSqUSWBRp0aKdgVKVGmSsGjTo0U6FGnRpkqFGnRopUKNOjTJ0KNOjTJUKhURSrvhwYURdSFCgwoVSFCgwoCsWFEhQqsWFEhQqsWLGhQFJGkXGi4B5ExDxLGGwLBp0aJLBo06FFKwaNOjTJ0KNOhRSo0adGmSoUadCilRo0qlMlQo0qNMnRo0qNGJUaJUTJV7CFBhRF04UKDChVYUKDChVYUKDCgKwoUGFCqQoUGFCqwoQwgVjJVSgNGjSo0yVGjSo0yVGjSo0UqNGlRpkqNGlRpkqNGlRop0KlWpTJUaNKjTJUaFOhRSo0aVGmSr2EKBDiLpwoUGFCqQoUCHAVhQoEKFVhwoEKFVhwoEWApKcXRlbQPKepamprDrUatoiS1qNWjRStSjVo0ydShSo0UqlGrRpkqlClRopUalWjTJUaNKjTJ0aNKjRiVGiVEyVd8KBCiLpQ4UCHCqQoUCFAVlOLBiwFJThQIUpVJTlUF0DynraOroH0tTU1NZtVLU1BLa1StaNElrUatGinalGrUpkrUo1aNFOpRq0aZKpRq0aKVSjVo0ydSjVo0yVSitQUq7oUCFEnRlOLAhQqkpwoEKApKUKBClBSU4uhq6VSU9XQ1dA0pto62sbT1B1tZtJNTU1gtapa2oJLWG1rUoktSpWqUydqUatGinalGrUopWpRq0aZOpRq0aKVSjVo0ydSitQyVdsKBCiL3ylCgQoCspylAlWUDynFGLoKSnKugugeU10NXQNpa2jraGDpa2pqa2NpampqaOBq6lqagltXRralrEtapWo2mJa1o1rUop2pUrJRTtSjVo0ydqUatGilalGlRpk7UqMwpuuFAixJ7pThQJVA8pwpQlXQUlOVdDV0Dynq6OroGlLV0NXQNpa2jraw6Wto62s2lqamprBpampqaIWro2talokta0bWtS0SWtUajaJLWtSsNFO1qNWjRTtSjVqUydqUatEU7WZmErpiyhCib1SlClCVQUlNdGVdA8paUoLoHlPV0NbWNKeroaugbS1dDW1sbS1tHW1sbS1tHU1m0tTU1NYurqampoltXURLRJa1qMNoktapWqWiS1LUrUaZO1qNWjRTtaozCRmZmZ5oSMR6YSxWA8VYzAeLFRgNCZmA6szMKszALMzCyMzMyNWZipUZhLURmEtSpWYU6NRGElRKzCSjUrMKdRmYSszMzP/2Q==)"
            >
              <Box
                className="aboutinner"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSize={["45px", "60px", "80px"]}
                rounded="50%"
                bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3TpT_7tToXh4yXi-cgCRFLlKXre2Tx6e8sZKLi-fU-Ris1sYekc9OZF3La-2_XcCiGjQtu3fAmM&usqp=CAU&ec=48600113)"
              >
                <Text
                  color="#13022c"
                  fontWeight="bold"
                  fontSize={["sm", "lg", "xl"]}
                >
                  110+
                </Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={["xs", "md", "xl"]}>Hours Of</Text>
              <Text fontSize={["xs", "md", "xl"]}>Soft Skills</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
