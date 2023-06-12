import React from 'react';

const Menu = () => {
    return (
        <ul className="lk-menu">
            <li className="lk-menu__item">
                <a href="campaings.html" className="page-link active new-message">
                      <span className="page-link__icon-dot">
                        <svg className="icon icon-medium page-link__icon desktop-none">
                          <use xlinkHref="#campaign"></use>
                        </svg>
                      </span>
                    <span className="page-link__name">Кампании</span>
                    <span className="page-link__indicator ml-auto">
                        <span className="medium-text color-base mr-1">1</span>
                        <span className="page-link__indicator-dot"></span>
                      </span>
                </a>
            </li>
            <li className="lk-menu__item">
                <a href="creatives.html" className="page-link">
                    <svg className="icon icon-medium page-link__icon desktop-none">
                        <use xlinkHref="#picture"></use>
                    </svg>
                    <span className="page-link__name">Креативы</span>
                </a>
            </li>
            <li className="lk-menu__item">
                <a href="payments.html" className="page-link">
                    <svg className="icon icon-medium page-link__icon desktop-none">
                        <use xlinkHref="#coin"></use>
                    </svg>
                    <span className="page-link__name">Платежи</span>
                </a>
            </li>
            <li className="lk-menu__item desktop-none">
                <a href="account.html" className="page-link">
                    <svg className="icon icon-medium page-link__icon desktop-none">
                        <use xlinkHref="#account"></use>
                    </svg>
                    <span className="page-link__name">Аккаунт</span>
                </a>
            </li>
            <li className="lk-menu__item is-desktop">
                <a href="support.html" className="page-link">
                    <span className="page-link__name">Помощь</span>
                </a>
            </li>
            <li className="lk-menu__item is-desktop">
                <a href="settings.html" className="page-link">
                    <span className="page-link__name">Настройки</span>
                </a>
            </li>
        </ul>
    );
};

export default Menu;