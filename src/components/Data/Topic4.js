import React, { Component } from "react";
import Pic4 from '../Data/Pic4';
import styled from 'styled-components';

const Boxcontent = styled.button`
    margin-top:1em;
    margin-left:33em;
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
                <div className="BoxTop4">
                <div class="container-fluid">
                   <a id="habit"><a href="#top"> <Boxcontent class="button button1" width="40%" height="80%">ลักษณะนิสัย</Boxcontent></a></a>
                    <div class="row">
                        <div class="col-xl-6" ><
                            div className="img-container">
                            <Pic4 /></div>
                            </div>
                        <div class="col-xl-6" ><div className="text"> <p>เสือดาวเป็นสัตว์ที่รักสันโดษ จะอยู่รวมเป็นกลุ่มเฉพาะ ช่วงดูแลลูกเท่านั้น เสือดาวชอบอาศัยอยู่ป่าทุ่งและเขตป่าละเมาะ< br />
                            เพราะจะมีสัตว์ขนาดกลางที่เป็นอาหารของมันมากกว่าในเขตป่าทึบ เสือดาวชอบล่าเหยื่อโดยการหมอบรอเหยื่อบนต้นไม้
         เมื่อเหยื่อเข้ามาใกล้พอ ได้จังหวะ มันจะกระโดดลงไปบนหลังเหยื่อและกัดที่หลอดลมจนเหยื่อขาดใจตาย < br />
                            หลังจากฆ่าเหยื่อแล้วจะลากไปกินบนต้นไม้ เสือดาวไม่ชอบกินซากเน่า < br />
                            มันมักจะกินเฉพาะเหยื่อที่เพิ่งฆ่ามากกว่า มีความฉลาดและระวังภัยมากกว่าเสือโคร่ง
         เสือดาวมักใช้หางกลบรอยเท้าตัวเองขณะเดิน < br />
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