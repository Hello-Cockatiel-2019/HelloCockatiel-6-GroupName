import React, { Component } from "react";
import {css } from 'styled-components'
import Homebutton from '../Buttons/Homebutton';
import styled from 'styled-components'
const boximg = css `
background:url("/static/images/B01.jpg") repeat;
background-size:contain;
`
const Nameweb = styled.div`
    padding-top:8em;

`
export default class Home extends Component {
    render() {
        return (
            <div className="page1">
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Homebutton/> 
                        </div>
                        <div className="col">
                            <Nameweb><img src="/static/images/Asset 2.png"/></Nameweb>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>
        )
    }

}



