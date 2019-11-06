import React, { Component } from "react";
import Pic4 from '../Data/Pic4';
import styled from 'styled-components';

const Forest = styled.div`
    position: absolute;
    margin: -50px auto 0px auto;
    padding: 100px;
    padding-right: 50px;
    padding-left:100px;
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    width: 1300px ;
    height: 550px;
    border:'3px' solid#000000;
`
const Boxcontent = styled.button`
    margin-top:1em;
    margin-left:0em;
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
export default class Topic4 extends Component {
    render() {
        return (
            <div className="page5">
                <Forest/>
                <div className="BoxTop4">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6" ><
                            div className="img-container">
                            <Pic4 /></div>
                            </div>
                        <div class="col-md-6" ><div className="text"> 
                        <a id="habit"><a href="#top"> <Boxcontent class="button button1" width="40%" height="80%">ลักษณะนิสัย</Boxcontent></a></a>
                        <p>เสือดาวเป็นสัตว์ที่รักสันโดษ จะอยู่รวมเป็นกลุ่มเฉพาะ ช่วงดูแลลูกเท่านั้น เสือดาวชอบอาศัยอยู่ป่าทุ่งและเขตป่าละเมาะ
                            เพราะจะมีสัตว์ขนาดกลางที่เป็นอาหารของมันมากกว่าในเขตป่าทึบ เสือดาวชอบล่าเหยื่อโดยการหมอบรอเหยื่อบนต้นไม้
         เมื่อเหยื่อเข้ามาใกล้พอ ได้จังหวะ มันจะกระโดดลงไปบนหลังเหยื่อและกัดที่หลอดลมจนเหยื่อขาดใจตาย
                            หลังจากฆ่าเหยื่อแล้วจะลากไปกินบนต้นไม้ เสือดาวไม่ชอบกินซากเน่า 
                            มันมักจะกินเฉพาะเหยื่อที่เพิ่งฆ่ามากกว่า มีความฉลาดและระวังภัยมากกว่าเสือโคร่ง
         เสือดาวมักใช้หางกลบรอยเท้าตัวเองขณะเดิน 
                            เเละไม่เคยมีรายงานว่าเสือดาวตายเนื่องจากกินเม่น ต่างจากเสือโคร่ง </p>

                            <p>การสืบพันธุ์: เสือดาวตั้งครรภ์ประมาณ 90 – 100 วัน ออกลูกครั้งละ 1- 4 ตัว</p>
                        </div></div>
                    </div>   
                </div>
            </div>
            </div>
        )
    }

}