import pic from '../images/meme.png'
import './Header.css'

export default function Header(){
    function handleover(){
        console.log('Hovered over the image')
    }
    return(
        <header className='header'>
            <img src= {pic} onMouseOver = {handleover} className="header-image" alt="meme logo" />
            <h3 className="header-title">Meme generator</h3>
            
        </header>
        
    )
}