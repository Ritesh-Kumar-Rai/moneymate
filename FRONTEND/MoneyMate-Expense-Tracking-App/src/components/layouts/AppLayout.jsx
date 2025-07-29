import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import Footer from './Footer';

const AppLayout = () => {
    return (
        <>
            <Header />
            <main className='w-full flex scroll-smooth'>
                <SideMenu />
                <Outlet />
            </main>
            <Footer />
        </>
    )
};

export default AppLayout;