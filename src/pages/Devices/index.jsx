import {Divider, HStack, VStack} from "@chakra-ui/react";
import {useContext, useEffect, useMemo} from "react";
import Table from "../../components/Table/DataTable";
import Toolbar from "./Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import DeviceService from "../../services/device.service";
import SocketContext from "../../socket/context";
import PieChart from "../../components/Chart/PieChart";

export default () => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);

    const columns = useMemo(
        () => [
            {Header: "ID", accessor: "id"},
            {Header: "Label", accessor: "label"},
            {Header: "Credential", accessor: "credential"},
            {Header: "Port", accessor: "sshPort"},
            {Header: "IP Address", accessor: "ipAddress"},
            {Header: "Resync Status", accessor: "resyncStatus"}
        ],
        []
    );

    const handleResyncDone = async (device) => {
        await DeviceService.fetchByLabel(dispatch, device);
    };

    const calculateTypeChart = (devices) => {
        let result = [];
        devices.forEach(function(a) {
            if (!this[a.deviceType]) {
                this[a.deviceType] = {
                    type: a.deviceType,
                    count: 0
                };
                result.push(this[a.deviceType]);
            }
            this[a.deviceType].count++;
        }, Object.create(null));
        let r
        for (r of result) {
            if (r.type === null)
                r.type = "Unknown type"
        }
        return result
    };

    const calculateStateChart = (devices) => {
        let result = [];
        devices.forEach(function(a) {
            if (!this[a.state]) {
                this[a.state] = {
                    type: a.state,
                    count: 0
                };
                result.push(this[a.state]);
            }
            this[a.state].count++;
        }, Object.create(null));
        return result
    };

    const calculateFirmwareChart = (devices) => {
        let result = [];
        devices.forEach(function(a) {
            if (!this[a.firmware]) {
                this[a.firmware] = {
                    type: a.firmware,
                    count: 0
                };
                result.push(this[a.firmware]);
            }
            this[a.firmware].count++;
        }, Object.create(null));
        return result
    };



    useEffect(() => {
        DeviceService.fetchAll(dispatch).then();

        let s = socket.subscribe("/topic/resync-done", async (msg) => {
            if (msg.body) {
                const jsonBody = JSON.parse(msg.body);
                if (jsonBody.device) {
                    await handleResyncDone(jsonBody.device);
                }
            }
        });

        return () => {
            socket.unsubscribe(s.id);
        };
    }, []);

    const {devices} = useSelector((state) => state.deviceReducer);
    let typeChartData = calculateTypeChart(devices);
    let stateChartData = calculateStateChart(devices);
    let firmwareChartData = calculateFirmwareChart(devices);

    return (
        <VStack spacing="20px">
            <Toolbar/>
            <Table columns={columns} data={devices} tableName={"Device"}/>
            <Divider />
            <HStack spacing={40}>
                <PieChart series={typeChartData.map(a => a.count)}
                          options={{
                              labels: typeChartData.map(a => a.type),
                              legend: {
                                  show: false
                              },
                              title: {
                                  text: "Device Type"
                              }
                        }}/>
                <PieChart series={firmwareChartData.map(a => a.count)}
                          options={{
                              labels: firmwareChartData.map(a => a.type),
                              legend: {
                                  show: false
                              },
                              title: {
                                  text: "Firmware"
                              }
                          }}/>
                <PieChart series={stateChartData.map(a => a.count)}
                          options={{
                              labels: stateChartData.map(a => a.type),
                              legend: {
                                  show: false
                              },
                              title: {
                                  text: "State"
                              }
                }}/>
            </HStack>
        </VStack>
    );
};
