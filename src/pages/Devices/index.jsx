import {VStack} from '@chakra-ui/react';
import {useMemo} from 'react';
import Table from '../../components/Table/DataTable';
import Toolbar from './Toolbar';

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
        <VStack spacing="20px">
            <Toolbar/>
            <Table columns={columns} data={data}/>
        </VStack>
    );
};
