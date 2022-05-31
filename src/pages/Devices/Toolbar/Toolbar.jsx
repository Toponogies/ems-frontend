import {HStack, Spacer} from "@chakra-ui/react";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import Resync from "./Resync";
import CheckInfo from "./CheckInfo";

export default () => {
    return (
        <HStack spacing="8px" width="full">
            <Spacer/>
            <Resync/>
            <Update/>
            <Delete/>
            <CheckInfo/>
            <Add/>
        </HStack>
    );
};
