import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginS from './LoginS';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginS/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
