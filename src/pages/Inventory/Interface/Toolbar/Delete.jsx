import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa";
import Dialog from "../../../../components/Dialog/Dialog";
import Toast from "../../../../components/Toast/Toast";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();

    const onSubmit = () => {
        let toaster = {
            toast: toast,
            title: "Deleted an interface",
            description: "An interface is deleted",
            status: "success"
        };
        Toast(toaster);
        onClose();
    };

    return (
        <>
            <Tooltip label="Delete">
                <IconButton textColor="red.500" icon={<FaTrash/>} aria-label={"Delete"} onClick={onOpen}/>
            </Tooltip>
            <Dialog isOpen={isOpen} onClose={onClose} action={"Delete Interface"} onSubmit={onSubmit}/>
        </>
    );
};
