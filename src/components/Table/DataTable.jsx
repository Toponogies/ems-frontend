import {
    chakra,
    Flex,
    IconButton,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tooltip,
    Tr
} from "@chakra-ui/react";
import {forwardRef, useEffect, useRef} from "react";
import {usePagination, useRowSelect, useSortBy, useTable} from "react-table";
import {useDispatch, useSelector} from "react-redux";
import {changeActiveCredentials} from "../../reducers/credential.reducer";
import {changeActiveDevices} from "../../reducers/device.reducer";
import {changeActiveInterfaces} from "../../reducers/interface.reducer";
import {FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaChevronLeft, FaChevronRight} from "react-icons/all";

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
        prepareRow,
        selectedFlatRows,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize}
    } = useTable(
        {
            columns,
            data
        },
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            if (tableName === "Port" || tableName === "Alarm") return;
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
        // case "Alarm":
        //     const {activeAlarms} = useSelector((state) => state.alarmReducer);
        //     if (activeAlarms.length !== selectedFlatRows.length) {
        //         dispatch(changeActiveInterfaces(selectedFlatRows.map((row) => row.original)));
        //     }
        //     break;

    }

    return (
        <>
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <Flex>
                                        {column.render("Header")}
                                        <chakra.span pl="4">
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <FaArrowDown aria-label="sorted descending"/>
                                                ) : (
                                                    <FaArrowUp aria-label="sorted ascending"/>
                                                )
                                            ) : null}
                                        </chakra.span>
                                    </Flex>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
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
            <Flex justifyContent="space-between" m={4} alignItems="center">
                <Flex mr={4}>
                    <Tooltip label="First Page">
                        <IconButton
                            onClick={() => gotoPage(0)}
                            isDisabled={!canPreviousPage}
                            icon={<FaArrowLeft h={3} w={3}/>}
                            mr={4}
                            aria-label={"First page"}/>
                    </Tooltip>
                    <Tooltip label="Previous Page">
                        <IconButton
                            onClick={previousPage}
                            isDisabled={!canPreviousPage}
                            icon={<FaChevronLeft h={6} w={6}/>}
                            aria-label={"Previous page"}/>
                    </Tooltip>
                </Flex>

                <Flex alignItems="center">
                    <Text flexShrink="0" mr={8}>
                        Page{" "}
                        <Text fontWeight="bold" as="span">
                            {pageIndex + 1}
                        </Text>{" "}
                        of{" "}
                        <Text fontWeight="bold" as="span">
                            {pageOptions.length}
                        </Text>
                    </Text>
                    <Text flexShrink="0">Go to page:</Text>{" "}
                    <NumberInput
                        ml={2}
                        mr={8}
                        w={28}
                        min={1}
                        max={pageOptions.length}
                        onChange={(value) => {
                            const page = value ? value - 1 : 0;
                            gotoPage(page);
                        }}
                        defaultValue={pageIndex + 1}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                    <Select
                        w={32}
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </Select>
                </Flex>

                <Flex ml={4}>
                    <Tooltip label="Next Page">
                        <IconButton
                            onClick={nextPage}
                            isDisabled={!canNextPage}
                            icon={<FaChevronRight h={6} w={6}/>}
                            aria-label={"Next page"}/>
                    </Tooltip>
                    <Tooltip label="Last Page">
                        <IconButton
                            onClick={() => gotoPage(pageCount - 1)}
                            isDisabled={!canNextPage}
                            icon={<FaArrowRight h={3} w={3}/>}
                            ml={4}
                            aria-label={"Last page"}/>
                    </Tooltip>
                </Flex>
            </Flex>
        </>
    );
}