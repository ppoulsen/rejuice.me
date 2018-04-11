import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import FilteredMenu from './FilteredMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="Re:Juice Me"
          iconElementLeft={<span />}
          iconElementRight={
            <IconButton
              target="_blank"
              href="https://github.com/ppoulsen/rejuice.me"
              iconClassName="fab fa-github"
            />
          }
        />
        <TextField style={{width: '80%'}} hintText="Search" />
        <FilteredMenu />
      </div>
    );
  }
}

export default App;
