import {Button, useDisclosure, useToast} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import FormModal from "../../../components/Forms/FormModal";
import Toast from "../../../components/Toast/Toast";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();

    const onSubmit = () => {
        let toaster = {
            toast: toast,
            title: "Added a credential",
            description: "A credential is added",
            status: "success"
        };
        Toast(toaster);
        onClose();
    };

    return (
        <>
            <Button colorScheme="blue" leftIcon={<FaPlus/>} onClick={onOpen}>
                Add
            </Button>
            <FormModal isOpen={isOpen} onClose={onClose} action={"Add"} entity={"Credential"} onSubmit={onSubmit}/>
        </>
    );
};
