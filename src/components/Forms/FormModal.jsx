import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";
import FormCredential from "./FormCredential";
import FormInterface from "./FormInterface";
import FormDevice from "./FormDevice";

export default (props) => {
    const {isOpen, onClose, action, entity} = props;

    const Form = () => {
        switch (entity) {
            case "Device":
                return <FormDevice action={action} onClose={onClose}/>;
            case "Interface":
                return <FormInterface action={action} onClose={onClose}/>;
            case "Credential":
                return <FormCredential action={action} onClose={onClose}/>;
            // TODO: Not found page
        }
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered size={"3xl"}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader marginTop={"20px"}>{action} {entity}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Form/>
                </ModalBody>
            </ModalContent>
        </Modal>);
}
