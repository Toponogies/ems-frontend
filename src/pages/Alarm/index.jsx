import {Divider, Heading, HStack, Spacer, Switch, VStack} from "@chakra-ui/react";
import {useContext, useEffect, useMemo, useState} from "react";
import Table from "../../components/Table/DataTable";
import {useDispatch, useSelector} from "react-redux";
import AlarmService from "../../services/alarm.service";
import DropDown from "../../components/DropDown/DropDown";
import PieChart from "../../components/Chart/PieChart";
import SocketContext from "../../socket/context";
import {addAlarm, increaseNewAlarms} from "../../reducers/alarm.reducer";

export default () => {
    const dispatch = useDispatch();
    const {devices} = useSelector((state) => state.deviceReducer);
    const socket = useContext(SocketContext);

    const columnsSpecific = useMemo(
        () => [
            {Header: "Number", accessor: "alarmNumber"},
            {Header: "Date", accessor: "date"},
            {Header: "Severity", accessor: "severity"},
            {Header: "Condition", accessor: "condition"},
            {Header: "Description", accessor: "description"}
        ],
        []
    );
    const columnsAll = useMemo(
        () => [
            {Header: "Number", accessor: "alarmNumber"},
            {Header: "Managed Entity", accessor: "networkDevice"},
            {Header: "Date", accessor: "date"},
            {Header: "Severity", accessor: "severity"},
            {Header: "Condition", accessor: "condition"},
            {Header: "Description", accessor: "description"}
        ],
        []
    );


    const {alarms} = useSelector((state) => state.alarmReducer);
    const {currentDevice} = useSelector((state) => state.inventoryReducer);
    const [isAll, setIsAll] = useState(true);

    const onChangeSwitch = (event) => {
        setIsAll(event.target.checked);
        if (event.target.checked)
            AlarmService.fetchAlarms(dispatch).then();
        else
            AlarmService.fetchAlarmByDevice(dispatch, currentDevice).then();
    };

    const calculateSeverityChart = (alarms) => {
        let result = [];
        alarms.forEach(function (a) {
            if (!this[a.severity]) {
                this[a.severity] = {
                    type: a.severity,
                    count: 0
                };
                result.push(this[a.severity]);
            }
            this[a.severity].count++;
        }, Object.create(null));
        let r;
        for (r of result) {
            if (r.type === null)
                r.type = "Unknown severity";
        }
        return result;
    };

    const calculateConditionChart = (alarms) => {
        let result = [];
        alarms.forEach(function (a) {
            if (!this[a.condition]) {
                this[a.condition] = {
                    type: a.condition,
                    count: 0
                };
                result.push(this[a.condition]);
            }
            this[a.condition].count++;
        }, Object.create(null));
        let r;
        for (r of result) {
            if (r.type === null)
                r.type = "Unknown condition";
        }
        return result;
    };

    useEffect(() => {
        AlarmService.fetchAlarms(dispatch).then();

        let s = socket.subscribe("/topic/alarm", async (msg) => {
            if (msg.body) {
                const jsonBody = JSON.parse(msg.body);
                if (isAll || (!isAll && jsonBody.networkDevice === currentDevice)) {
                    dispatch(addAlarm(jsonBody));
                    dispatch(increaseNewAlarms());
                }
            }
        });

        return () => {
            socket.unsubscribe(s.id);
        };
    }, []);

    let severityChartData = calculateSeverityChart(alarms);
    let conditionChartData = calculateConditionChart(alarms);

    return (
        <VStack spacing="20px">
            <HStack spacing="8px" width="full">
                <>
                    <Heading size={"md"}>Show all</Heading>
                    <Switch defaultChecked colorScheme={"blue"} onChange={onChangeSwitch}></Switch>
                </>
                <Spacer/>
            </HStack>
            <DropDown visibility={isAll ? "hidden" : "visible"} devices={devices}/>
            <Table columns={isAll ? columnsAll : columnsSpecific} data={alarms} tableName={"Alarm"}/>
            <Divider/>
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
