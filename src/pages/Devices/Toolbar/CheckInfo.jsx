import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaInfoCircle} from "react-icons/fa";
import TableModal from "../../../components/Table/TableModal";
import {useSelector} from "react-redux";
import Toast from "../../../components/Toast/Toast";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const {activeDevices} = useSelector((state) => state.deviceReducer);

    const onOpenForm = () => {
        if (activeDevices.length !== 1) {
            let toaster = {
                toast: toast,
                title: "Unknown device",
                description: "Please select one and only one device to check information",
                status: "error"
            };
            Toast(toaster);
        } else {
            onOpen();
        }
    };

    return (
        <>
            <Tooltip label="Check Info">
                <IconButton icon={<FaInfoCircle/>} aria-label={"Check information"} onClick={onOpenForm}/>
            </Tooltip>
            <TableModal isOpen={isOpen} onClose={onClose} device={activeDevices[0] ? activeDevices[0]: {}}/>
        </>
    );
};
