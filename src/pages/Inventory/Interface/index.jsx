import {useMemo} from "react";
import Table from "../../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useSelector} from "react-redux";

export default () => {
    const columns = useMemo(
        () => [
            {Header: "ID", accessor: "id"},
            {Header: "Name", accessor: "name"},
            {Header: "State", accessor: "state"},
            {Header: "DHCP", accessor: "dhcp"},
            {Header: "IP Address", accessor: "ipAddress"},
            {Header: "Netmask", accessor: "netmask"},
            {Header: "Gateway", accessor: "gateway"},
            {Header: "Port", accessor: "ports"}
        ],
        []
    );

    const {interfaces} = useSelector((state) => state.interfaceReducer);

    return (
        <>
            <Toolbar/>
            <Table columns={columns} data={interfaces} tableName={"Interface"}/>
        </>
    );
};
