import { Container } from 'unstated';
import initialMenuData from '../data/menu.json';

export default class MenuContainer extends Container {
  state = initialMenuData;
}
