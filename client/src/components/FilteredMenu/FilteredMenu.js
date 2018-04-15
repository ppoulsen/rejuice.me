import React from 'react';
import FlipMove from 'react-flip-move';
import MenuItem from './MenuItem';

const style = {
  width: '80%',
  postion: 'relative',
};

export default class FilteredMenu extends React.Component {
  renderMenuItems() {
    const smoothieSections = this.props.sections.filter(s => s.name.includes('Smoothie'));
    const filteredEntities = this.props.filteredEntities
      .map(id => this.props.entities.find(e => e.id === id))
      .filter(e => !!smoothieSections.find(s => s.id === e.sectionId))
      .filter(e => !!e);
    return filteredEntities.map(e => <MenuItem {...e} key={e.id} />);
  }
  render() {
    return (
      <div style={style}>
        <FlipMove
          duration={500}
          enterAnimation="elevator"
          leaveAnimation="fade"
          staggerDurationBy={30}
        >
          {this.renderMenuItems()}
        </FlipMove>
      </div>
    );
  }
};
