import Credentials from '@/pages/Credentials';
import Devices from '@/pages/Devices';
import Inventory from '@/pages/Inventory';
import {
    Avatar,
    Box,
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
} from '@chakra-ui/react';

export default () => {
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
                            <Tab>Credentials</Tab>
                        </TabList>

                        <Spacer />

                        <HStack spacing="16px">
                            <Text>Dan Abrahmov</Text>
                            <Avatar
                                name="Dan Abrahmov"
                                size="sm"
                                src="https://bit.ly/dan-abramov"
                            />
                        </HStack>
                    </HStack>

                    <TabPanels
                        border="1px"
                        borderColor="gray.300"
                        borderRadius="16px"
                    >
                        <TabPanel>
                            <Devices />
                        </TabPanel>
                        <TabPanel>
                            <Inventory />
                        </TabPanel>
                        <TabPanel>
                            <Credentials />
                        </TabPanel>
                    </TabPanels>
                </VStack>
            </Tabs>
        </Box>
    );
};

