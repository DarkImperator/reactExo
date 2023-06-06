import './footer.css';

import logo1 from "../assets/Logo-sith-noir_2.jpg";
import logo2 from "../assets/Logo-sith-rouge.png";

const Footer = () => {
    return (
        <footer>
        <img className='imgFoot' src = {logo1} alt = "Logo sith noir"/>
        <p>Dark Imperator 7 production, All rights reseved ^^</p>
        <img className='imgFoot2' src = {logo2} alt = "Logo sith rouge"/>
        </footer>
    )
}

export default Footer;
