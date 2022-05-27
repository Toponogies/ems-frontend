import { Button, HStack, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import {
    FaInfoCircle,
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
            <Tooltip label="Check Info">
                <IconButton icon={<FaInfoCircle />}  aria-label={"Check information"}/>
            </Tooltip>
            <Button colorScheme="blue" leftIcon={<FaPlus />}>
                Add
            </Button>
        </HStack>
    );
};
