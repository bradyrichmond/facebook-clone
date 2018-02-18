//package imports
import React, { Component } from 'react';

//app imports
import HomeLink from './HomeLink';
import Searchbar from './Searchbar';
import Navigation from './Navigation';

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="facebook-header">
                <HomeLink />
                <Searchbar />
                <Navigation />
            </div>
        );
    }
}