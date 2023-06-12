import React, {FC} from 'react';
import {CardType} from "../../types/CardType";
import Row from "./Row/Row";

type TablePropsType = {
    data: CardType[] | []
}

const Table: FC<TablePropsType> = ({data}) => {
    return (
        <div className="table">
            <div className="table__md-wrap">
                <div className="table__head table__head--col-8 is-tablet mb-15 mb-lg-2">
                    <div className="table__row">
                        <div className="table__col">
                            <span className="small-xl-text color-sub">Кампания</span>
                        </div>
                        <div className="table__col widescreen-lg">
                            <span className="small-xl-text color-sub">Креативы</span>
                        </div>
                        <div className="table__col widescreen-lg">
                                                        <span
                                                            className="small-xl-text color-sub">Место проведения</span>
                        </div>
                        <div className="table__col">
                            <span className="small-xl-text color-sub">Локации</span>
                        </div>
                        <div className="table__col">
                            <span className="small-xl-text color-sub">Транспорт</span>
                        </div>
                        <div className="table__col">
                            <span className="small-xl-text color-sub">Показ</span>
                        </div>
                        <div className="table__col">
                            <span className="small-xl-text color-sub">Бюджет</span>
                        </div>
                        <div className="table__col"></div>
                    </div>
                </div>
                <div className="table__body filter-tabs__content">
                    {data
                        ? data.map((card) => <Row key={card.id} row={card}/>)
                        : <div>Данных нет</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Table;