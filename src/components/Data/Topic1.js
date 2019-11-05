import React, { Component } from "react";
import Indexbutton from "../Buttons/Indexbutton";
export default class Topic1 extends Component {
    render() {
        return (
            <div className="page1">
                <div class="container-fluid">
                    <h4>ลักษณะ</h4>
                    <div class="row">
                        <div class="col-xl-6" ><div className="img-container">
                       <img src="/static/images/leopard.jpg" width='650em' height='433.33em' /><Indexbutton /></div></div>
                        <div class="col-xl-6" ><div className="text">
                            <p>ลำตัวสีน้ำตาลอมเหลืองหรือมีสีเหลือง มีลายจุดสีดำที่เรียกว่า "ลายขยุ้มตีนหมา"<br />
                                แต้มบริเวณลำตัวเป็นจำนวนมากโดยลายจุดจะเรียงตัวกันเป็นกลุ่ม ๆ <br />
                                โดยจะปรากฏเฉพาะที่บริเวณด้านหลังและด้านข้างของลำตัว แตกต่างจากบริเวณส่วนหัว ขา เท้า <br />
                                บริเวณใต้ท้องที่จะมีจุดสีดำปรากฏอยู่เช่นเดียวกับขนใต้ท้องที่มีสีขาวหรือสีเทา <br />
                                ขนาดความยาวหัวถึงลำตัว 107–129 เซนติเมตร หางมีความยาว 79.2–99.1 เซนติเมตร <br />
                                ใบหูมีความยาว 6.5–7.4 เซนติเมตร และหนัก 45–65 กิโลกรัม</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
