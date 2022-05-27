import {useMemo} from 'react';
import Table from '../../../components/Table/DataTable';

export default () => {
    const columns = useMemo(
        () => [
            {Header: 'ID', accessor: 'id'},
            {Header: 'Name', accessor: 'name'},
            {Header: 'Connector', accessor: 'connector'},
            {Header: 'MAC Address', accessor: 'macAddress'},
            {Header: 'IP Address', accessor: 'ipAddress'},
            {Header: 'State', accessor: 'state'},
            {Header: 'Related Interfaces', accessor: 'interfaces'},
        ],
        []
    );

    const data = [];

    return (
            <Table columns={columns} data={data}/>
    );
};
