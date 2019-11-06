import React, { Component } from "react";
import {css } from 'styled-components'
import Homebutton from '../Buttons/Homebutton';
const boximg = css `
background:url("/static/images/B01.jpg") repeat;
background-size:contain;
`
export default class Home extends Component {
    render() {
        return (
            <div className="page1">
                <Homebutton />
            <div className="home">
                <div class="container-fluid">
                    <h1>LEOPARD</h1>
                    <div class="row">
                        <div class="col-xl-6" >
                           
                       </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}



