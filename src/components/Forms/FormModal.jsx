import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import FormCredential from "./FormCredential";
import FormInterface from "./FormInterface";
import FormDevice from "./FormDevice";

export default (props) => {
    const {isOpen, onClose, action, entity} = props

    const Form = () => {
        switch (entity) {
            case "Device":
                return <FormDevice/>
            case "Interface":
                return <FormInterface/>
            case "Credential":
                return <FormCredential/>
            // TODO: Not found page
        }
    }


    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered size={"3xl"}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader marginTop={"20px"}>{action} {entity}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Form/>
                </ModalBody>
                <ModalFooter>
                    <Flex gap={"20px"}>
                        <Button onClick={onClose}>Close</Button>
                        <Button colorScheme={"blue"} onClick={onClose}>Submit</Button>
                        {/*TODO: Add handler*/}
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>);
}
