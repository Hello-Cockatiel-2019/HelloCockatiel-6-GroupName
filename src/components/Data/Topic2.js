import React, { Component } from "react";
import Pic2 from '../Data/Pic2';
import styled from 'styled-components';

const Forest = styled.div`
    position: absolute;
    margin: -50px auto 0px auto;
    padding: 100px;
    padding-right: 100px;
    padding-left:150px;
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    width: 1300px ;
    height: 550px;
    border:'3px' solid#000000;
    position: absolute;

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
export default class Topic2 extends Component {
    render() {
        return (
            <div className="page3">
                <Forest/>
                <div class="container-fluid">
                    
                    <div class="row">
                        <div className="col-md-6">
                            <div className="img-container">
                            <Pic2 /></div>
                            </div>
                        <div class="col-md-6" ><div className="text"> 
                        <a id="habitant"><a href="#top"><Boxcontent class="button button1" width="40%" height="80%">ที่อยู่อาศัย</Boxcontent></a></a>
                        <p>เสือดาวเป็นเสือที่สามารถปรับตัวเข้ากับสภาพแวดล้อมได้ดีที่สุด เขตกระจายพันธุ์กว้างขวางที่สุด 
                            มักอยู่อาศัยในป่าโปร่ง เเต่สามารถอาศัยอยู่ได้ในหลายพื้นที่ ตั้งแต่ทะเลทรายจนถึงป่าฝน 
                            ตั้งแต่แอฟริกา เอเชียตะวันออกกลาง เรื่อยไปจนถึงจีน และไซบีเรีย รวมทั้งเอเชียตะวันออกเฉียงใต้ 
                            เสือดาวสามารถอาศัยอยู่ได้ในอุณหภูมิ 43 องศาเซลเซียสในทะเลทราย หรืออุณหภูมิ -25 องศาเซลเซียสในรัสเซีย 
                            และยังอยู่ได้ในระดับความสูงถึง 5,200 เมตร บนเทือกเขาหิมาลัย รวมถึงพื้นที่ป่าที่ใกล้กับชุมชนหรือแหล่งที่อยู่อาศัยของมนุษย์ได้ด้วย</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
