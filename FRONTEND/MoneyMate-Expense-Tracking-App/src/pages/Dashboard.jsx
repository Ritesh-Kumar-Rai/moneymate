import React from 'react';
import { FaCreditCard, FaWallet } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import SummaryCard from '../components/ui/SummaryCard';
import GraphChart from '../components/charts/GraphChart';
import CustomPieChart from '../components/charts/CustomPieChart';
import ChartLayout from '../components/charts/ChartLayout';


const Dashboard = () => {
    return (
        <section className='w-full bg-slate-100 dark:bg-gray-900 h-full min-h-screen p-5'>
            <div className="summary-total-container w-full p-10 flex place-content-center items-center flex-wrap gap-5 justify-between shadow-2xl dark:bg-gray-800 rounded-2xl">
                <SummaryCard icon={<FaCreditCard />} bg_color='bg-purple-700' label={"Remaining Balance"} value_amount={2788} />
                <SummaryCard icon={<FaWallet />} bg_color='bg-amber-700' label={"Total Income"} value_amount={3788} />
                <SummaryCard icon={<GiReceiveMoney />} bg_color='bg-red-700' label={"Total Expenses"} value_amount={788} />

            </div>
            {/* <h1 className='text-5xl font-bold'>Lorem ipsum dolor sit amet.</h1> */}
            {/* <CustomPieChart /> */}
            <ChartLayout label_for_graph="Income vs Expense (Last 2 months)" label_for_pie="Expenses by Category" />
            {/* <GraphChart type='graph' /> */}
            {/* <GraphChart type='line' /> */}



        </section>
    )
};

export default Dashboard;
// A12@abcio