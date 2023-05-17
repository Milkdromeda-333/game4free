import { useState, useEffect} from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Navbar({ toggleMenu, isMenuOpen }) {

    const [currnetLogo, setCurrentLogo] = useState();
    
    const returnLogoUrl = () => {
        const urls = [
            "https://img.icons8.com/color/40/sonic-the-hedgehog-1.png",
            "https://img.icons8.com/color/40/sonic-the-hedgehog-1.png",
            "https://img.icons8.com/nolan/40/hollow-knight.png",
            "https://img.icons8.com/color/40/funtime-freddy.png",
            "https://img.icons8.com/color/40/bendy.png",
            "https://img.icons8.com/color/40/crossy-road-logo.png",
            "https://img.icons8.com/fluency/40/five-nights-at-freddys.png",
            "https://img.icons8.com/doodle/40/doom-logo.png",
            "https://img.icons8.com/plasticine/40/warframe.png",
            "https://img.icons8.com/color/40/psyduck.png",
            "https://img.icons8.com/color/40/jelly-band.png",
            "https://img.icons8.com/plasticine/40/bloons-td-6.png",
            "https://img.icons8.com/officel/40/triforce.png",
            "https://img.icons8.com/plasticine/40/monopoly.png"
        ];

        return urls[Math.round(Math.random() * urls.length)] || urls[0];

    }

    useEffect(() => {
        const newUrl = returnLogoUrl();
        setCurrentLogo(newUrl);
    },[])
    
    return (
        <nav className="navbar">
            <div className="navbar__logo-container">
                <img src={currnetLogo} alt="logo" className='navbar__logo' />
                <span>Game4Free</span>
            </div>
            
            {!isMenuOpen ?
                <AiOutlineHeart className="navbar__savedGames" onClick={toggleMenu} />
                : <AiFillHeart className="navbar__savedGames" onClick={toggleMenu} />
            }
        </nav>
    )
}