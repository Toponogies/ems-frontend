import {Button, useDisclosure} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import FormModal from "../../../../components/Forms/FormModal";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Button colorScheme="blue" leftIcon={<FaPlus/>} onClick={onOpen}>
                Add
            </Button>
            <FormModal isOpen={isOpen} onClose={onClose} action={"Add"} entity={"Interface"}/>
        </>
    );
};
