import {VStack} from "@chakra-ui/react";
import DropDown from "./DropDown";
import InventoryDrawer from "../../components/Drawer/InventoryDrawer";
import {useSelector} from "react-redux";
import Interface from "./Interface";
import Port from "./Port";

export default () => {
    const {page} = useSelector((state) => state.inventoryReducer);

    const Page = () => {
        switch (page) {
            case "Port":
                return <Port/>;
            case "Interface":
                return <Interface/>;
            // TODO: Not found page
        }
    };

    const data = [];

    return (
        <VStack spacing="20px">
            <InventoryDrawer page={page}/>
            <DropDown data={data}/>
            <Page/>
        </VStack>
    );
};
