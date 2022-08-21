import {Box, Button, Heading, useToast} from "@chakra-ui/react";
import {useDropzone} from "react-dropzone";
import "./style.css";
import {useState} from "react";
import {Form, Formik} from "formik";
import ReactJson from "react-json-view";
import DeviceService from "../../services/device.service";
import {useDispatch} from "react-redux";
import Toast from "../Toast/Toast";

export default (props) => {
    const {onClose} = props;
    const toast = useToast();
    const dispatch = useDispatch();

    let [result, setResult] = useState({});
    let [error, setError] = useState("");

    const onDrop = async (acceptedFiles, fileRejections) => {
        if (fileRejections.length !== 0) {
            setResult({});
            setError("Uploaded files are invalid, please check again");
        } else if (acceptedFiles.length === 1) {
            setError("");
            let text = await acceptedFiles[0].text();
            try {
                let json = JSON.parse(text);
                setResult(json);
            } catch (e) {
                setError(e.message);
            }
        }
    };

    const onSubmit = async (values) => {
        let toaster;
        let response = await DeviceService.batchAdd(dispatch, result);
        toaster = {
            toast: toast,
            title: "Imported devices",
            description: "Devices are imported",
            status: "success"
        };
        if (response) {
            toaster = {
                toast: toast,
                title: "Fail to import devices",
                description: response.data.message,
                status: "error"
            };
        }
        onClose();
        Toast(toaster);
    };

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
            "application/json": [".json"]
        },
        maxFiles: 1,
        onDrop
    });

    const onEdit = (event) => {
        setResult(event.updated_src);
    };

    const onDelete = (event) => {
        setResult(event.updated_src);
    };

    return (
        <Formik
            initialValues={{fileData: ""}}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div {...getRootProps({className: "dropzone"})}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop device file here, or click to select file</p>
                        <em>(You can only select 1 file here)</em>
                    </div>
                    <p style={{"color": "red", "display": error.length === 0 ? "none" : "unset"}}>{error}</p>
                    <Heading size={"md"} mt={10}>Data</Heading>
                    <ReactJson
                        src={result}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                    {/*<Textarea name={"fileData"} rows={15} mb={6} isReadOnly={true} value={result}></Textarea>*/}
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