import React from 'react';
import { Subscribe } from 'unstated';
import MenuContainer from '../../containers/MenuContainer';
import FilteredMenu from './FilteredMenu';

function mapStateToProps(menu) {
  const { state } = menu;
  return state;
}

const to = [MenuContainer];
const FilteredMenuWrapper = (ownProps) => (
  <Subscribe to={to}>
    {menu => <FilteredMenu {...mapStateToProps(menu)} {...ownProps} /> }
  </Subscribe>
);

export default FilteredMenuWrapper;
