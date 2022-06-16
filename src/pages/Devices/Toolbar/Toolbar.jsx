import {HStack, Spacer} from "@chakra-ui/react";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import Resync from "./Resync";
import CheckInfo from "./CheckInfo";
import Command from "./Command";
import Download from "./Download";

export default () => {
    return (
        <HStack spacing="8px" width="full">
            <Spacer/>
            <Resync/>
            <Command/>
            <Download/>
            <Update/>
            <Delete/>
            <CheckInfo/>
            <Add/>
        </HStack>
    );
};
