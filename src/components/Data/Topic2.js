import React, { Component } from "react";
import Indexbutton from "../Buttons/Indexbutton";
export default class Topic2 extends Component {
    render() {
        return (
            <div className="page3">
                <div class="container-fluid">
                    <h4>ที่อยู่อาศัย</h4>
                    <div class="row">
                        <div class="col-xl-6" ><div className="img-container">
                            <img src="https://img.icons8.com/cotton/64/000000/mountain.png"  /> <Indexbutton /></div></div>
                        <div class="col-xl-6" ><div className="text"> <p>เสือดาวเป็นเสือที่สามารถปรับตัวเข้ากับสภาพแวดล้อมได้ดีที่สุด เขตกระจายพันธุ์กว้างขวางที่สุด <br />
                            มักอยู่อาศัยในป่าโปร่ง เเต่สามารถอาศัยอยู่ได้ในหลายพื้นที่ ตั้งแต่ทะเลทรายจนถึงป่าฝน <br />
                            ตั้งแต่แอฟริกา เอเชียตะวันออกกลาง เรื่อยไปจนถึงจีน และไซบีเรีย รวมทั้งเอเชียตะวันออกเฉียงใต้ <br />
                            เสือดาวสามารถอาศัยอยู่ได้ในอุณหภูมิ 43 องศาเซลเซียสในทะเลทราย หรืออุณหภูมิ -25 องศาเซลเซียสในรัสเซีย <br />
                            และยังอยู่ได้ในระดับความสูงถึง 5,200 เมตร บนเทือกเขาหิมาลัย รวมถึงพื้นที่ป่าที่ใกล้กับชุมชนหรือแหล่งที่อยู่อาศัยของมนุษย์ได้ด้วย</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
