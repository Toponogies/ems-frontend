import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr
} from "@chakra-ui/react";

export default (props) => {
    const {isOpen, onClose, device} = props;

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered size={"3xl"}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader marginTop={"20px"}>Device information</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <TableContainer>
                        <Table variant='striped' colorScheme='blue'>
                            <TableCaption>Device's {device.ipAddress}</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Key</Th>
                                    <Th>Value</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>ID</Td>
                                    <Td>{device.id}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Firmware</Td>
                                    <Td>{device.firmware}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Serial</Td>
                                    <Td>{device.serial}</Td>
                                </Tr>
                                <Tr>
                                    <Td>MAC Address</Td>
                                    <Td>{device.macAddress}</Td>
                                </Tr>
                                <Tr>
                                    <Td>IP Address</Td>
                                    <Td>{device.ipAddress}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Label</Td>
                                    <Td>{device.label}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Device type</Td>
                                    <Td>{device.deviceType}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Model</Td>
                                    <Td>{device.model}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Port</Td>
                                    <Td>{device.sshPort}</Td>
                                </Tr>
                                <Tr>
                                    <Td>State</Td>
                                    <Td>{device.state}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
