import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const AppLayout = () => {
    return (
        <>
            <Header />
            <div className='w-full flex'>
                <SideMenu />
                <Outlet />
            </div>
        </>
    )
};

export default AppLayout;