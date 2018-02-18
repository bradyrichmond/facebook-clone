import React, { component } from 'react';
import { shallow, render } from 'enzyme';
import ReactDOM from 'react-dom';
import HomeLink from '../header/HomeLink';
import { Link, MemoryRouter } from 'react-router-dom'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><HomeLink /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('HomeLink render tests', () => {
    let wrapper = render(<MemoryRouter><HomeLink /></MemoryRouter>)
    it('renders one Link', () => {
        expect(wrapper.find('a').length).toBe(1);
    })
})