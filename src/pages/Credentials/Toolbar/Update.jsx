import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaPen} from "react-icons/fa";
import FormModal from "../../../components/Forms/FormModal";
import Toast from "../../../components/Toast/Toast";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();

    const onSubmit = () => {
        let toaster = {
            toast: toast,
            title: "Updated a credential",
            description: "A credential is updated",
            status: "success"
        };
        Toast(toaster);
        onClose();
    };

    return (
        <>
            <Tooltip label="Update">
                <IconButton icon={<FaPen/>} aria-label={"Update"} onClick={onOpen}/>
            </Tooltip>
            <FormModal isOpen={isOpen} onClose={onClose} action={"Update"} entity={"Credential"} onSubmit={onSubmit}/>
        </>
    );
};
