import React from 'react';
import Logo from "./Logo/Logo";
import UserActions from "./UserActions/UserActions";

const Header = () => {
    return (
        <header className="header border desktop" style={{ width: '100%' }}>
            <div className="container">
                <Logo/>
                <UserActions/>
            </div>
        </header>
    );
};

export default Header;