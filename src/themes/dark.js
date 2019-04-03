/**
 * Created by jamesashton on 03/04/2019.
 */
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';


export default createMuiTheme({
    palette: {
        type:'dark',
        background: {
        paper: "#111",
        default: "#000000"
        },
        primary: pink,
        secondary: indigo // Indigo is probably a good match with pink
    },
    typography: { useNextVariants: true },
});
