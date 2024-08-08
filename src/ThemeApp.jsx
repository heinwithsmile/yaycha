import { createContext, useState, useContext } from "react";
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
} from "@mui/material";

import App from "./App";

const theme = createTheme({
    palette: {
        mode: "dark"
    },
});

export const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

export default function ThemeApp() {
    // const [mode, setMode] = useState("dark");
    const [showForm, setShowForm] = useState(false);
    // return (
    //     <AppContext.Provider value={{mode, setMode}}>
    //         <App />
    //     </AppContext.Provider>
    // )
    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{showForm, setShowForm}}>
                <App />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    )
}