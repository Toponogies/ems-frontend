import {HStack, Spacer} from '@chakra-ui/react';
import Add from "./Add";
import Update from "./Update";
import Delete from "./Delete";

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
