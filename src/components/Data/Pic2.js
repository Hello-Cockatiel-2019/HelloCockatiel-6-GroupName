import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'

export default class Pic2 extends Component {
        render(){
        return (
         
          <Container >
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Carousel>
                  <Carousel.Item md="auto">
                    <img
                      className="d-block "
                      src="/static/images/ที่อยู่1.jpg"
                      alt=" Leopard's food First slide"
                      width="590px"
                      height="390px"
                    />
                  </Carousel.Item>
    
                  <Carousel.Item md="auto">
                    <img
                      className="d-block "
                      src="/static/images/ที่อยู่2.jpg"
                      alt=" Leopard's food Second slide"
                      width="590px"
                      height="390px"
                    />
                  </Carousel.Item>
                  
                  <Carousel.Item md="auto">
                    <img
                      className="d-block "
                      src="/static/images/ที่อยู่3.jpg"
                      alt=" Leopard's food Second slide"
                      width="590px"
                      height="390px"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        
        )
      }
    }


