import React from 'react';
import { Subscribe } from 'unstated';
import TextField from 'material-ui/TextField';
import MenuContainer from '../../containers/MenuContainer';

const to = [MenuContainer];

const onChangeMap = new Map();
const getMemoizedOnChange = onQueryChange => {
  const existing = onChangeMap.get(onQueryChange);
  if (existing) return existing;
  const newOnChange = (event, query) => onQueryChange(query);
  onChangeMap.set(onQueryChange, newOnChange);
  return newOnChange;
};

const mapActionToProps = (menu) => {
  return {
    onChange: getMemoizedOnChange(menu.onQueryChange),
  };
};

const SearchField = () => (
  <Subscribe to={to}>
    {menu => <TextField style={{width: '80%'}} hintText="Search" {...mapActionToProps(menu)} />}
  </Subscribe>
);

export default SearchField;
