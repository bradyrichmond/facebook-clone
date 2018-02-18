import React, { component } from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Header from '../header/Header';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Header tests', () => {
    let wrapper = shallow(<Header />)

    // Render tests
    {
        it('renders a home link', () => {

        })

        it('renders a search bar', () => {

        })

        it('renders a gravicon', () => {

        })

        it('renders a user name', () => {

        })

        it('renders standard nav', () => {

        })

        it('renders assistance', () => {

        })

        it('renders menu', () => {
            
        })
    }

})
