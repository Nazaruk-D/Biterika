import React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import { Path } from '../enums/path';
import Root from "../app/Root/Root";
import MainPage from "../features/MainPage/MainPage";

const routes = createRoutesFromElements(
    <Route path={Path.Root} element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<div>Page not found</div>} />,
    </Route>,
);

export default routes;
