import { Button, HStack, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import {
    FaBolt,
    FaInfoCircle,
    FaPen,
    FaPlus,
    FaTrash,
    FaUndo
} from 'react-icons/fa';

export default () => {
    return (
        <HStack spacing="8px" width="full">
            <Spacer />
            <Tooltip label="Resync">
                <IconButton icon={<FaUndo />}  aria-label={"Resync"}/>
            </Tooltip>
            <Tooltip label="Test">
                <IconButton icon={<FaBolt />}  aria-label={"Test"}/>
            </Tooltip>
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
