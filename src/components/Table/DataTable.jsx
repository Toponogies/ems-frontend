import {Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {forwardRef, useEffect, useRef} from "react";
import {useRowSelect, useTable} from "react-table";
import {useDispatch, useSelector} from "react-redux";
import {changeActiveCredentials} from "../../reducers/credential.reducer";
import {changeActiveDevices} from "../../reducers/device.reducer";
import {changeActiveInterfaces} from "../../reducers/interface.reducer";

const IndeterminateCheckbox = forwardRef(({indeterminate, ...rest}, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return (
        <>
            <input type={"checkbox"} ref={resolvedRef} {...rest} />
        </>
    );
});

export default ({columns, data, tableName}) => {
    const dispatch = useDispatch();

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows
    } = useTable(
        {
            columns,
            data
        },
        useRowSelect,
        (hooks) => {
            if (tableName === "Port") return;
            hooks.visibleColumns.push((columns) => [
                // Let's make a column for selection
                {
                    id: "selection",
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <div>
                            <IndeterminateCheckbox
                                {...getToggleAllRowsSelectedProps()}
                            />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({row}) => (
                        <div>
                            <IndeterminateCheckbox
                                {...row.getToggleRowSelectedProps()}
                            />
                        </div>
                    )
                },
                ...columns
            ]);
        }
    );

    switch (tableName) {
        case "Credential":
            const {activeCredentials} = useSelector((state) => state.credentialReducer);
            if (activeCredentials.length !== selectedFlatRows.length) {
                dispatch(changeActiveCredentials(selectedFlatRows.map((row) => row.original)));
            }
            break;
        case "Device":
            const {activeDevices} = useSelector((state) => state.deviceReducer);
            if (activeDevices.length !== selectedFlatRows.length) {
                dispatch(changeActiveDevices(selectedFlatRows.map((row) => row.original)));
            }
            break;
        case "Interface":
            const {activeInterfaces} = useSelector((state) => state.interfaceReducer);
            if (activeInterfaces.length !== selectedFlatRows.length) {
                dispatch(changeActiveInterfaces(selectedFlatRows.map((row) => row.original)));
            }
            break;
    }

    return (
        <>
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <Td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </>
    );
}