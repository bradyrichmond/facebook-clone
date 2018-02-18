import React, { component } from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import HomeLinkImage from '../header/HomeLinkImage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeLinkImage />, div);
    ReactDOM.unmountComponentAtNode(div);
});