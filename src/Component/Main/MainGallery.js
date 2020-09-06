import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class MainGallery extends React.Component{
    render(){
        return(
          
            <Container fluid >
                <Row  className="self-align-center ml-lg-5" >
                    <Col>
                    <img
                    height={250}
                    width={300}
                    src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Some pic"
                    />
                    <img
                    height={250}
                    width={300}
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Some pic"
                    /></Col>
                </Row>
                <hr></hr>
                <Row className="self-align-center ml-lg-5">
                    <Col>
                    <img
                    height={250}
                    width={300}
                    src="https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/April/epic-landscapes/09-9226610_uploadsmember665562yourshot-665562-9226610jpg_igdjhxksrjifxjzu4rgbsw37bhp3eflutfvvbpyjwjhzlmh4iziq_3000x2000.jpg"
                    alt="Some pic"
                    />
                   
                    <img
                    height={250}
                    width={300}
                    src="https://i.pinimg.com/originals/54/63/fd/5463fd34295e488694fbe5b7000197f1.jpg"
                    alt="Some pic"
                    /></Col>
                </Row>
               
            </Container>
        
        )
    }
}
export default MainGallery