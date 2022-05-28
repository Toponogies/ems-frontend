import {Flex, FormControl, FormLabel, Input, Select} from "@chakra-ui/react";

export default () => {
    return (
        <Flex width="full" direction={"column"} gap={"4"}>
            <FormControl isDisabled={true}>
                <FormLabel>ID</FormLabel>
                <Input placeholder="ID"/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel>Label</FormLabel>
                <Input placeholder="Label"/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='credential'>Credential</FormLabel>
                <Select id='credential'>
                    <option>Credential 1</option>
                    <option>Credential 2</option>
                </Select>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel>IP Address</FormLabel>
                <Input placeholder="IP Address"/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel>Port</FormLabel>
                <Input placeholder="Port" type={"number"}/>
            </FormControl>

        </Flex>
    )
}