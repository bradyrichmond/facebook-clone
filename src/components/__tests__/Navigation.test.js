import React, { component } from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Navigation from '../header/Navigation';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
});