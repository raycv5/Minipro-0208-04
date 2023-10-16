import {
   Button,
   Modal,
   ModalOverlay,
   ModalBody,
   ModalHeader,
   ModalFooter,
   ModalCloseButton,
   ModalContent,
   useDisclosure,
} from "@chakra-ui/react";

export const Register = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return (
        <>  

         <Button
            onClick={onOpen}
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href="href=/userRegister">
            Register
         </Button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Modal Title</ModalHeader>
               <ModalCloseButton />
               <ModalBody></ModalBody>

               <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                     Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
};
