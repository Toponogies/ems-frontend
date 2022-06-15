import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, useToast} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {add, update} from "../../actions/device.action";
import Toast from "../Toast/Toast";
import {Field, Form, Formik} from "formik";

export default (props) => {
    const toast = useToast();
    const {action, onClose} = props;
    const dispatch = useDispatch();
    const {credentials} = useSelector((state) => state.credentialReducer);

    const onSubmit = async (values) => {
        let toaster;

        if (action === "Add") {
            let response = await add(dispatch, values);
            toaster = {
                toast: toast,
                title: "Added a device",
                description: "A device is added",
                status: "success"
            };

            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to add a device",
                    description: response.data.message,
                    status: "error"
                };
            }
        } else if (action === "Update") {
            let response = await update(dispatch, values.id, values);

            toaster = {
                toast: toast,
                title: "Updated a device",
                description: "A device is updated",
                status: "success"
            };

            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to update a device",
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
                label: "Label",
                ipAddress: "IP Address",
                sshPort: 22
            };
        } else if (action === "Update") {
            const {activeDevices} = useSelector((state) => state.deviceReducer);
            return activeDevices[0];
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
                <Field name={"label"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                id={"label"}
                                {...field}
                                placeholder="Label"
                            />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name={"credential"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Credential</FormLabel>
                            <Select
                                id={"credential"}
                                name={field.name}
                                options={credentials}
                                value={credentials
                                    ? credentials.find((c) => form.values.credential = c.name)
                                    : ""
                                }
                                onChange={(option) => {
                                    form.values.credential = option.target.value;
                                }}
                            >
                                {credentials.map((credential) => (
                                    <option
                                        key={credential.name}
                                        value={credential.name}
                                        id={credential.name}>
                                        {credential.name}
                                    </option>
                                ))}
                            </Select>
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
                <Field name={"sshPort"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Port</FormLabel>
                            <Input
                                id={"sshPort"}
                                {...field}
                                type="number"
                                placeholder="22"
                            />
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