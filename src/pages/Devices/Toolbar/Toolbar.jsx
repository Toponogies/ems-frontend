import {HStack, IconButton, Spacer, Tooltip} from "@chakra-ui/react";
import {FaInfoCircle, FaUndo} from "react-icons/fa";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";

export default () => {
    return (
        <HStack spacing="8px" width="full">
            <Spacer/>
            <Tooltip label="Resync">
                <IconButton icon={<FaUndo/>} aria-label={"Resync"}/>
            </Tooltip>
            <Update/>
            <Delete/>
            <Tooltip label="Check Info">
                <IconButton icon={<FaInfoCircle/>} aria-label={"Check information"}/>
            </Tooltip>
            <Add/>
        </HStack>
    );
};
