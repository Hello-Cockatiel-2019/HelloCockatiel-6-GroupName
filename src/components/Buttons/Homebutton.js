import React, { Component } from "react";
import styled from 'styled-components';

const Boxcontent = styled.button`
    margin-top:1em;
    background-color: #FFCC66; 
    color: white; 
    border: 8px solid #FFCC66	;
    border-radius: 8px;
    width: 170px;
    height: 55px;
    @import url('https://fonts.googleapis.com/css?family=Niramit:500&display=swap');
    font-family: 'Niramit', sans-serif;
    &:hover {
        background-color: gray	;
        color: white;
        border: 8px solid gray;
        width: 170px;
        height: 55px;
        @import url('https://fonts.googleapis.com/css?family=Niramit:500&display=swap');
        font-family: 'Niramit', sans-serif;
      }`

export default class Homebutton extends Component {


    render() {
        return (

            <div className="container-fluid">
                <div className="row"><a href="#leopard" >
                    <Boxcontent class="button button1" width="40%" height="80%">ลักษณะ</Boxcontent></a>
                </div>
                <div className="row"><a href="#habitant">
                    <Boxcontent class="button button1" width="40%" height="80%">ที่อยู่อาศัย</Boxcontent></a>
                </div>
                <div className="row"><a href="#food">
                    <Boxcontent class="button button1" width="40%" height="80%">อาหาร</Boxcontent></a>
                </div>
                <div className="row"><a href="#habit">
                    <Boxcontent class="button button1" width="40%" height="80%">ลักษณะนิสัย</Boxcontent></a>
                </div>
                <div className="row"><a href="#credit">
                    <Boxcontent class="button button1" width="40%" height="80%">CREDIT</Boxcontent></a>
                </div>

            </div>
        );
    }
}