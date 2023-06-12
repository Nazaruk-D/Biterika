import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{ width: '100%' }}>
            <div className="container">
                <div className="footer__wrap">
                    <a href="#" className="logo-footer"></a>
                    <div className="footer__copyright ml-auto">
                        <div className="copyright">
                            <ul className="copyright__list">
                                <li className="copyright__item">
                                    <a href="#" className="copyright__link medium-text">Политика конфиденциальности</a>
                                </li>
                                <li className="copyright__item">
                                    <a href="#" className="copyright__link medium-text">Правила пользования</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__site-info flex-row">
                        <div className="site-info">
                            <div className="site-info__img medium-icon img-wrap mr-15">
                                <img src="https://static.biterika.team/brobooster/assets/images/planet.svg" alt="lang" />
                            </div>
                            <span className="medium-text color-sub">Русский</span>
                        </div>
                        <div className="site-info">
                            <span className="medium-text color-sub">RUB</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;