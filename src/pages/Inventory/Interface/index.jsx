import {useEffect, useMemo, useContext} from "react";
import Table from "../../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import InterfaceService from "../../../services/interface.service";
import {SocketContext} from "../../../context/socket";

export default () => {
    const {devices} = useSelector((state) => state.deviceReducer);
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);

    const columns = useMemo(
        () => [
            {Header: "ID", accessor: "id"},
            {Header: "Name", accessor: "name"},
            {Header: "State", accessor: "state"},
            {Header: "DHCP", accessor: "dhcp"},
            {Header: "IP Address", accessor: "ipAddress"},
            {Header: "Netmask", accessor: "netmask"},
            {Header: "Gateway", accessor: "gateway"},
            {Header: "Port", accessor: "port"}
        ],
        []
    );

    const handleResyncDone = async () => {
        if (devices.length > 0)
            await InterfaceService.fetchInterfaceByDevice(dispatch, devices[0].label);
    };

    useEffect(() => {
        if (devices.length > 0)
            InterfaceService.fetchInterfaceByDevice(dispatch, devices[0].label).then();

        socket.on("RESYNC_DONE", handleResyncDone);

        return () => {
            socket.off("RESYNC_DONE", handleResyncDone);
        };
    }, [socket, handleResyncDone]);

    const {interfaces} = useSelector((state) => state.interfaceReducer);

    return (
        <>
            <Toolbar/>
            <Table columns={columns} data={interfaces} tableName={"Interface"}/>
        </>
    );
};
