import {Button, useDisclosure} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import FormModal from "../../../../components/Forms/FormModal";
import RenderOnRole from "../../../../components/RenderOnRole";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <RenderOnRole roles={["admin"]}>
                <Button colorScheme="blue" leftIcon={<FaPlus/>} onClick={onOpen}>
                    Add
                </Button>
                <FormModal isOpen={isOpen} onClose={onClose} action={"Add"} entity={"Interface"}/>
            </RenderOnRole>
        </>
    );
};
