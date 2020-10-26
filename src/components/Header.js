import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">Rank</Link>
            <Link to='/cdl' className="item">Currency Data</Link>   
        </div>
    )
}
export default Header;
