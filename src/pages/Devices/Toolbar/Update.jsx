import {IconButton, Tooltip, useDisclosure, useToast} from "@chakra-ui/react";
import {FaPen} from "react-icons/fa";
import FormModal from "../../../components/Forms/FormModal";
import Toast from "../../../components/Toast/Toast";
import {useSelector} from "react-redux";
import RenderOnRole from "../../../components/RenderOnRole";

export default () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const {activeDevices} = useSelector((state) => state.deviceReducer);

    const onOpenForm = () => {
        if (activeDevices.length !== 1) {
            let toaster = {
                toast: toast,
                title: "Unknown device",
                description: "Please select one and only one device to update",
                status: "error"
            };
            Toast(toaster);
        } else {
            onOpen();
        }
    };

    return (
        <>
            <RenderOnRole roles={["admin"]}>
                <Tooltip label="Update">
                    <IconButton icon={<FaPen/>} aria-label={"Update"} onClick={onOpenForm}/>
                </Tooltip>
                <FormModal isOpen={isOpen} onClose={onClose} action={"Update"} entity={"Device"}/>
            </RenderOnRole>
        </>
    );
};
