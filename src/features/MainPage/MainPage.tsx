import React from 'react';
import {useGetCardsQuery} from "../../store/api/cardAPISlice";
import SideBar from "../SideBar/SideBar";
import Title from "../../components/Title/Title";
import Filter from "../../components/Filter/Filter";
import Table from "../Table/Table";

const MainPage = () => {
    const {data} = useGetCardsQuery({})
    const cards = data ? data.campaigns : []

    return (
        <main className="main flex-column" style={{width: '100%'}}>
            <section className="lk-section flex-column flex-auto">
                <div className="container flex-column flex-auto">
                    <div className="lk-wrapper full">
                        <SideBar/>
                        <div className="lk-content flex-column flex-auto">
                            <Title title={"Кампании"}/>
                            <div className="filter-tabs js-tabs mt-2 mt-lg-25">
                                <Filter/>
                                <Table data={cards} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainPage;