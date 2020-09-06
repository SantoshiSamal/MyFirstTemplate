import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Media from "react-bootstrap/Media";
class MainData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <>
        <Media as="li">
          <img
            width={500}
            height={400}
            className="align-self-center mr-3"
            src="https://images.unsplash.com/photo-1455459182396-ae46100617cb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="sunset flowers"
          />
          <Media.Body className="text-center mt-sm-5">
            
              <div id="example-fade-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
           
          </Media.Body>
        </Media>
        <hr></hr>
        <Media as="li">
          <Media.Body className="text-center mt-sm-5">
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            </p>
            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
           
          </Media.Body>
          <img
            width={500}
            height={400}
            className="align-self-center mr-3"
            src="https://www.roughguides.com/wp-content/uploads/2014/04/04.Shanghai-478913073-1680x1050.jpg"
            alt="flower"
          />
        </Media>
        <hr></hr>
      </>
    );
  }
}
export default MainData;
