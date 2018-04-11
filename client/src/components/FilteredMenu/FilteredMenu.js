import React from 'react';
import FlipMove from 'react-flip-move';
import MenuItem from './MenuItem';

const style = {
  width: '80%',
  postion: 'relative',
};

export default class FilteredMenu extends React.Component {
  renderMenuItems() {
    return this.props.entities.map(e => <MenuItem {...e} key={e.id} />);
  }
  render() {
    return (
      <div style={style}>
        <FlipMove
          duration={700}
          easing="cubic-bezier(0.25,0.1,0.25,1.0)"
          enterAnimation="elevator"
          leaveAnimation="elevator"
          staggerDurationBy={15}
          staggerDelayBy={20}
        >
          {this.renderMenuItems()}
        </FlipMove>
      </div>
    );
  }
};
