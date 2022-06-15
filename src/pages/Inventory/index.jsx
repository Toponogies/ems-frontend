import {VStack} from "@chakra-ui/react";
import DropDown from "./DropDown";
import InventoryDrawer from "../../components/Drawer/InventoryDrawer";
import {useDispatch, useSelector} from "react-redux";
import Interface from "./Interface";
import Port from "./Port";
import {useEffect} from "@types/react";
import {fetchPortByDevice} from "../../actions/port.action";
import {fetchInterfaceByDevice} from "../../actions/interface.action";

export default () => {
    const dispatch = useDispatch();
    const {page} = useSelector((state) => state.inventoryReducer);
    const {devices} = useSelector((state) => state.deviceReducer);

    const Page = () => {
        switch (page) {
            case "Port":
                return <Port/>;
            case "Interface":
                return <Interface/>;
            // TODO: Not found page
        }
    };

    useEffect(() => {
        if (devices.length > 0)
            fetchPortByDevice(dispatch, devices[0].label).then();
            fetchInterfaceByDevice(dispatch, devices[0].label).then();
    }, []);

    return (
        <VStack spacing="20px">
            <InventoryDrawer page={page}/>
            <DropDown devices={devices}/>
            <Page/>
        </VStack>
    );
};
