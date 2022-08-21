import Credentials from "@/pages/Credentials";
import Devices from "@/pages/Devices";
import Inventory from "@/pages/Inventory";
import {
    Avatar,
    Box,
    Button,
    chakra,
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
import {useDispatch, useSelector} from "react-redux";
import {resetNewAlarms} from "../reducers/alarm.reducer";

export default () => {
    const dispatch = useDispatch();
    const {newAlarms} = useSelector((state) => state.alarmReducer);

    const onLogout = () => {
        AuthService.doLogout();
    };

    const onReset = () => {
        dispatch(resetNewAlarms());
    };

    return (
        <Box px={8} py={4}>
            <Tabs variant="soft-rounded" w="full">
                <VStack spacing="16px">
                    <HStack spacing="32px" w="full">
                        <Heading as="h1" size="xl">
                            EMS UI
                        </Heading>
                        <TabList>
                            <Tab>Devices</Tab>
                            <Tab>Inventory</Tab>
                            <chakra.span pos="relative" display="inline-block" mr={4}>
                                <Tab onClick={onReset}>Alarms</Tab>
                                <chakra.span
                                    style={{"display": newAlarms === 0 ? "none" : "unset"}}
                                    pos="absolute"
                                    top="-1px"
                                    right="-1px"
                                    px={2}
                                    py={1}
                                    fontSize="xs"
                                    fontWeight="bold"
                                    lineHeight="none"
                                    color="red.100"
                                    transform="translate(50%,-50%)"
                                    bg="red.600"
                                    rounded="full"
                                >
                                    {newAlarms}
                                </chakra.span>
                            </chakra.span>
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

