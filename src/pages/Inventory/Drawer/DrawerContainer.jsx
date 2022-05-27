import {Flex, useRadioGroup} from "@chakra-ui/react";
import DrawerCard from "./DrawerCard"

export default () => {
    const options = ['Port', 'Interface']

    const {getRootProps, getRadioProps} = useRadioGroup({
        name: 'Type', defaultValue: 'Port', onChange: console.log,
    })

    const group = getRootProps()

    return (<Flex direction={"column"} gap={'3'} {...group}>
        {options.map((value) => {
            const radio = getRadioProps({value})
            return (<>
                <DrawerCard key={value} {...radio}>
                    {value}
                </DrawerCard>
            </>)
        })}
    </Flex>)
};
