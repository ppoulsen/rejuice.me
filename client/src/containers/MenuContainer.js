import { Container } from 'unstated';
import Fuse from 'fuse.js';
import initialMenuData from '../data/menu.json';
import debounce from '../utils/debounce';

const initialState = {
  sections: initialMenuData.sections,
  entities: initialMenuData.entities,
  filteredEntities: initialMenuData.entities.map(e => e.id),
};

export default class MenuContainer extends Container {
  fuse = new Fuse(initialMenuData.entities, {
    keys: ['name', 'description'],
    id: 'id',
    threshold: 0.4,
    tokenize: true,
  });
  state = initialState;
  onQueryChange = debounce(query => {
    this.setState({ query });
    if (!query || !query.length) {
      this.setState({filteredEntities: initialMenuData.entities.map(e => e.id)});
      return;
    }

    this.setState({filteredEntities: this.fuse.search(query)});
  }, 400);
}
