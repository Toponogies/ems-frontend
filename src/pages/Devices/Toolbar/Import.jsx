import {IconButton, Tooltip, useDisclosure} from "@chakra-ui/react";
import {FaUpload} from "react-icons/fa";
import FormModal from "../../../components/Forms/FormModal";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Tooltip label="Import">
                <IconButton icon={<FaUpload/>} aria-label={"Import"} onClick={onOpen}/>
            </Tooltip>
            <FormModal isOpen={isOpen} onClose={onClose} entity={"Import"}/>
        </>
    );
};
