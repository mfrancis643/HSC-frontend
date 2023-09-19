import {createTheme} from "@mui/material"

export const themeOptions = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3571FD',
        },
        secondary: {
            main: '#c22323',
        },
    },
    typography: {

        button: { // Here is where you can customise the button
            fontSize: 16,
            fontWeight: 600,
        },
    }
});
