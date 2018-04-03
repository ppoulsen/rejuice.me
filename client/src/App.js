import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import muiJuiceTheme from './theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiJuiceTheme}>
        <div className="App">
          <AppBar title="Re:Juice Me"
            iconElementLeft={<span />}
            iconElementRight={<IconButton target="_blank" href="https://github.com/ppoulsen" iconClassName="fab fa-github"/>} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
