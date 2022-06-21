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

    const handleResyncDone = async (device) => {
        await DeviceService.fetchByLabel(dispatch, device);
    };

    useEffect(() => {
        DeviceService.fetchAll(dispatch).then();

        let s = socket.subscribe("/topic/resync-done", async (msg) => {
            if (msg.body) {
                const jsonBody = JSON.parse(msg.body);
                if (jsonBody.device) {
                    await handleResyncDone(jsonBody.device);
                }
            }
        });

        return () => {
            socket.unsubscribe(s.id);
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
