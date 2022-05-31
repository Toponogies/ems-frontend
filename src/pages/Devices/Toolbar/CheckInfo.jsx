import {IconButton, Tooltip, useDisclosure} from "@chakra-ui/react";
import {FaInfoCircle} from "react-icons/fa";
import TableModal from "../../../components/Table/TableModal";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    const device = {
        id: 1,
        firmware: "Firmware",
        serial: "Serial",
        macAddress: "MAC Address",
        ipAddress: "localhost",
        label: "Label",
        deviceType: "Device type",
        model: "Model",
        sshPort: 20,
        state: "OK"
    };

    return (
        <>
            <Tooltip label="Check Info">
                <IconButton icon={<FaInfoCircle/>} aria-label={"Check information"} onClick={onOpen}/>
            </Tooltip>
            <TableModal isOpen={isOpen} onClose={onClose} device={device}/>
        </>
    );
};
