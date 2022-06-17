import {Box, Button, FormLabel, useToast} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import DeviceService from "../../services/device.service";
import Toast from "../Toast/Toast";
import {Form, Formik} from "formik";
import {InputControl, SelectControl} from "formik-chakra-ui";
import * as yup from "yup";

export default (props) => {
    const toast = useToast();
    const {action, onClose} = props;
    const dispatch = useDispatch();
    const {credentials} = useSelector((state) => state.credentialReducer);

    const onSubmit = async (values) => {
        let toaster;

        if (action === "Add") {
            let response = await DeviceService.add(dispatch, values);
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
            let response = await DeviceService.update(dispatch, values.id, values);

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

    const {activeDevices} = useSelector((state) => state.deviceReducer);

    const getInitData = () => {
        if (action === "Add") {
            return {
                label: "",
                ipAddress: "",
                sshPort: 22,
                credential: undefined
            };
        } else if (action === "Update") {
            return activeDevices[0];
        }
    };

    const validationSchema = yup.object({
        label: yup.string().required(),
        ipAddress: yup.string().required(),
        sshPort: yup.number().required(),
        credential: yup.string().required()
    });

    return (
        <Formik
            initialValues={getInitData()}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({isSubmitting}) => (
                <Form>
                    <InputControl mb={4} name={"id"} label={"ID"} isDisabled={true} inputProps={{placeholder: "ID"}}/>

                    <InputControl mb={4} name={"label"} label={"Label"} inputProps={{placeholder: "Label"}}/>

                    <InputControl mb={4} name={"ipAddress"} label={"IP Address"}
                                  inputProps={{placeholder: "IP Address"}}/>

                    <InputControl mb={4} name={"sshPort"} label={"SSH Port"} inputProps={{placeholder: "SSH Port"}}/>

                    <FormLabel>Credential</FormLabel>
                    <SelectControl mb={4}
                                   name={"credential"}
                                   selectProps={{placeholder: "Select a credential"}}>
                        {credentials.map((credential) => (
                            <option key={credential.name}
                                    value={credential.name}>
                                {credential.name}
                            </option>
                        ))}
                    </SelectControl>

                    <Box align={"right"}>
                        <Button margin={"10px"} onClick={onClose}>Close</Button>
                        <Button
                            colorScheme={"blue"}
                            type={"submit"}
                            isLoading={isSubmitting}
                        >
                            Submit
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}