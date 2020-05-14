import React from 'react';
import ReactDOM from 'react-dom';
import LoginAdmin from './LoginAdmin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginAdmin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
