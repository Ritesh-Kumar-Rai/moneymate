import React from 'react'
import AddTransactionModal from '../components/ui/addTransactionModal';

const Dashboard = () => {
    return (
        <div className='w-full bg-slate-100 dark:bg-gray-900 h-full min-h-screen p-5'>
            <h1 className='text-5xl font-bold'>Lorem ipsum dolor sit amet.</h1>
            {/* <button className='bg-indigo-600 text-white dark:bg-indigo-500 rounded-2xl px-3 hover:bg-indigo-500'>click me</button> */}
            <AddTransactionModal />
        </div>
    )
};

export default Dashboard;