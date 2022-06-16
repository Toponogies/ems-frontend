import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa";
import Dialog from "../../../../components/Dialog/Dialog";
import Toast from "../../../../components/Toast/Toast";
import {useDispatch, useSelector} from "react-redux";
import InterfaceService from "../../../../services/interface.service";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const {activeInterfaces} = useSelector((state) => state.interfaceReducer);
    const dispatch = useDispatch();

    const onDialogOpen = () => {
        if (activeInterfaces.length !== 1) {
            let toaster = {
                toast: toast,
                title: "Unknown interface",
                description: "Please select one and only one interface to delete",
                status: "error"
            };
            Toast(toaster);
        } else {
            onOpen();
        }
    };

    const onSubmit = async () => {
        let response = await InterfaceService.remove(dispatch, activeInterfaces[0].id);
        let toaster = {
            toast: toast,
            title: "Deleted an interface",
            description: "An interface is deleted",
            status: "success"
        };

        if (response) {
            toaster = {
                toast: toast,
                title: "Fail to delete an interface",
                description: response.data.message,
                status: "error"
            };
        }
        onClose();
        Toast(toaster);
    };

    return (
        <>
            <Tooltip label="Delete">
                <IconButton textColor="red.500" icon={<FaTrash/>} aria-label={"Delete"} onClick={onDialogOpen}/>
            </Tooltip>
            <Dialog isOpen={isOpen} onClose={onClose} action={"Delete Interface"} onSubmit={onSubmit}/>
        </>
    );
};
