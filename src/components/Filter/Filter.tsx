import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {setFilter} from "../../store/slices/appSlice";
import {activeFilterSelector} from "../../store/selectors/appSelectors";
import {FilterStatusType} from "../../types/FilterStatusType";
import {FilterStatus} from "../../enums/filterStatus";

const Filter = () => {
    const dispatch = useAppDispatch()
    const filterStatus = useAppSelector(activeFilterSelector)

    const onClickHandler = (tab: FilterStatusType) => {
        dispatch(setFilter(tab))
    }

    return (
        <div className="filter-tabs__scroll scroll-none">
            <ul className="filter-tabs__header flex-auto js-tabs-buttons mb-15 mb-md-2 mb-lg-25">
                <li
                    data-tab="all"
                    className={`filter-tabs__btn-circle ${filterStatus === FilterStatus.ALL ? 'active' : ''}`}
                    onClick={() => onClickHandler(FilterStatus.ALL)}
                >
                    Все
                </li>
                <li
                    data-tab="1"
                    className={`filter-tabs__btn-circle ${filterStatus === FilterStatus.IN_WORK ? 'active' : ''}`}
                    onClick={() => onClickHandler(FilterStatus.IN_WORK)}
                >
                    В работе
                </li>
                <li
                    data-tab="2"
                    className={`filter-tabs__btn-circle ${filterStatus === FilterStatus.AWAITING_START ? 'active' : ''}`}
                    onClick={() => onClickHandler(FilterStatus.AWAITING_START)}
                >
                    Ожидают начала
                </li>
                <li
                    data-tab="3"
                    className={`filter-tabs__btn-circle ${filterStatus === FilterStatus.SUSPENDED ? 'active' : ''}`}
                    onClick={() => onClickHandler(FilterStatus.SUSPENDED)}
                >
                    Приостановлены
                </li>
                <li
                    data-tab="4"
                    className={`filter-tabs__btn-circle ${filterStatus === FilterStatus.UNDER_REVIEW ? 'active' : ''}`}
                    onClick={() => onClickHandler(FilterStatus.UNDER_REVIEW)}
                >
                    На модерации
                </li>
                <li
                    data-tab="5"
                    className={`filter-tabs__btn-circle ${filterStatus === FilterStatus.COMPLETED ? 'active' : ''}`}
                    onClick={() => onClickHandler(FilterStatus.COMPLETED)}
                >
                    Завершенные
                </li>
            </ul>
        </div>
    );
};

export default Filter;