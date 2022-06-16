import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa";
import Dialog from "../../../components/Dialog/Dialog";
import Toast from "../../../components/Toast/Toast";
import {useDispatch, useSelector} from "react-redux";
import {remove} from "../../../actions/device.action";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const dispatch = useDispatch();
    const {activeDevices} = useSelector((state) => state.deviceReducer);

    const onDialogOpen = () => {
        if (activeDevices.length !== 1) {
            let toaster = {
                toast: toast,
                title: "Unknown device",
                description: "Please select one and only one device to delete",
                status: "error"
            };
            Toast(toaster);
        } else {
            onOpen();
        }
    };

    const onSubmit = async () => {
        let response = await remove(dispatch, activeDevices[0].id);
        let toaster = {
            toast: toast,
            title: "Deleted a device",
            description: "A device is deleted",
            status: "success"
        };

        if (response) {
            toaster = {
                toast: toast,
                title: "Fail to delete a device",
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
            <Dialog isOpen={isOpen} onClose={onClose} action={"Delete Device"} onSubmit={onSubmit}/>
        </>
    );
};
