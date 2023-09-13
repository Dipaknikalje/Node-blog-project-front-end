import React,{Component} from "react";
import "./Header.css";
import Buttons from "../Authorisation/Buttons/Buttons";

class Heading extends Component  {
  
  render(){
  return (
    <>
      <div className="title_div">
        <p>The</p>
        <h1>Siren</h1>
      </div>
      <Buttons/>
    </>
  );
}
}

export default Heading;
