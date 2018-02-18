import React, { component } from 'react';
import { shallow, render } from 'enzyme';
import ReactDOM from 'react-dom';
import Header from '../header/Header';
import HomeLinkImage from '../header/HomeLinkImage'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Header tests', () => {
    let wrapper = render(<Header />);

    // Render tests
    {
        it('renders a home link', () => {
            expect(wrapper.find('#bluebar_logo').length).toBe(1);
        })

        it('renders a search bar', () => {
            expect(wrapper.find('#searchbar').length).toBe(1);
        })

        it('renders standard nav', () => {
            expect(wrapper.find('#navigation').length).toBe(1);
        })
    }

})
