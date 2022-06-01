import {IconButton, Tooltip, useToast} from "@chakra-ui/react";
import {FaUndo} from "react-icons/fa";
import Toast from "../../../components/Toast/Toast";

export default () => {
    const toast = useToast();

    const onSubmit = () => {
        let toaster = {
            toast: toast,
            title: "Submitted devices to resync",
            description: "Picked device are being resync",
            status: "success"
        };
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