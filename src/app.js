import Header from "./components/Header";
import Meme from "./components/Meme"
import Footer from "./components/Footer";
import React from "react";

export default function App(){ 
    const [ mode, setMode ] = React.useState(false)
    const [ id, setId ] = React.useState("light")

   function toggle(){
    setMode(prevMode => !prevMode)
    setId(prevId => {
        return prevId === "light" ? "dark" : "light"
     })
    
   }
   console.log(id )
   console.log(mode)
    return(
        <div >
            <Header 
            id = {id}
            mode = {mode}
            toggle = {toggle}
            />
            <Meme 
            id = {id}
            mode = {mode}/>
            <Footer 
            id = {id}
            mode = {mode} />
        </div>
    )
}