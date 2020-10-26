import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <BrowserRouter>
                <Route>
                    <Link to='/' className="item">Rank</Link>
                    <Link to='/cdl' className="item">Currency Data</Link>
                </Route>
            </BrowserRouter>    

        </div>
    )
}
export default Header;
