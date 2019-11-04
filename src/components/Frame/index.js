import React, { Component } from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Frame extends Component {
  render() {
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
    const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


    return (
      <Wrapper>
        <Title>
          wow
    </Title>
      </Wrapper>
    );

  }
}