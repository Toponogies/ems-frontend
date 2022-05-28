import {Flex, FormControl, FormLabel, Input} from "@chakra-ui/react";

export default () => {
    return (
        <Flex width="full" direction={"column"} gap={"4"}>
            <FormControl isDisabled={true}>
                <FormLabel>ID</FormLabel>
                <Input placeholder="ID" />
            </FormControl>
            <FormControl isRequired={true}>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name" />
            </FormControl>
            <FormControl isRequired={true}>
                <FormLabel>Username</FormLabel>
                <Input placeholder="Username" />
            </FormControl>
            <FormControl isRequired={true}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="••••••••" />
            </FormControl>
        </Flex>
    )
}