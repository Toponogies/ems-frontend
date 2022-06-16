import {IconButton, Tooltip, useToast} from "@chakra-ui/react";
import {FaDownload} from "react-icons/fa";
import Toast from "../../../components/Toast/Toast";
import {useSelector} from "react-redux";
import {download} from "../../../actions/device.action";

export default () => {
    const toast = useToast();
    const {activeDevices} = useSelector((state) => state.deviceReducer);

    const onSubmit = async () => {
        let toaster = {
            toast: toast,
            title: "Downloading a configuration",
            description: "Configuration of a device is downloading",
            status: "success"
        };
        if (activeDevices.length !== 1) {
            toaster = {
                toast: toast,
                title: "Unknown device",
                description: "Please select one and only one device to download configuration",
                status: "error"
            };
        } else {
            let response = await download(activeDevices[0].id);
            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to download configuration of a device",
                    description: "Configuration file cannot be downloaded",
                    status: "error"
                };
            }
        }
        Toast(toaster);
    };

    return (
        <>
            <Tooltip label="Download">
                <IconButton icon={<FaDownload/>} aria-label={"Download"} onClick={onSubmit}/>
            </Tooltip>
        </>
    );
};
