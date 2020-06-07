import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import patient from './patient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><patient/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
