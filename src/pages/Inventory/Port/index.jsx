import {useEffect, useMemo} from "react";
import Table from "../../../components/Table/DataTable";
import {useDispatch, useSelector} from "react-redux";
import PortService from "../../../services/port.service";
import {useContext} from "@types/react";
import SocketContext from "../../../socket/context";
import DeviceService from "../../../services/device.service";

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

    const {ports} = useSelector((state) => state.portReducer);
    const {currentDevice} = useSelector((state) => state.inventoryReducer);

    const handleResyncDone = async (data) => {
        if (data.device === currentDevice)
            await PortService.fetchPortByDevice(dispatch, data.device);
    };

    useEffect(() => {
        if (devices.length > 0 && currentDevice === devices[0].label)
            PortService.fetchPortByDevice(dispatch, devices[0].label).then();

        socket.on("RESYNC_DONE", handleResyncDone);

        return () => {
            socket.off("RESYNC_DONE", handleResyncDone);
        };
    }, []);

    return (
        <Table columns={columns} data={ports} tableName={"Port"}/>
    );
};
