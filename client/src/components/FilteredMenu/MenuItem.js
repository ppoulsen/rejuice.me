import React from 'react';
import Paper from 'material-ui/Paper';
import './MenuItem.css';

export default class MenuItem extends React.Component {
  render() {
    return (
      <Paper zDepth={1}>
        <div className="menu-item">
          <div className="menu-item__name-wrapper">
            <p className="menu-item__name">{this.props.name}</p>
          </div>
          <p className="menu-item__description">{this.props.description}</p>
        </div>
      </Paper>
    );
  }
}
