import {VStack} from "@chakra-ui/react";
import DropDown from "./DropDown";
import InventoryDrawer from "../../components/Drawer/InventoryDrawer";
import {useDispatch, useSelector} from "react-redux";
import Interface from "./Interface";
import Port from "./Port";
import {useEffect} from "react";
import {setCurrentDevice} from "../../reducers/inventory.reducer";

export default () => {
    const {page} = useSelector((state) => state.inventoryReducer);
    const {devices} = useSelector((state) => state.deviceReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (devices.length > 0)
            dispatch(setCurrentDevice(devices[0].label));
    }, []);

    const Page = () => {
        switch (page) {
            case "Port":
                return <Port/>;
            case "Interface":
                return <Interface/>;
            // TODO: Not found page
        }
    };

    return (
        <VStack spacing="20px">
            <InventoryDrawer page={page}/>
            <DropDown devices={devices}/>
            <Page/>
        </VStack>
    );
};
