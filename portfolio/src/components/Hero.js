import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return (
       <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="text-right display-4 font-weight-light">{props.title}</h1> }
                        { props.subTitle && <u><h3 className="text-right display-1 font-weight-bolder">{props.subTitle}</h3></u> }
                        { props.text && <h3 className="text-right lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
       </Jumbotron>
    );
}

export default Hero;