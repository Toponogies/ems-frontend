import {useEffect, useMemo} from "react";
import Table from "../../../components/Table/DataTable";
import {useDispatch, useSelector} from "react-redux";
import PortService from "../../../services/port.service";
import {useContext} from "@types/react";
import {SocketContext} from "../../../context/socket";

export default () => {
    const {devices} = useSelector((state) => state.deviceReducer);
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);

    const columns = useMemo(
        () => [
            {Header: "ID", accessor: "id"},
            {Header: "Name", accessor: "name"},
            {Header: "Connector", accessor: "connector"},
            {Header: "MAC Address", accessor: "macAddress"},
            {Header: "State", accessor: "state"},
            {Header: "Related Interfaces", accessor: "interfaces"}
        ],
        []
    );

    const handleResyncDone = async () => {
        if (devices.length > 0)
            await PortService.fetchPortByDevice(dispatch, devices[0].label);
    };

    useEffect(() => {
        if (devices.length > 0)
            PortService.fetchPortByDevice(dispatch, devices[0].label).then();

        socket.on("RESYNC_DONE", handleResyncDone);

        return () => {
            socket.off("RESYNC_DONE", handleResyncDone);
        };

    }, [socket, handleResyncDone]);

    const {ports} = useSelector((state) => state.portReducer);

    return (
        <Table columns={columns} data={ports} tableName={"Port"}/>
    );
};
