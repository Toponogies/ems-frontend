import {Select} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import PortService from "../../services/port.service";
import InterfaceService from "../../services/interface.service";

export default (props) => {
    const {devices} = props;
    const dispatch = useDispatch();

    return (
        <Select
            onChange={(option) => {
                PortService.fetchPortByDevice(dispatch, option.target.value).then();
                InterfaceService.fetchInterfaceByDevice(dispatch, option.target.value).then();
            }}
        >
            {devices.map((d) => {
                return (
                    <option key={d.label} value={d.label}>{d.label}</option>
                );
            })}
        </Select>);
};
