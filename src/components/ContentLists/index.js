import React, { Component } from "react";
import Contents from '../Contents';
import { leoparddata } from '../../data.js';
import styled from 'styled-components'
export default class ContentLists extends Component {

    state = {
        contents: leoparddata
    }
    render() {

        const { contents } = this.state;
        const Title = styled.h1`
  font-size: 20px;
  text-align: left;
  color: #A38166;
`;
        const Wrapper = styled.section`
  padding: 4em;
  margin:margin: 25px 50px 75px 100px;
  background:#FFFFFF;
  border: 3px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 25px 30px 35px rgba(0, 0, 0, 0.25);
`;

        return (
            <Wrapper>
                <Title>
                    <div className="contentList">{contents.map(content => (
                        <Contents key={content.id} content={content} />
                    ))} </div>
                </Title>
            </Wrapper>

        );
    }
}