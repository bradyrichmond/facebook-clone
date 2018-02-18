import React, { component } from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Searchbar from '../header/Searchbar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Searchbar />, div);
    ReactDOM.unmountComponentAtNode(div);
});