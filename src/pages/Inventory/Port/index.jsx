import {useEffect, useMemo} from "react";
import Table from "../../../components/Table/DataTable";
import {useDispatch, useSelector} from "react-redux";
import PortService from "../../../services/port.service";
import {setCurrentDevice} from "../../../reducers/inventory.reducer";

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

    const {ports} = useSelector((state) => state.portReducer);
    const {currentDevice} = useSelector((state) => state.inventoryReducer);

    useEffect(() => {
        if (devices.length > 0 && (currentDevice === "" || currentDevice === devices[0].label)) {
            PortService.fetchPortByDevice(dispatch, devices[0].label).then();
            dispatch(setCurrentDevice(devices[0].label));
        }
    }, []);

    return (
        <Table columns={columns} data={ports} tableName={"Port"}/>
    );
};
