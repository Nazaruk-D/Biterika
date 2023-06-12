import React from 'react';
import Balance from "./Balance/Balance";
import Menu from "./Menu/Menu";

const SideBar = () => {
    return (
        <div className="lk-nav">
            <div className="lk-nav__inner">
                <Balance/>
                <Menu/>
            </div>
        </div>
    );
};

export default SideBar;