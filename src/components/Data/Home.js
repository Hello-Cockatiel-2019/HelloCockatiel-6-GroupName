import React, { Component } from "react";

import Homebutton from '../Buttons/Homebutton';
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div class="container-fluid">
                    <h1>LEOPARD</h1>
                    <div class="row">
                        <div class="col-xl-6" >
                           <Homebutton />
                       </div>
                    </div>
                </div>
            </div>
        )
    }

}



