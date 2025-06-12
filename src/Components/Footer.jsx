import './Footer.css'
import CoffeeSpill from '../assets/11205217.png';

function Footer(){
    const year= new Date().getFullYear();
    return(
        <div className="footer">
        <p>&copy; 2025; All rights reserved. <br></br><br></br>Made with ☕ and ❤️ by Ruchi Pawar</p>
        <img src={CoffeeSpill}></img>
        </div>
    );
}

export default Footer;