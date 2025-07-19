import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import Footer from './Footer';

const AppLayout = () => {
    return (
        <>
            <Header />
            <div className='w-full flex'>
                <SideMenu />
                <Outlet />
            </div>
            <Footer />
        </>
    )
};

export default AppLayout;