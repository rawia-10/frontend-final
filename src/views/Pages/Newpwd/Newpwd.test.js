import React from 'react';
import ReactDOM from 'react-dom';
import Newpwd from './Newpwd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Newpwd />, div);
  ReactDOM.unmountComponentAtNode(div);
});
