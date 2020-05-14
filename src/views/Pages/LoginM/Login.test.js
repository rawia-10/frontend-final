import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginM from './LoginM';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginM/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
