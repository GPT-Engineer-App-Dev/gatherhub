import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to EventMaster
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate platform for managing and organizing events effortlessly.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/event-management.png" alt="Event Management" />
        </Box>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg">
          View Events
        </Button>
        <Button leftIcon={<FaPlusCircle />} colorScheme="blue" size="lg" onClick={() => navigate('/create-event')}>
          Create New Event
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;