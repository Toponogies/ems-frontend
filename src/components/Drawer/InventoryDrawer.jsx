import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    HStack,
    IconButton,
    Tooltip,
    useDisclosure
} from "@chakra-ui/react";
import {FaSearch} from "react-icons/fa";
import React from "react";
import DrawerContainer from "./DrawerContainer";

export default (props) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();
    const {page} = props;

    return (
        <HStack spacing="10px">
            <Heading>{page}</Heading>
            <Tooltip label="Choose Inventory type">
                <IconButton icon={<FaSearch/>} size={"sm"} ref={btnRef} colorScheme="blue" onClick={onOpen}
                            aria-label={"Choose Inventory type"}/>
            </Tooltip>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Inventory type</DrawerHeader>

                    <DrawerBody>
                        <DrawerContainer page={page}/>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </HStack>);
};
