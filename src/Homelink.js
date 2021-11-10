import mwLogo from './assets/Logo.png';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';

const Homelink = () => {

    useEffect(() => {
        document.body.style.background = "linear-gradient(90deg, #222222 50%, white 50%)";
        return () => {
            document.body.style.background = null;
        }
    });

    return (
        <div className="homelink">
            <img src={mwLogo} alt="mwLogo" />
            <Link to="/">home</Link>
        </div>
    );
}

export default Homelink;