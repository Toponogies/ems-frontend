import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaInfoCircle} from "react-icons/fa";
import TableModal from "../../../components/Table/TableModal";
import {useSelector} from "react-redux";
import Toast from "../../../components/Toast/Toast";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const {activeDevices} = useSelector((state) => state.deviceReducer);
    let device = {};

    const onOpenForm = () => {
        if (activeDevices.length !== 1) {
            let toaster = {
                toast: toast,
                title: "Unknown device",
                description: "Please select one and only one device to update",
                status: "error"
            };
            Toast(toaster);
        } else {
            device = activeDevices[0];
            onOpen();
        }
    };

    // const device = {
    //     id: 1,
    //     firmware: "Firmware",
    //     serial: "Serial",
    //     macAddress: "MAC Address",
    //     ipAddress: "localhost",
    //     label: "Label",
    //     deviceType: "Device type",
    //     model: "Model",
    //     sshPort: 20,
    //     state: "OK"
    // };

    return (
        <>
            <Tooltip label="Check Info">
                <IconButton icon={<FaInfoCircle/>} aria-label={"Check information"} onClick={onOpenForm}/>
            </Tooltip>
            <TableModal isOpen={isOpen} onClose={onClose} device={device}/>
        </>
    );
};
