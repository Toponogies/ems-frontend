import {HStack, Spacer} from '@chakra-ui/react';
import Delete from "./Delete";
import Update from "./Update";
import Add from "./Add";

export default () => {
    return (
        <HStack spacing="8px" width="full">
            <Spacer/>
            <Update/>
            <Delete/>
            <Add/>
        </HStack>
    );
};
