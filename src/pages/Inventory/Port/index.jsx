import {useMemo} from "react";
import Table from "../../../components/Table/DataTable";
import {useSelector} from "react-redux";

export default () => {
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

    return (
        <Table columns={columns} data={ports} tableName={"Port"}/>
    );
};
