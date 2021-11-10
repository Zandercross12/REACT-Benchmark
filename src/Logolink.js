import mwLogo from './assets/Logo.png';
import { Link } from 'react-router-dom';


const Logolink = () => {
    return ( 
        <div className="logolink">
            <img src={mwLogo} alt="mwLogo" />
            <Link to="./contact">contact</Link>
        </div>
     );
}
 
export default Logolink;