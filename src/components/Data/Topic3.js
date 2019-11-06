import React, { Component } from "react";
import Pic3 from '../Data/Pic3';
import styled from 'styled-components';

const Boxcontent = styled.button`
    margin-top:1em;
    margin-left:32em;
    background-color: #FFCC66; 
    color: white; 
    border: 8px solid #FFCC66	;
    border-radius: 8px;
    width: 170px;
    height: 55px;
    @import url('https://fonts.googleapis.com/css?family=Niramit:500&display=swap');
    font-family: 'Niramit', sans-serif;
    font-size: 20px;
    `
export default class Topic3 extends Component {
    render() {
        return (
            <div className="page4">
                <div className="BoxTop3">
                <div class="container-fluid">
                   <a id="food"><a href="#top"><Boxcontent class="button button1" width="40%" height="80%">อาหาร</Boxcontent></a></a>
                    <div class="row">
                        <div class="col-xl-6" >
                            <div className="img-container">
                           <Pic3 /></div>
                           </div>
                        <div class="col-xl-6" ><div className="text"><p>กินสัตว์ป่าทุกชนิดที่จับได้ เช่น หมู กวาง ลิง(ส่วนมาก) นกยูง สุนัข และแมลง รวมถึงปู เเละปลา <br />
                            พฤติกรรมการกิน สามารถขึ้นล่าเหยื่อบนต้นไม้ หรือ ลากเหยื่อไปกิน บนต้นไม้เพื่อหลีกหนีจากศัตรูได้</p></div></div>
                    </div>
                </div>
             </div>
             </div>
            )
            }
            
            }
