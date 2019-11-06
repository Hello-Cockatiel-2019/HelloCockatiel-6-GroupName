import React, { Component } from "react";
import Pic3 from '../Data/Pic3';
import Indexbutton from "../Buttons/Indexbutton";
export default class Topic3 extends Component {
    render() {
        return (
            <div className="page4">
                <div className="BoxTop3">
                <div class="container-fluid">
                    <h4>อาหาร</h4>
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
