import {IconButton, Tooltip, useDisclosure} from "@chakra-ui/react";
import {FaPen} from "react-icons/fa";
import FormModal from "../../../components/Forms/FormModal";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Tooltip label="Update">
                <IconButton icon={<FaPen/>} aria-label={"Update"} onClick={onOpen}/>
            </Tooltip>
            <FormModal isOpen={isOpen} onClose={onClose} action={"Update"} entity={"Credential"}/>
        </>
    );
};
