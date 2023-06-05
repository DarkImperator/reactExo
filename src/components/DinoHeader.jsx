import logo from "../assets/logo_SlTdD.png"

import './DinoHeader.css';

const DinoHeader = () => {
    return (
        <>
            <header>
                <h1>Code Qui Peut</h1>
                <nav>
                    <img src = {logo} alt="logo" />
                </nav>
            </header>
        </>
    );
};

export default DinoHeader;