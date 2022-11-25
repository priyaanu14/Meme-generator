import pic from '../images/meme.png'
import './Header.css'

export default function Header(props){
    function handleover(){
        console.log('Hovered over the image')
    }
    return(
        <header className='header'>
            <img src= {pic} onMouseOver = {handleover} className="header-image" alt="meme logo" />
            <h3 className="header-title">Meme generator</h3>
            <div id={props.id}>
                    <p id="l">Light</p>
                    <label className="toggle-switch">
                        <input type="checkbox" className="checkbox" checked={props.mode} onChange={props.toggle} />
                        <span className="switch"/>
                    </label>
                    <p id="d">Dark</p>
                    </div>
        </header>
        
    )
}