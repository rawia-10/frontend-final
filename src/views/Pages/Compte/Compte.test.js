import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import { MemoryRouter } from './node_modules/react-router-dom';
import Compte from './Compte';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Compte/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
