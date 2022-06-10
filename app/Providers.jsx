import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// moralis
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis/react-native";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./navigation/navigationTheme";
import { navigationRef } from "./navigation/rootNavigation";
// storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// redux
import { store } from "./store/store";
import { Provider as ReduxProvider } from "react-redux";
// env
import {
    REACT_APP_MORALIS_APPLICATION_ID,
    REACT_APP_MORALIS_SERVER_URL,
} from "@env";
//import Qrcode from "./Qrcode";
// toast
import Toast from "react-native-toast-message";

/**r
 * Initialization of Moralis
 */
const appId = REACT_APP_MORALIS_APPLICATION_ID;
const serverUrl = REACT_APP_MORALIS_SERVER_URL;
const environment = "native";

// Initialize Moralis with AsyncStorage to support react-native storage
Moralis.setAsyncStorage(AsyncStorage);
const getMoralis = () => Moralis;

// @ts-ignore
// console.log(AsyncStorage.getAllKeys(), 'KEYS');

export default Providers = ({ children }) => {
    return (
        <MoralisProvider
            appId={appId}
            serverUrl={serverUrl}
            environment={environment}
            getMoralis={getMoralis}
        >
            <ReduxProvider store={store}>
                <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        {children}
                        <Toast />
                        {/* <Toast config={toastConfig} position="bottom" bottomOffset={80} /> */}
                    </GestureHandlerRootView>
                </NavigationContainer>
            </ReduxProvider>
        </MoralisProvider>
    );
};
