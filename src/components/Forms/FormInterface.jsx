import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, useToast} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {add, update} from "../../actions/interface.action";
import Toast from "../Toast/Toast";
import {Field, Form, Formik} from "formik";

export default (props) => {
    const toast = useToast();
    const {action, onClose} = props;
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        let toaster;

        if (action === "Add") {
            let response = await add(dispatch, values);
            toaster = {
                toast: toast,
                title: "Added an interface",
                description: "An interface is added",
                status: "success"
            };

            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to add an interface",
                    description: response.data.message,
                    status: "error"
                };
            }
        } else if (action === "Update") {
            let response = await update(dispatch, values.id, values);

            toaster = {
                toast: toast,
                title: "Updated an interface",
                description: "An interface is updated",
                status: "success"
            };

            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to update an interface",
                    description: response.data.message,
                    status: "error"
                };
            }
        }
        onClose();
        Toast(toaster);
    };

    const getInitData = () => {
        if (action === "Add") {
            return {
                // name: "Name",
                // username: "Username",
                // password: "Password"
            };
        } else if (action === "Update") {
            const {activeInterfaces} = useSelector((state) => state.interfaceReducer);
            return activeInterfaces[0];
        }
    };

    const validateName = (value) => {
        // let error;
        // if (!value) {
        //     error = "Name is required";
        // } else if (value.toLowerCase() !== "naruto") {
        //     error = "Jeez! You're not a fan 😱";
        // }
        // return error;
    };

    const stateEnum = [
        "ENABLED",
        "DISABLED"
    ]

    return (
        <Formik
            initialValues={getInitData()}
            onSubmit={onSubmit}
        >
            <Form>
                <Field name={"id"}>
                    {({field}) => (
                        <FormControl mb={4} isDisabled={true}>
                            <FormLabel>ID</FormLabel>
                            <Input
                                id={"id"}
                                {...field}
                                placeholder="ID"
                            />
                        </FormControl>
                    )}
                </Field>
                <Field name={"name"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                id={"name"}
                                {...field}
                                placeholder="Name"
                            />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name={"ipAddress"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>IP Address</FormLabel>
                            <Input
                                id={"ipAddress"}
                                {...field}
                                placeholder="IP Address"
                            />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name={"netmask"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Netmask</FormLabel>
                            <Input
                                id={"netmask"}
                                {...field}
                                placeholder="Netmask"
                            />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name={"gateway"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Gateway</FormLabel>
                            <Input
                                id={"gateway"}
                                {...field}
                                placeholder="Gateway"
                            />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name={"state"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>State</FormLabel>
                            <Select
                                id={"state"}
                                name={field.name}
                                options={stateEnum}
                                value={stateEnum
                                    ? stateEnum.find((c) => form.values.state = c)
                                    : ""
                                }
                                onChange={(option) => {
                                    form.values.state = option.target.value;
                                }}
                            >
                                {stateEnum.map((s) => (
                                    <option
                                        key={s}
                                        value={s}
                                        id={s}>
                                        {s}
                                    </option>
                                ))}
                            </Select>
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name={"dhcp"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>DHCP</FormLabel>
                            <Select
                                id={"dhcp"}
                                name={field.name}
                                options={stateEnum}
                                value={stateEnum
                                    ? stateEnum.find((c) => form.values.dhcp = c)
                                    : ""
                                }
                                onChange={(option) => {
                                    form.values.dhcp = option.target.value;
                                }}
                            >
                                {stateEnum.map((s) => (
                                    <option
                                        key={s}
                                        value={s}
                                        id={s}>
                                        {s}
                                    </option>
                                ))}
                            </Select>
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>

                <Box align={"right"}>
                    <Button margin={"10px"} onClick={onClose}>Close</Button>
                    <Button
                        colorScheme={"blue"}
                        type={"submit"}
                    >
                        Submit
                    </Button>
                </Box>
            </Form>
        </Formik>
    );
}


// export default () => {
//     return (
//         <Flex width="full" direction={"column"} gap={"4"}>
//             <FormControl isDisabled={true}>
//                 <FormLabel>ID</FormLabel>
//                 <Input placeholder="ID"/>
//             </FormControl>
//
//             <FormControl isRequired={true}>
//                 <FormLabel>Name</FormLabel>
//                 <Input placeholder="Name"/>
//             </FormControl>
//
//             <FormControl isRequired={true}>
//                 <FormLabel htmlFor="state">State</FormLabel>
//                 <Select id="state">
//                     <option>Enabled</option>
//                     <option>Disabled</option>
//                 </Select>
//             </FormControl>
//
//             <FormControl isRequired={true}>
//                 <FormLabel htmlFor="dhcp">DHCP</FormLabel>
//                 <Select id="dhcp">
//                     <option>Enabled</option>
//                     <option>Disabled</option>
//                 </Select>
//             </FormControl>
//
//             <FormControl isRequired={true}>
//                 <FormLabel>IP Address</FormLabel>
//                 <Input placeholder="IP Address"/>
//             </FormControl>
//
//             <FormControl>
//                 <FormLabel>Netmask</FormLabel>
//                 <Input placeholder="Netmask"/>
//             </FormControl>
//
//             <FormControl>
//                 <FormLabel>Gateway</FormLabel>
//                 <Input placeholder="Gateway"/>
//             </FormControl>
//
//             <FormControl isRequired={true}>
//                 <FormLabel htmlFor="networkDevice">Network Device</FormLabel>
//                 <Select id="networkDevice">
//                     <option>Device 1</option>
//                     <option>Device 2</option>
//                 </Select>
//             </FormControl>
//
//             <FormControl isRequired={true}>
//                 <FormLabel htmlFor="port">Port</FormLabel>
//                 <Select id="port">
//                     <option>Port 1</option>
//                     <option>Port 2</option>
//                 </Select>
//             </FormControl>
//         </Flex>
//     );
// }