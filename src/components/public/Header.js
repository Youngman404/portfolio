import React from 'react';
// Utilisation de Link à la place du 'a href'
import { Link } from 'react-router-dom';

// Liaison avec le fichier css
import './header.css'

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        {/* Le slash permet de dire qu'on revient à la raçine */}
                        <li><Link to="/home">Accueil</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projets</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;