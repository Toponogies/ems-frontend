import { VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import Table from '../../components/DataTable';
import Toolbar from './Toolbar';

export default () => {
    const columns = useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Username', accessor: 'username' },
            { Header: 'Password', accessor: 'password' },
        ],
        []
    );

    const data = [
    ];

    return (
        <VStack spacing="8px">
            <Toolbar />
            <Table columns={columns} data={data} />
        </VStack>
    );
};
