import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input, useToast} from "@chakra-ui/react";
import Toast from "../Toast/Toast";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {add, update} from "../../actions/credential.action";

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
                title: "Added a credential",
                description: "A credential is added",
                status: "success"
            };

            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to add a credential",
                    description: response.data.message,
                    status: "error"
                };
            }
        } else if (action === "Update") {
            let response = await update(dispatch, values.id, values);

            toaster = {
                toast: toast,
                title: "Updated a credential",
                description: "A credential is updated",
                status: "success"
            };

            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to update a credential",
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
                name: "Name",
                username: "Username",
                password: "Password"
            };
        } else if (action === "Update") {
            const {activeCredentials} = useSelector((state) => state.credentialReducer);
            return activeCredentials[0];
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
                <Field name={"username"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Username</FormLabel>
                            <Input
                                id={"username"}
                                {...field}
                                placeholder="Username"
                            />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                    )}
                </Field>
                <Field name={"password"}
                       validate={validateName}>
                    {({field, form}) => (
                        <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                id={"password"}
                                {...field}
                                type="password"
                                placeholder="••••••••"
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