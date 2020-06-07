import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Rdv from './Rdv';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Rdv/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
