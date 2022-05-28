import {Flex, FormControl, FormLabel, Input, Select} from "@chakra-ui/react";

export default () => {
    return (
        <Flex width="full" direction={"column"} gap={"4"}>
            <FormControl isDisabled={true}>
                <FormLabel>ID</FormLabel>
                <Input placeholder="ID"/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name"/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='state'>State</FormLabel>
                <Select id='state'>
                    <option>Enabled</option>
                    <option>Disabled</option>
                </Select>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='dhcp'>DHCP</FormLabel>
                <Select id='dhcp'>
                    <option>Enabled</option>
                    <option>Disabled</option>
                </Select>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel>IP Address</FormLabel>
                <Input placeholder="IP Address"/>
            </FormControl>

            <FormControl>
                <FormLabel>Netmask</FormLabel>
                <Input placeholder="Netmask"/>
            </FormControl>

            <FormControl>
                <FormLabel>Gateway</FormLabel>
                <Input placeholder="Gateway"/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='networkDevice'>Network Device</FormLabel>
                <Select id='networkDevice'>
                    <option>Device 1</option>
                    <option>Device 2</option>
                </Select>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='port'>Port</FormLabel>
                <Select id='port'>
                    <option>Port 1</option>
                    <option>Port 2</option>
                </Select>
            </FormControl>

        </Flex>
    )
}