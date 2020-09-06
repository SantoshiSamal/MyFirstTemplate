import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import Container from "react-bootstrap/Container"
function ControlledCarousel(){
return(
    <Container>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://drscdn.500px.org/photo/15660849/m%3D900/v2?sig=c58fc7b22e62d36e25b4c29a6026a31831426e1f3143463f4aea68e4a58b6683"
            alt="vfvf"/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://c1.wallpaperflare.com/preview/1012/767/708/night-sky-stars-cloud.jpg"
            
            alt="kxlsk"/>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2017/08/Alto-Campoo-Ski-Lift-Milky-Way-e1502733284583.jpg?fit=750%2C501&ssl=1"
            alt="njnx"/>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
)
}
export default ControlledCarousel