import {Select} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import PortService from "../../services/port.service";
import InterfaceService from "../../services/interface.service";
import {setCurrentDevice} from "../../reducers/inventory.reducer";

export default (props) => {
    const {devices} = props;
    const dispatch = useDispatch();

    return (
        <Select
            onChange={(option) => {
                PortService.fetchPortByDevice(dispatch, option.target.value).then();
                InterfaceService.fetchInterfaceByDevice(dispatch, option.target.value).then();
                dispatch(setCurrentDevice(option.target.value));
            }}
        >
            {devices.map((d) => {
                return (
                    <option key={d.label} value={d.label}>{d.label}</option>
                );
            })}
        </Select>);
};
