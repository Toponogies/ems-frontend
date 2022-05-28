import {Select} from "@chakra-ui/react";

export default (props) => {
    const {data} = props;

    return (
        <Select>
            {data.map((value) => {
                return (
                    <option value={value.id}>{value.label}</option>
                )
            })}
        </Select>);
};
