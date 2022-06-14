import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa";
import Dialog from "../../../components/Dialog/Dialog";
import Toast from "../../../components/Toast/Toast";
import {useDispatch, useSelector} from "react-redux";
import {remove} from "../../../actions/credential.action";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const {activeCredentials} = useSelector((state) => state.credentialReducer);
    const dispatch = useDispatch();

    const onDialogOpen = () => {
        if (activeCredentials.length !== 1) {
            let toaster = {
                toast: toast,
                title: "Unknown credential",
                description: "Please select one and only one credential to delete",
                status: "error"
            };
            Toast(toaster);
        } else {
            onOpen();
        }
    }

    const onSubmit = async () => {
        let toaster;

        if (activeCredentials.length !== 1) {
            toaster = {
                toast: toast,
                title: "Unknown credential",
                description: "Please select one and only one credential to delete",
                status: "error"
            };
        } else {
            let response = await remove(dispatch, activeCredentials[0].id);
            toaster = {
                toast: toast,
                title: "Deleted a credential",
                description: "A credential is deleted",
                status: "success"
            };

            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to delete a credential",
                    description: response.data.message,
                    status: "error"
                };
            }
        }
        onClose();
        Toast(toaster);
    };

    return (
        <>
            <Tooltip label="Delete">
                <IconButton textColor="red.500" icon={<FaTrash/>} aria-label={"Delete"} onClick={onDialogOpen}/>
            </Tooltip>
            <Dialog isOpen={isOpen} onClose={onClose} action={"Delete Credential"} onSubmit={onSubmit}/>
        </>
    );
};
