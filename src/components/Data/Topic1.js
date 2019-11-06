import React, { Component } from "react";
import Pic1 from "../Data/Pic1";
export default class Topic1 extends Component {
    render() {
        return (

            <div className="page2">
                <div class="container-fluid">
                    <h4>ลักษณะ</h4>
                    <div class="row">
                        <div class="col-xl-6">
                            <div className="img-container">
                            <Pic1 /></div>
                            </div>
                        <div class="col-xl-6" ><div className="text">
                            <p>ลำตัวสีน้ำตาลอมเหลืองหรือมีสีเหลือง มี "ลายขยุ้มตีนหมา"<br />
                                ซึ่งเป็นจุดสีดำแต้มบริเวณลำตัว โดยลายจุดจะเรียงตัวกันเป็นกลุ่ม ๆ<br />
                                โดยจะปรากฏเฉพาะที่บริเวณด้านหลังและด้านข้างของลำตัว<br />
                                บริเวณใต้ท้องที่จะมีจุดสีดำปรากฏกับขนใต้ท้องที่มีสีขาวหรือสีเทา<br />
                                ขนาดความยาวจากหัวถึงลำตัว 107–129 เซนติเมตร หางมีความยาว 79.2–99.1 เซนติเมตร<br />
                                ใบหูมีความยาว 6.5–7.4 เซนติเมตร และหนัก 45–65 กิโลกรัม</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>



        )

    }
}

