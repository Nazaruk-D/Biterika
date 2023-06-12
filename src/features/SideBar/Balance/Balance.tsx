import React from 'react';

const Balance = () => {
    return (
        <div className="balance desktop mb-25">
            <div className="balance__wrap">
                <div className="balance__row">
                    <h4 className="base-text">Баланс</h4>
                    <button type="button" className="btn-main">
                        <svg className="icon icon-small mr-1">
                            <use xlinkHref="#add"></use>
                        </svg>
                        <span className="small-xl-text text-medium">Пополнить</span>
                    </button>
                </div>
                <div className="balance__row">
                    <span className="small-xl-text">Доступно</span>
                    <span className="small-xl-text color-success">135$</span>
                </div>
                <div className="balance__row">
                    <span className="small-xl-text">Зарезервировано</span>
                    <span className="small-xl-text text-medium">600$</span>
                </div>
            </div>
        </div>
    );
};

export default Balance;