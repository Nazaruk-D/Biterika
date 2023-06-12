import React from 'react';

const Logo = () => {
    return (
        <div>
            <a href="index.html" className="logo img-wrap">
                <img src="https://static.biterika.team/brobooster/assets/images/logo.svg" alt="logo"/>
            </a>
            <button type="button" data-trigger="nav-popup" data-overlay className="site-icon desktop-none">
                <img src="https://static.biterika.team/brobooster/assets/images/icons/site.svg" alt="img"/>
            </button>
        </div>
    );
};

export default Logo;