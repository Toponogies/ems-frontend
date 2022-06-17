import {VStack} from "@chakra-ui/react";
import {useEffect, useMemo} from "react";
import Table from "../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import DeviceService from "../../services/device.service";

export default () => {
    const dispatch = useDispatch();

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

    useEffect(() => {
        DeviceService.fetchAll(dispatch).then();
    }, []);

    const {devices} = useSelector((state) => state.deviceReducer);

    return (
        <VStack spacing="20px">
            <Toolbar/>
            <Table columns={columns} data={devices} tableName={"Device"}/>
        </VStack>
    );
};
