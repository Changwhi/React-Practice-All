import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavegation from '../components/MainNavigation';

const Roots = () => {
    return <React.Fragment>
        <MainNavegation />
        <main>
            <Outlet />
        </main>
    </React.Fragment>
};

export default Roots;
