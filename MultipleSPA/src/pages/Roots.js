import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavegation from '../components/MainNavigation';

const Roots = () => {
    return <React.Fragment>
        <MainNavegation />
        <Outlet />
    </React.Fragment>
};

export default Roots;
