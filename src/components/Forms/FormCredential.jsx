import {Box, Button, useToast} from "@chakra-ui/react";
import Toast from "../Toast/Toast";
import {Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {add, update} from "../../actions/credential.action";
import * as yup from "yup";
import {InputControl} from "formik-chakra-ui";

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
                name: "",
                username: "",
                password: ""
            };
        } else if (action === "Update") {
            const {activeCredentials} = useSelector((state) => state.credentialReducer);
            return activeCredentials[0];
        }
    };

    const validationSchema = yup.object({
        name: yup.string().required(),
        username: yup.string().required(),
        password: yup.string().required()
    });

    return (
        <Formik
            initialValues={getInitData()}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <InputControl mb={4} name={"id"} label={"ID"} isDisabled={true} inputProps={{placeholder: "ID"}}/>

                <InputControl mb={4} name={"name"} label={"Name"} inputProps={{placeholder: "Name"}}/>

                <InputControl mb={4} name={"username"} label={"Username"} inputProps={{placeholder: "Username"}}/>

                <InputControl mb={4} name={"password"} label={"Password"} inputProps={{type: "password", placeholder: "Password"}}/>

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