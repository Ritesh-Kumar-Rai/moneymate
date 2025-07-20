import React from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { NavLink } from 'react-router-dom';
import AddTransactionSidebar from '../ui/AddTransactionSidebar';

const SideMenu = () => {

    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <>
            <aside className='w-3xs min-w-3xs p-4 border-r-2 border-gray-200 dark:border-gray-900'>
                <nav>
                    {SIDE_MENU_DATA.map((data, index) => (
                        data.type === "link" ?
                            <NavLink to={data.path} key={`${data.id}_${index}`} className={({ isActive }) => `w-full flex items-center gap-4 text-[15px] font-medium py-3 px-6 rounded-lg mb-3 ${isActive && 'bg-violet-500 text-white'}`}>
                                <data.icon className='text-xl font-bold' />
                                {data.label}
                            </NavLink>
                            : <button key={`${data.id}_${index}`} type='button' className='w-full flex items-center gap-4 active:scale-95 active:bg-slate-500 duration-75 transition-bg border-1 border-gray-400 bg-indigo-100 text-[15px] font-bold text-violet-900 dark:bg-gray-700 py-1 px-3 rounded-lg cursor-pointer my-6' onClick={() => setSidebarOpen(true)}><data.icon className='text-xl font-bold' /> {data.label}</button>
                    ))}
                </nav>
            </aside>

            <AddTransactionSidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        </>
    )
};

export default SideMenu;