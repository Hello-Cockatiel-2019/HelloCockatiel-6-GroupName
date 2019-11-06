import React, { Component } from "react";
import Contents from '../Contents';
import { leoparddata } from '../../data.js';
import styled from 'styled-components'
export default class ContentLists extends Component {

    state = {
        contents: leoparddata
    }
    render() {
        const Bg = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Niramit&display=swap');
font-family: 'Niramit', sans-serif;
font-size: 20px;
color: #A38166;
`;

        const { contents } = this.state;
        const Wrapper = styled.section`
  padding: 4em;
  margin: 25px 50px 75px 100px;
  background:#FFFFFF;
  border: 3px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 25px 30px 35px rgba(0, 0, 0, 0.25);
`;

        return (
            <Wrapper>
                <Bg>

                    <div className="contentList">{contents.map(content => (
                        <Contents key={content.id} content={content} />
                    ))} </div>
                </Bg>
            </Wrapper>

        );
    }
}