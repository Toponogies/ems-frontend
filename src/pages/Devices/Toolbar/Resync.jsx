import {IconButton, Tooltip, useToast} from "@chakra-ui/react";
import {FaUndo} from "react-icons/fa";
import Toast from "../../../components/Toast/Toast";
import {useDispatch, useSelector} from "react-redux";
import {resync} from "../../../actions/device.action";

export default () => {
    const toast = useToast();
    const {activeDevices} = useSelector((state) => state.deviceReducer);
    const dispatch = useDispatch();

    const onSubmit = async () => {
        let toaster;
        if (activeDevices.length < 1) {
            let toaster = {
                toast: toast,
                title: "Unknown device",
                description: "Please select one and more devices to resync",
                status: "error"
            };
            Toast(toaster);
        } else {
            let ids = activeDevices.map(device => device.id);
            let response = await resync(dispatch, ids);
            toaster = {
                toast: toast,
                title: "Submitted devices to resync",
                description: "Picked device are being resync",
                status: "success"
            };
            if (response) {
                toaster = {
                    toast: toast,
                    title: "Fail to resync devices",
                    description: response.data.message,
                    status: "error"
                };
            }
        }

        Toast(toaster);
    };

    return (
        <>
            <Tooltip label="Resync">
                <IconButton icon={<FaUndo/>} aria-label={"Resync"} onClick={onSubmit}/>
            </Tooltip>
        </>
    );
}