//package imports
import React, { Component } from 'react';

//app imports
import HomeImageLink from './HomeLinkImage';
import Searchbar from './Searchbar';
import Navigation from './Navigation';

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="facebook-header">
                <HomeImageLink />
                <Searchbar />
                <Navigation />
            </div>
        );
    }
}