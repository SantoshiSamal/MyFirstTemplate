import React from "react";
import Header from "./Component/Header/Header";
import Navigation from "./Component/Navigation/Navigation"
import Main from "./Component/Main/Main"
import ControlledCarousel from "./Component/Slide/Slide"
import Jumbo from "./Component/Me/Me"
import "./App.css"
class App extends React.Component {
  render() {
    return (
      <div className="au">
        <Header />
            <Navigation />
            <hr></hr>
            <Main/>
            <hr></hr>
            <ControlledCarousel/>
            <Jumbo />
      </div>
    );
  }
}

export default App;
