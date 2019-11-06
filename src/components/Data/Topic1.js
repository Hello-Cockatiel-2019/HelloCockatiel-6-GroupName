import React, { Component } from "react";
import Pic1 from "../Data/Pic1";
import styled from 'styled-components';

const Forest = styled.div`
    position: absolute;
    margin: -50px auto 0px auto;
    padding: px;
    padding-right: 50px;
    padding-left:50px;
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    width: 1300px ;
    height: 550px;
    border:'3px' solid#000000;
`
const Boxcontent = styled.button`
    margin-top:1em;
    margin-left:0m;
    background-color: #FFCC66; 
    color: white; 
    border: 8px solid #FFCC66	;
    border-radius: 8px;
    width: 170px;
    height: 55px;
    @import url('https://fonts.googleapis.com/css?family=Niramit:500&display=swap');
    font-family: 'Niramit', sans-serif;
      `

const Styled1 = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Niramit:500&display=swap');
    font-family: 'Niramit', sans-serif;
    font-size: 16px;
    text-align: left;
`   

export default class Topic1 extends Component {
    render() {
        return (
            <div className="page2">
                <Forest/>
              
                <div class="container-fluid">
                
                    <div class="row">
                        <div class="col-md-6">
                            <div className="img-container">
                            <Pic1 /></div>
                            </div>
                        <div class="col-md-6" ><div className="text">
                        <Styled1/>
                        <a id ="leopard"><a href="#top"><Boxcontent class="button button1" width="40%" height="80%">ลักษณะของเสือดาว</Boxcontent></a></a>
                            <p>ลำตัวสีน้ำตาลอมเหลืองหรือมีสีเหลือง มี "ลายขยุ้มตีนหมา
                                ซึ่งเป็นจุดสีดำแต้มบริเวณลำตัว โดยลายจุดจะเรียงตัวกันเป็นกลุ่ม ๆ
                                โดยจะปรากฏเฉพาะที่บริเวณด้านหลังและด้านข้างของลำตัว
                                บริเวณใต้ท้องที่จะมีจุดสีดำปรากฏกับขนใต้ท้องที่มีสีขาวหรือสีเทา
                                ขนาดความยาวจากหัวถึงลำตัว 107–129 เซนติเมตร หางมีความยาว 79.2–99.1 เซนติเมตร
                                ใบหูมีความยาว 6.5–7.4 เซนติเมตร และหนัก 45–65 กิโลกรัม</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           


        )

    }
}

