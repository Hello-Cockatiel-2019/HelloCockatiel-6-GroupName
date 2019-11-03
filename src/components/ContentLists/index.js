import React, {Component} from "react";
import Contents from '../Contents';
import {leoparddata} from '../../data.js';
export default class ContentLists extends Component{
    state ={
        contents: leoparddata
    }
    render(){

        const {contents}=this.state;
      
        return(
            <div className="contentList">{contents.map(content=>(
<Contents key ={content.id} content={content} />

        ))} </div>
        );
    }
}