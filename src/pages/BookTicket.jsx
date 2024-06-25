import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useToast,
} from '@chakra-ui/react';
import { FaTicketAlt } from 'react-icons/fa';

const BookTicket = () => {
  const [event, setEvent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log({ event, name, email, numTickets });
    
    // Show success message
    toast({
      title: 'Tickets booked.',
      description: "We've booked your tickets successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Redirect to home page
    navigate('/');
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Book Tickets
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Event</FormLabel>
              <Select
                placeholder="Select event"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              >
                <option value="event1">Event 1</option>
                <option value="event2">Event 2</option>
                <option value="event3">Event 3</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Number of Tickets</FormLabel>
              <NumberInput
                min={1}
                max={10}
                value={numTickets}
                onChange={(value) => setNumTickets(parseInt(value))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Button
              leftIcon={<FaTicketAlt />}
              colorScheme="green"
              type="submit"
              size="lg"
              width="full"
            >
              Book Tickets
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default BookTicket;