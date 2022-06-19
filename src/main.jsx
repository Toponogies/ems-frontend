import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/Main";
import store from "./reducers/store";
import AuthService from "./services/auth.service";
import {SocketContext, getSocket} from "./context/socket";

const createApp = () => ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    //     <Provider store={store}>
    //         <ChakraProvider>
    //             <App/>
    //         </ChakraProvider>
    //     </Provider>
    // </React.StrictMode>

    <Provider store={store}>
        <ChakraProvider>
            <SocketContext.Provider value={getSocket}>
                <App/>
            </SocketContext.Provider>
        </ChakraProvider>
    </Provider>
);

AuthService.init(createApp);
