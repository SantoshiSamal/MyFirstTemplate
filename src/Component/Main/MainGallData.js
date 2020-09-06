import React from "react"
import Button from "react-bootstrap/Button"
import Fade from "react-bootstrap/Fade"
class MainGallData extends React.Component{
    constructor(props){
        super(props);
         this.state ={
             open : false
         }   
        
    }
    render(){
        return(
           <div className="text-center ml-lg mt-lg-3">
            <Button size="sm"
             variant="dark"
            onClick={()=>this.setState({open :!this.state.open})}
            aria-controls="example-collapse-text"
            aria-expanded={this.state.open}
            >
                Click me!!
            </Button>
            <Fade in={this.state.open}>
               <div id="example-fade-text"className="text-center">
               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
                   <hr></hr>
                 <img 
                   width={475}
                   height={400}
                   src="https://tullyglass.com/wp-content/uploads/2015/09/cycling.jpg" 
                   alt="pic"/></div>  
            </Fade>
            
           </div>
        )
    }
}
export default MainGallData