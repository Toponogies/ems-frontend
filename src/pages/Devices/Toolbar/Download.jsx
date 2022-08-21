import {IconButton, Tooltip, useToast} from "@chakra-ui/react";
import {FaDownload} from "react-icons/fa";
import Toast from "../../../components/Toast/Toast";
import {useSelector} from "react-redux";
import DeviceService from "../../../services/device.service";

export default () => {
    const toast = useToast();
    const {activeDevices} = useSelector((state) => state.deviceReducer);

    const onSubmit = async () => {
        let toaster;
        if (activeDevices.length < 1) {
            let toaster = {
                toast: toast,
                title: "Unknown device",
                description: "Please select one and more devices to download",
                status: "error"
            };
            Toast(toaster);
        } else {
            let ids = activeDevices.map(device => device.id);
            let response = await DeviceService.download(ids);
            toaster = {
                toast: toast,
                title: "Downloading configuration",
                description: "Configuration of devices is downloading",
                status: "success"
            };
            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to download configuration of devices",
                    description: "Configuration files cannot be downloaded",
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
