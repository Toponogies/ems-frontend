import Credentials from "@/pages/Credentials";
import Devices from "@/pages/Devices";
import Inventory from "@/pages/Inventory";
import {
    Avatar,
    Box, Button,
    Heading,
    HStack,
    Spacer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";
import {FaSignOutAlt} from "react-icons/fa";
import AuthService from "../services/auth.service";
import Alarm from "../pages/Alarm";

export default () => {
    const onLogout = () => {
        AuthService.doLogout();
    };
    return (
        <Box px={8} py={4}>
            <Tabs variant="soft-rounded" w="full">
                <VStack spacing="16px">
                    <HStack spacing="32px" w="full">
                        <Heading as="h1" size="xl">
                            Genso UI
                        </Heading>
                        <TabList>
                            <Tab>Devices</Tab>
                            <Tab>Inventory</Tab>
                            <Tab>Alarms</Tab>
                            <Tab>Credentials</Tab>
                        </TabList>

                        <Spacer/>

                        <HStack spacing="10px">
                            <Button size={"sm"} colorScheme="gray" leftIcon={<FaSignOutAlt/>} onClick={onLogout}>
                                Logout
                            </Button>
                            <Text fontSize="15px">{AuthService.getUsername()}</Text>
                            <Avatar
                                name={AuthService.getUsername()}
                                size="sm"
                            />
                        </HStack>
                    </HStack>

                    <TabPanels
                        border="1px"
                        borderColor="gray.300"
                        borderRadius="16px"
                    >
                        <TabPanel>
                            <Devices/>
                        </TabPanel>
                        <TabPanel>
                            <Inventory/>
                        </TabPanel>
                        <TabPanel>
                            <Alarm/>
                        </TabPanel>
                        <TabPanel>
                            <Credentials/>
                        </TabPanel>
                    </TabPanels>
                </VStack>
            </Tabs>
        </Box>
    );
};

