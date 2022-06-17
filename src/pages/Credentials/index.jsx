import {VStack} from "@chakra-ui/react";
import {useEffect, useMemo} from "react";
import Table from "../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import CredentialService from "../../services/credential.service";

export default () => {
    const dispatch = useDispatch();

    const columns = useMemo(
        () => [
            {Header: "ID", accessor: "id"},
            {Header: "Name", accessor: "name"},
            {Header: "Username", accessor: "username"},
            {Header: "Related Devices", accessor: "devices"}
        ],
        []
    );

    useEffect(() => {
        CredentialService.fetchAll(dispatch).then();
    }, []);

    const {credentials} = useSelector((state) => state.credentialReducer);

    return (
        <VStack spacing="20px">
            <Toolbar/>
            <Table columns={columns} data={credentials} tableName={"Credential"}/>
        </VStack>
    );
};
