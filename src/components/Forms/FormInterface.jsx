import {Box, Button, FormLabel, useToast} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {add, update} from "../../actions/interface.action";
import Toast from "../Toast/Toast";
import {Form, Formik} from "formik";
import * as yup from "yup";
import {InputControl, SelectControl} from "formik-chakra-ui";
import {fetchPorts} from "../../actions/port.action";
import {loadPorts} from "../../reducers/port.reducer";

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

    const {devices} = useSelector((state) => state.deviceReducer);
    let {ports} = useSelector((state) => state.portReducer);

    const onDeviceSelected = async (option) => {
        ports = await fetchPorts();
        ports = ports.filter(p => p.networkDevice === option.target.value);
        dispatch(loadPorts(ports));
    };

    const getInitData = () => {
        if (action === "Add") {
            return {
                name: "",
                ipAddress: "",
                netmask: "",
                gateway: "",
                state: "",
                dhcp: "",
                networkDevice: undefined,
                port: undefined
            };
        } else if (action === "Update") {
            const {activeInterfaces} = useSelector((state) => state.interfaceReducer);
            return activeInterfaces[0];
        }
    };

    const validationSchema = yup.object({
        name: yup.string().required(),
        ipAddress: yup.string().required(),
        port: yup.string().required()
    });

    const stateEnum = [
        {
            label: "Enable",
            value: "ENABLED"
        },
        {
            label: "Disable",
            value: "DISABLED"
        }
    ];

    return (
        <Formik
            initialValues={getInitData()}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({isSubmitting}) => (
                <Form>
                    <InputControl mb={4} name={"id"} label={"ID"} isDisabled={true}
                                  inputProps={{placeholder: "ID"}}/>

                    <InputControl mb={4} name={"name"} label={"Name"} inputProps={{placeholder: "Name"}}/>

                    <InputControl mb={4} name={"ipAddress"} label={"IP Address"}
                                  inputProps={{placeholder: "IP Address"}}/>

                    <InputControl mb={4} name={"netmask"} label={"Netmask"} inputProps={{placeholder: "Netmask"}}/>

                    <InputControl mb={4} name={"gateway"} label={"Gateway"} inputProps={{placeholder: "Gateway"}}/>

                    <FormLabel>State</FormLabel>
                    <SelectControl mb={4}
                                   name={"state"}
                                   selectProps={{placeholder: "Select a state"}}>
                        {stateEnum.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                    </SelectControl>

                    <FormLabel>DHCP</FormLabel>
                    <SelectControl mb={4}
                                   name={"dhcp"}
                                   selectProps={{placeholder: "Select a DHCP state"}}>
                        {stateEnum.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                    </SelectControl>

                    <FormLabel>Device</FormLabel>
                    <SelectControl mb={4}
                                   name={"networkDevice"}
                                   selectProps={{placeholder: "Select a device"}}
                                   onClick={onDeviceSelected}
                    >
                        {devices.map((device) => (
                            <option key={device.label}
                                    value={device.label}>
                                {device.label}
                            </option>
                        ))}
                    </SelectControl>

                    <FormLabel>Port</FormLabel>
                    <SelectControl mb={4}
                                   name={"port"}
                                   selectProps={{placeholder: "Select a port"}}>
                        {ports.map((port) => (
                            <option key={port.name}
                                    value={port.name}>
                                {port.name}
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