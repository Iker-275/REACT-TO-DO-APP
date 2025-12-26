import React from "react";
import Avatar from "./Avatar";

//learning js props

function Card(props){
    return(
        <div className="note">
         <Avatar img={props.img}/>
        <h1>{props.name}</h1>
        <img src={props.img} alt="hey"/>
        <p>{props.number}</p>
        <p>{props.email}</p>

        </div>
    );
}

function Card2(props){
return  (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img}/>
        </div>
        <div className="bottom">
          <p className="info" >{props.number}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

export {Card,Card2};