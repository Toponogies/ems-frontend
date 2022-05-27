import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    HStack,
    IconButton, Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import {
    FaSearch
} from 'react-icons/fa';
import React from "react";
import DrawerContainer from "./DrawerContainer";

export default ({data}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()

    return (
        <HStack spacing="10px">
            <Heading>Port</Heading>
            <Tooltip label="Choose Inventory type">
                <IconButton icon={<FaSearch/>} size={"sm"} ref={btnRef} colorScheme='blue' onClick={onOpen} aria-label={"Choose Inventory type"}/>
            </Tooltip>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Inventory type</DrawerHeader>

                    <DrawerBody>
                        <DrawerContainer/>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Choose</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </HStack>);
};
