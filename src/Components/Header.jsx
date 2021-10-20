import React from 'react';
import headerImage from '../images/headerImage.png';

class Header extends React.Component {
    render() {
        return (
            <section className="container">
                <span>
                    <h1>Como está sua alimentação?</h1>
                    <h2>Saiba agora!</h2>
                    <button className="buttonPlay">Jogar</button>
                </span>
                <img src={ headerImage } alt="" className="headerImage"/>
            </section>
        );
    }
}

export default Header;