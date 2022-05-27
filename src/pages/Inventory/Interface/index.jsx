import {useMemo} from 'react';
import Table from '../../../components/Table/DataTable';
import Toolbar from './Toolbar';

export default () => {
    const columns = useMemo(
        () => [
            {Header: 'ID', accessor: 'id'},
            {Header: 'Name', accessor: 'name'},
            {Header: 'State', accessor: 'state'},
            {Header: 'DHCP', accessor: 'dhcp'},
            {Header: 'IP Address', accessor: 'ipAddress'},
            {Header: 'Netmask', accessor: 'netmask'},
            {Header: 'Gateway', accessor: 'gateway'},
            {Header: 'Port', accessor: 'portId'},
        ],
        []
    );

    const data = [];

    return (
        <>
            <Toolbar/>
            <Table columns={columns} data={data}/>
        </>
    );
};
