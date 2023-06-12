import React, {FC} from 'react';
import {CardType} from "../../../types/CardType";

type RowPropsType = {
    row: CardType
}

const Row: FC<RowPropsType> = ({row}) => {
    return (
        <div className="filter-tabs__item active" data-content="1">
            <div className="card card--col-8">
                <div className="card__wrap xxl-center">
                    <div className="card__col first flex-column">
                        <h5 className="medium-text">{row.title}</h5>
                        <ul className="info-list mb-1 mb-lg-15">
                            <li className="info-list__item">
                                <span className="sub-text">{row.id}</span>
                            </li>
                            <li className="info-list__item">
                                <span className="sub-text">12 янв 2023 в 14:45</span>
                            </li>
                        </ul>
                        <div className="flex-column md-reverse">
                            <div className="status small success">
                                  <span className="info-icon img-wrap mr-05">
                                    <img
                                        src="https://static.biterika.team/brobooster/assets/images/icons/dot-success.svg"
                                        alt=""/>
                                  </span>
                                <span className="small-text">
                                    {row.state}
                                </span>
                            </div>
                            <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                                {row.city}
                            </p>
                        </div>
                    </div>
                    <div className="card__col second widescreen-lg">
                        <p className="medium-text">{row.city}</p>
                    </div>
                    <div className="card__cols-block mt-1 mt-md-0">
                        <div className="card__row four">
                            <div className="card__row-col flex-column">
                                <span className="small-text tablet-none">Локации</span>
                                <span className="medium-text">3</span>
                            </div>
                            <div className="card__row-col flex-column">
                                <span className="small-text tablet-none">Транспорт</span>
                                <span className="medium-text">4</span>
                            </div>
                            <div className="card__row-col flex-column">
                                <span className="small-text tablet-none">Показ</span>
                                <span className="medium-text">13/45 ч</span>
                            </div>
                            <div className="card__row-col flex-column">
                                <span className="small-text tablet-none">Бюджет</span>
                                <span className="medium-text">{row.budget}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card__col third flex-auto">
                        <div className="card__img-wrap">
                            {row.photos.map((image, index) => (
                                <div className="card__sm-img card__icon-wrap img-cover" key={index}>
                                    <img src={image} alt="card" />
                                    {index === 0 && (
                                        <span className="card__icon fixed">
                                <span className="small-icon img-wrap">
                                    <img src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg" alt="" />
                                </span>
                            </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card__details-col fixed">
                        <div className="menu-wrap js-menu-wrap">
                            <button type="button"
                                    className="btn-more second js-menu-btn">
                                <svg className="icon icon-small">
                                    <use xlinkHref="#more-16"></use>
                                </svg>
                            </button>
                            <div className="menu menu--right js-menu-list">
                                <div className="menu__wrap">
                                    <ul>
                                        <li><a href="campaing-edit.html" className="menu__btn">Изменить</a>
                                        </li>
                                        <li>
                                            <button type="button" className="menu__btn">Дублировать
                                            </button>
                                        </li>
                                        <li><a href="support.html" className="menu__btn">Перейти в поддержку</a></li>
                                        <li>
                                            <button type="button"
                                                    className="menu__btn">Удалить
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="campaing-page.html"
                           className="btn-more second ml-3 ml-lg-4">
                            <svg className="icon icon-small">
                                <use xlinkHref="#arrow-right-16"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Row;