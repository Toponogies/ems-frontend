import {IconButton, Tooltip, useDisclosure} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa";
import Dialog from "../../../components/Dialog/Dialog";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Tooltip label="Delete">
                <IconButton textColor="red.500" icon={<FaTrash/>} aria-label={"Delete"} onClick={onOpen}/>
            </Tooltip>
            <Dialog isOpen={isOpen} onClose={onClose} action={"Delete Credential"}/>
        </>
    );
};
