import {useMemo, useEffect} from "react";
import Table from "../../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchInterfaceByDevice} from "../../../actions/interface.action";

export default () => {
    const {devices} = useSelector((state) => state.deviceReducer);
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (devices.length > 0)
            fetchInterfaceByDevice(dispatch, devices[0].label).then();
    }, []);

    const {interfaces} = useSelector((state) => state.interfaceReducer);

    return (
        <>
            <Toolbar/>
            <Table columns={columns} data={interfaces} tableName={"Interface"}/>
        </>
    );
};
