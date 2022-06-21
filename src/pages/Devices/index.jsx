import {VStack} from "@chakra-ui/react";
import {useContext, useEffect, useMemo} from "react";
import Table from "../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import DeviceService from "../../services/device.service";
import SocketContext from "../../socket/context";

export default () => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);

    const columns = useMemo(
        () => [
            {Header: "ID", accessor: "id"},
            {Header: "Label", accessor: "label"},
            {Header: "Credential", accessor: "credential"},
            {Header: "Port", accessor: "sshPort"},
            {Header: "IP Address", accessor: "ipAddress"},
            {Header: "Resync Status", accessor: "resyncStatus"}
        ],
        []
    );

    const handleResyncDone = async (data) => {
        await DeviceService.fetchByLabel(dispatch, data.device);
    };

    useEffect(() => {
        DeviceService.fetchAll(dispatch).then();

        socket.on("RESYNC_DONE", handleResyncDone);

        return () => {
            socket.off("RESYNC_DONE", handleResyncDone);
        };
    }, []);

    const {devices} = useSelector((state) => state.deviceReducer);

    return (
        <VStack spacing="20px">
            <Toolbar/>
            <Table columns={columns} data={devices} tableName={"Device"}/>
        </VStack>
    );
};
