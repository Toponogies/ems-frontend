import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaPen} from "react-icons/fa";
import FormModal from "../../../../components/Forms/FormModal";
import Toast from "../../../../components/Toast/Toast";
import {useSelector} from "react-redux";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const {activeInterfaces} = useSelector((state) => state.interfaceReducer);

    const onOpenForm = () => {
        if (activeInterfaces.length !== 1) {
            let toaster = {
                toast: toast,
                title: "Unknown interface",
                description: "Please select one and only one interface to update",
                status: "error"
            };
            Toast(toaster);
        } else {
            onOpen();
        }
    };

    return (
        <>
            <Tooltip label="Update">
                <IconButton icon={<FaPen/>} aria-label={"Update"} onClick={onOpenForm}/>
            </Tooltip>
            <FormModal isOpen={isOpen} onClose={onClose} action={"Update"} entity={"Interface"}/>
        </>
    );
};
