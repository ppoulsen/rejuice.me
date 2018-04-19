import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import SearchField from './SearchField';
import FilteredMenu from './FilteredMenu';
import Disclaimer from './Disclaimer';
import './App.css';

const legalButtonStyle = {
  color: 'white',
};

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      legalVisible: false,
    };
  }

  onLegalClick = () => {
    this.setState({
      legalVisible: !this.state.legalVisible,
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="Re:Juice Me"
          iconElementLeft={<FlatButton style={legalButtonStyle} label="Legal" onClick={this.onLegalClick} />}
          iconElementRight={
            <IconButton
              target="_blank"
              href="https://github.com/ppoulsen/rejuice.me"
              iconClassName="fab fa-github"
            />
          }
        />
        <SearchField />
        <FilteredMenu />
        <Disclaimer isVisible={this.state.legalVisible} />
      </div>
    );
  }
}

export default App;
