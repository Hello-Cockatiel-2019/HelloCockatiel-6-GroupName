import React, { Component } from "react";
import {css } from 'styled-components'
import Homebutton from '../Buttons/Homebutton';
import styled from 'styled-components'
const boximg = css `
background:url("/static/images/B01.jpg") repeat;
background-size:contain;
`
const Nameweb = styled.div`
    padding-top:1em;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1) rotate(-8deg);

`
export default class Home extends Component {
    render() {
        return (
            <a id="top">
            <div className="page1">
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Homebutton/> 
                        </div>
                        <div className="col">
                            <Nameweb><img src="/static/images/Asset 2.png" width="120%" height="120%"/></Nameweb>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            </a>
        )
    }

}



