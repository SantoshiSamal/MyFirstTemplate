import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainData from "./MainData"
import MainNav from "./MainNav"
import MainGallery from "./MainGallery"
import MainGallData from "./MainGallData"

class Main extends React.Component{
    render()
    {
        return(
            <Container fluid className="au">
                <Row>
                    <Col xs lg ="2">
                      <MainNav/>
                    </Col>
                    <Col >
                       <MainData/>
                     
                    </Col>
                   
                </Row>
                <Row>
                    <Col xs lg="5">
                    <MainGallData/>
                    </Col>
                    <Col>
                    <MainGallery/>
                    </Col>
                
                </Row>
                
            </Container>

        )
    }
}
export default Main

