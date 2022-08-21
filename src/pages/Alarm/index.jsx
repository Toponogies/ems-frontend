import {Divider, HStack, VStack} from "@chakra-ui/react";
import {useEffect, useMemo} from "react";
import Table from "../../components/Table/DataTable";
import {useDispatch, useSelector} from "react-redux";
import AlarmService from "../../services/alarm.service";
import DropDown from "../Inventory/DropDown";
import {setCurrentDevice} from "../../reducers/inventory.reducer";
import PieChart from "../../components/Chart/PieChart";

export default () => {
    const dispatch = useDispatch();
    const {devices} = useSelector((state) => state.deviceReducer);

    const columns = useMemo(
        () => [
            {Header: "Number", accessor: "alarmNumber"},
            {Header: "Date", accessor: "date"},
            {Header: "Severity", accessor: "severity"},
            {Header: "Condition", accessor: "condition"},
            {Header: "Description", accessor: "description"},
        ],
        []
    );

    const {alarms} = useSelector((state) => state.alarmReducer);
    const {currentDevice} = useSelector((state) => state.inventoryReducer);

    const calculateSeverityChart = (alarms) => {
        let result = [];
        alarms.forEach(function(a) {
            if (!this[a.severity]) {
                this[a.severity] = {
                    type: a.severity,
                    count: 0
                };
                result.push(this[a.severity]);
            }
            this[a.severity].count++;
        }, Object.create(null));
        let r
        for (r of result) {
            if (r.type === null)
                r.type = "Unknown severity"
        }
        return result
    };

    const calculateConditionChart = (alarms) => {
        let result = [];
        alarms.forEach(function(a) {
            if (!this[a.condition]) {
                this[a.condition] = {
                    type: a.condition,
                    count: 0
                };
                result.push(this[a.condition]);
            }
            this[a.condition].count++;
        }, Object.create(null));
        let r
        for (r of result) {
            if (r.type === null)
                r.type = "Unknown condition"
        }
        return result
    };


    useEffect(() => {
        if (devices.length > 0 && (currentDevice === "" || currentDevice === devices[0].label)) {
            AlarmService.fetchAlarmByDevice(dispatch, devices[0].label).then();
            dispatch(setCurrentDevice(devices[0].label));
        }

    }, [devices]);

    let severityChartData = calculateSeverityChart(alarms);
    let conditionChartData = calculateConditionChart(alarms);

    return (
        <VStack spacing="20px">
            <DropDown devices={devices}/>
            <Table columns={columns} data={alarms} tableName={"Alarm"}/>
            <Divider />
            <HStack spacing={40}>
                <PieChart series={severityChartData.map(a => a.count)}
                          options={{
                              labels: severityChartData.map(a => a.type),
                              legend: {
                                  show: false
                              },
                              title: {
                                  text: "Severity"
                              }
                          }}/>
                <PieChart series={conditionChartData.map(a => a.count)}
                          options={{
                              labels: conditionChartData.map(a => a.type),
                              legend: {
                                  show: false
                              },
                              title: {
                                  text: "Condition type"
                              }
                          }}/>
            </HStack>

        </VStack>
    );
};
