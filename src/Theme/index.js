import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#FAFAFA',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: '#106e4a'
    },
    secondary: {
      // main: colors.indigo[500],
      main: "#dfe1e6"
    },
    text: {
      default: "#fff",
      primary: "#000",
      secondary: colors.blueGrey[600],
    }
  },
  shadows,
  typography
});

export default theme;
