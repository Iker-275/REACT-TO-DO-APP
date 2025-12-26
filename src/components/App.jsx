import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import {Card,Card2} from "./ContactCard";



function App(){
    return (
    <div >
        <Header />
        <Note /> 
        <Card name="ASONI" img="" number="25434321322" email="d@gmail.com" />
         <Card name="Beyonce" img="" number="254456799" email="beyonce@gmail.com" />
      

         <Footer />
    </div>);
}



export default App;