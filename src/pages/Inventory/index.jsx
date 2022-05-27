import {VStack} from '@chakra-ui/react';
import DeviceDropDown from "./DeviceDropDown";
import InventoryDrawer from "../../components/Drawer/InventoryDrawer";
import {useSelector} from "react-redux";
import Interface from "./Interface";
import Port from "./Port";

export default () => {
    const {page} = useSelector((state) => state.inventoryPageSetter)

    const Page = () => {
        if (page === "Port") return <Port/>
        else if (page === "Interface") return <Interface/>
    }

    return (
        <VStack spacing="20px">
            <InventoryDrawer page={page}/>
            <DeviceDropDown/>
            <Page/>
        </VStack>
    );
};
