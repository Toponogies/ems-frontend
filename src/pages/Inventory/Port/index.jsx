import {useMemo, useEffect} from "react";
import Table from "../../../components/Table/DataTable";
import {useDispatch, useSelector} from "react-redux";
import {fetchPortByDevice} from "../../../actions/port.action";

export default () => {
    const {devices} = useSelector((state) => state.deviceReducer);
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (devices.length > 0)
            fetchPortByDevice(dispatch, devices[0].label).then();
    }, []);

    const {ports} = useSelector((state) => state.portReducer);

    return (
        <Table columns={columns} data={ports} tableName={"Port"}/>
    );
};
