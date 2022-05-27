import { Button, HStack, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import {
    FaPen,
    FaPlus,
    FaTrash,
} from 'react-icons/fa';

export default () => {
    return (
        <HStack spacing="8px" width="full">
            <Spacer />
            <Tooltip label="Update">
                <IconButton icon={<FaPen />}  aria-label={"Update"}/>
            </Tooltip>
            <Tooltip label="Delete">
                <IconButton textColor="red.500" icon={<FaTrash />}  aria-label={"Delete"}/>
            </Tooltip>
            <Button colorScheme="blue" leftIcon={<FaPlus />}>
                Add
            </Button>
        </HStack>
    );
};
