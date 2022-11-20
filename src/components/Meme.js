import "./Meme.css"
import React from "react"

export default function Meme(){
    
    const [ meme, setMeme ] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
     
    const [ allMemes, setAllMemes ] = React.useState( [] )

    React.useEffect(() => {
        
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function getMemeImage(event){
        event.preventDefault()

        const memesArray = allMemes
        const randomNumber = Math.floor( Math.random() * memesArray.length )
        const url = memesArray[ randomNumber ].url
        setMeme(prevState => ({
            ...prevState,
            randomImage : url
        }))
        
    }

    function handleChange(event){
        const { name, value} = event.target
        setMeme(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }  

    return(
        <main>
            <form className="meme-form">
                <input type = "text" name = "topText" placeholder = "Top text" onChange = { handleChange } value={ meme.topText } className = "form-input" />
                <input type = "text" name = "bottomText" placeholder = "Bottom text" onChange = { handleChange } value={ meme.bottomText } className = "form-input" />
            
                <button className = "form-button" onClick={ getMemeImage }> Get a new meme image &#x1F92F; </button>
            </form>
            <div className = "meme">
                <img src = { meme.randomImage } className="meme-img" alt="meme" />
                <h2 className="meme-top-text" >{ meme.topText }</h2>
                <h2 className="meme-bottom-text" >{ meme.bottomText }</h2>
            </div>
            
        </main>
    )
}