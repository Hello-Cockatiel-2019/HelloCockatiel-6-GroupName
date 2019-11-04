import React from 'react';
import './App.css';
import ContentLists from './components/ContentLists/';
import './style.css';
import Frame from './components/Frame/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <center>
          <img src="/static/images/bg.jpg" alt="bg" width="1152px" height="678px" left="134px" top="173px" />
          </center>
          <ContentLists/>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
