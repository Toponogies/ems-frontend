import {Select} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {fetchPortByDevice} from "../../actions/port.action";

export default (props) => {
    const {devices} = props;
    const dispatch = useDispatch();

    return (
        <Select
            onChange={(option) => {
                fetchPortByDevice(dispatch, option.target.value).then();
            }}
        >
            {devices.map((d) => {
                return (
                    <option key={d.label} value={d.label}>{d.label}</option>
                );
            })}
        </Select>);
};
