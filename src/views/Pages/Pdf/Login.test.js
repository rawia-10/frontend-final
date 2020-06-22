import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Pdf from './Pdf';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Pdf/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
