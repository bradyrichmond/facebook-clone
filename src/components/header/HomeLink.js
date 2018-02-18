import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import spritesheet from '../../images/facebook_header_spritesheet.png';

const Wrapper = styled.div`
        background: url(${spritesheet}) no-repeat;
        background-size: 26px 1029px;
        background-position: 0 -213px;
        display: block;
        outline: none;
        overflow: hidden;
        whitespace: nowrap;
        text-indent: -999px;
        width: 24px;
        height: 24px;
    `

export default class HomeLink extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Wrapper id='bluebar_logo'>
                <Link to='/'>
                    <span>Facebook</span>
                </Link>
            </Wrapper>
        );
    }
}