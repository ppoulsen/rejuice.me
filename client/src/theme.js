import { lightGreen700, deepPurple700, redA200 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiJuiceTheme = getMuiTheme({
  palette: {
    primary1Color: lightGreen700,
    primary2Color: deepPurple700,
    accent1Color: redA200,
  },
});

export default muiJuiceTheme;
