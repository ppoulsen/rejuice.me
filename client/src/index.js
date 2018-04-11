import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import muiJuiceTheme from './theme';

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiJuiceTheme}>
    <Provider>
      <App />
    </Provider>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
