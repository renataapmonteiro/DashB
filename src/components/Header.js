import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className=" nav-wrapper boxBloo">
                <Link to='/' className="item">Rank</Link>
                <Link to='/cdl' className="item">Currency Data</Link>   
            </div>
        </nav>
    )
}
export default Header;
