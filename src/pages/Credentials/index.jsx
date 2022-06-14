import {VStack} from "@chakra-ui/react";
import {useEffect, useMemo} from "react";
import Table from "../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll} from "../../actions/credential.action";

export default () => {
    const dispatch = useDispatch();

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

    useEffect(() => {
        fetchAll(dispatch).then()
    }, []);

    const {credentials} = useSelector((state) => state.credentialReducer);

    return (
        <VStack spacing="20px">
            <Toolbar/>
            <Table columns={columns} data={credentials} tableName={"Credential"}/>
        </VStack>
    );
};
