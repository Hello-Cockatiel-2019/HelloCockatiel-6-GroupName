import React, { Component } from "react";
export default class Contents extends Component {

    render() {
        const { topic, img, detail } = this.props.content;
        console.log(this.props.content);
        return (

            <div className="topic">
                <h4>{topic}</h4>
                
                <div className="img-container">
                <span className="back-btn"><img src="https://img.icons8.com/plasticine/100/000000/circled-chevron-left.png" /></span>
                <span className="back-btn2"><img src="https://img.icons8.com/ios-glyphs/96/000000/circled-chevron-left.png" /></span>
                
                
                <img src={img} width='650em' height='433.33em'></img>
                <span className="next-btn"> <img src="https://img.icons8.com/plasticine/100/000000/circled-chevron-right.png" /></span>
                <span className="next-btn2"><img src="https://img.icons8.com/ios-glyphs/100/000000/circled-chevron-right.png" /></span>
                
                
                </div>

                    <div className="detail">
                    <p>{detail}</p>
                    </div>
                    {/* <a href='#' class="button">Next</a> */}

                
                </div>
                );
            }
}