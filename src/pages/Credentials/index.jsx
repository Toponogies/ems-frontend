import {VStack} from "@chakra-ui/react";
import {useMemo} from "react";
import Table from "../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";

export default () => {
    const columns = useMemo(
        () => [
            {Header: "ID", accessor: "id"},
            {Header: "Name", accessor: "name"},
            {Header: "Username", accessor: "username"},
            {Header: "Password", accessor: "password"},
            {Header: "Related Devices", accessor: "devices"}
        ],
        []
    );

    const data = [];

    return (
        <VStack spacing="20px">
            <Toolbar/>
            <Table columns={columns} data={data}/>
        </VStack>
    );
};
