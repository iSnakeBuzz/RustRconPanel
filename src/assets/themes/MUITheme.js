import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#23272a"
        }
    },

    overrides: {
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: "#fff",
            },
        },
        MuiFormLabel: {
            root: {
                color: "#fff"
            }
        },

        MuiInputBase: {
            root: {
                color: "#fff"
            }
        },

        MuiTab: {
            root: {
                minWidth: "100px",
                '@media (min-width: 0px)': {
                    minWidth: "100px"
                }
            }
        }
    }
});

export default theme;