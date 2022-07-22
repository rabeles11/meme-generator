import './Header.css';
import Logo from "../Images/TrollFace.png"
function Header() {
  return (
    <div className="header">
            <img src={Logo} className="header--image"></img>
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
            
    </div>
  );
}

export default Header;
