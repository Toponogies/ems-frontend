import {Flex, useRadioGroup} from "@chakra-ui/react";
import DrawerCard from "./DrawerCard";
import {useDispatch} from "react-redux";
import {setTo} from "../../reducers/inventoryPageSetter";

export default (props) => {
    const options = ["Port", "Interface"];
    const dispatch = useDispatch();
    const {page} = props;

    const handleChange = (value) => {
        dispatch(setTo(value));
    };

    const {getRootProps, getRadioProps} = useRadioGroup({
        name: "Type", defaultValue: page, onChange: handleChange
    });

    const group = getRootProps();

    return (
        <Flex direction={"column"} gap={"3"} {...group}>
            {options.map((value) => {
                const radio = getRadioProps({value});
                return (
                    <DrawerCard key={value} {...radio}>
                        {value}
                    </DrawerCard>
                );
            })}
        </Flex>
    );
};
