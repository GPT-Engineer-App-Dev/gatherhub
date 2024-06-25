import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ eventName, eventDate, eventLocation, eventDescription });
    
    // Show success message
    toast({
      title: 'Event created.',
      description: "We've created your event for you.",
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
          Create New Event
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="Enter event location"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Enter event description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              />
            </FormControl>
            <Button
              leftIcon={<FaCalendarAlt />}
              colorScheme="blue"
              type="submit"
              size="lg"
              width="full"
            >
              Create Event
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateEvent;