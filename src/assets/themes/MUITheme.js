import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#b4b4b4"
        }
    },

    overrides: {
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: "#fff",
            },
            
            "&:hover": {
                borderColor: "#b4b4b4"
            }
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
        }
    }
});

export default theme;