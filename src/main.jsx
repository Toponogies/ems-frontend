import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/Main";
import store from "./reducers/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);

