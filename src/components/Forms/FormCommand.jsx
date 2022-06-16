import {Box, Button, FormLabel, Textarea, useToast} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import {InputControl} from "formik-chakra-ui";
import Toast from "../Toast/Toast";
import DeviceService from "../../services/device.service";
import {useState} from "react";

export default () => {
    const toast = useToast();
    const dispatch = useDispatch();
    let toaster;
    const [result, setResult] = useState("");

    const {activeDevices} = useSelector((state) => state.deviceReducer);

    const onSubmit = async (values) => {
        const response = await DeviceService.execute(dispatch, activeDevices[0].id, values);

        if (typeof response.data === "string" || response.data instanceof String) {
            setResult(response.data);
            toaster = {
                toast: toast,
                title: "Executed a command",
                description: "A command is executed successfully",
                status: "success"
            };
        } else {
            setResult("");
            toaster = {
                toast: toast,
                title: "Fail to execute a command",
                description: response.data.message,
                status: "error"
            };
        }
        Toast(toaster);
    };

    const validationSchema = yup.object({
        command: yup.string().required()
    });

    return (
        <>
            <Formik
                initialValues={{command: ""}}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({isSubmitting}) => (
                    <Form>
                        <InputControl mb={4} name={"command"} label={"Command"} inputProps={{placeholder: "Command"}}/>

                        <Box align={"right"}>
                            <Button
                                colorScheme={"blue"}
                                type={"submit"}
                                isLoading={isSubmitting}
                            >
                                Execute
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
            <FormLabel>Result</FormLabel>
            <Textarea rows={15} mb={6} isReadOnly={true} value={result}></Textarea>
        </>
    );
}