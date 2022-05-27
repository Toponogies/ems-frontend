import {VStack} from '@chakra-ui/react';
import {useMemo} from 'react';
import Table from '../../components/DataTable';
import Toolbar from './Toolbar';
import DeviceDropDown from "./DeviceDropDown";
import InventoryDrawer from "./Drawer/InventoryDrawer";

export default () => {
    const columns = useMemo(
        () => [
            {Header: 'ID', accessor: 'id'},
            {Header: 'Label', accessor: 'label'},
            {Header: 'Credential', accessor: 'credential'},
            {Header: 'Port', accessor: 'port'},
            {Header: 'IP Address', accessor: 'ip'},
        ],
        []
    );

    const data = [];

    return (
        <VStack spacing="8px">
            <InventoryDrawer/>
            <DeviceDropDown/>
            <Toolbar/>
            <Table columns={columns} data={data}/>
        </VStack>
    );
};
