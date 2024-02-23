import { Box, Container, Heading, Text, VStack, HStack, Image, IconButton, Link, useColorMode, useColorModeValue, Flex, Spacer } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box bg={bgColor} color={color} minHeight="100vh">
      <Container maxW="container.md" pt={5}>
        <Flex>
          <Spacer />
          <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} size="md" />
        </Flex>
        <VStack spacing={8} as="section" mt={10} textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA4NjUxMzUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Programmer Portrait" />
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="xl">Full-Stack Developer. JavaScript Enthusiast. Open Source Contributor.</Text>
          <HStack spacing={5} justify="center">
            <Link href="https://github.com/johndoe" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} isRound />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <IconButton aria-label="Linkedin" icon={<FaLinkedin />} isRound />
            </Link>
          </HStack>
        </VStack>
        <VStack as="section" spacing={8} mt={20}>
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text fontSize="lg">I'm a full-stack web developer with a passion for building scalable, maintainable, and user-friendly applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs.</Text>
        </VStack>
        <VStack as="section" spacing={8} mt={20}>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
          <VStack spacing={5} align="start">
            <Text as="h3" fontSize="lg" fontWeight="bold">
              Project One
            </Text>
            <Text fontSize="md">A web application designed to simplify task management. Features real-time collaboration, task prioritization, and user analytics.</Text>
            <Text as="h3" fontSize="lg" fontWeight="bold">
              Project Two
            </Text>
            <Text fontSize="md">An e-commerce platform with a focus on performance and scalability. Supports multiple payment gateways, advanced product search, and customer reviews.</Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
