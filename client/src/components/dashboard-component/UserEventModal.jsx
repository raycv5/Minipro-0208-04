import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Image
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";

const UserEventModal = ({ isOpen, onClose, destination }) => {
  const { onOpen } = useDisclosure()
  
  const handleUserEvent = async() => {
    try{
      const response = await axios.post("http://localhost:2000/userEvents")
      console.log(response) 
      onClose(); 
      alert("Event added succesfully")
    } catch(err) {
      console.log(err)
    }
  }

  return (  
   <>
    <Button onClick={onOpen}>Add</Button>

    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adding Your Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <Image src={destination.image} alt={destination.location} />
          <Text fontWeight='bold' mb='1rem'>Add to your event agenda?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={handleUserEvent}>Yes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
   </> 
  );
 }
  
 export default UserEventModal;