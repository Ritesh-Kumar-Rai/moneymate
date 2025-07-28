import React from 'react';
import { FaCreditCard, FaWallet } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import SummaryCard from '../components/ui/SummaryCard';
import GraphChart from '../components/charts/GraphChart';
import CustomPieChart from '../components/charts/CustomPieChart';
import ChartLayout from '../components/charts/ChartLayout';
import Table from '../components/ui/Table';


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

            {/* table for recent transactions */}
            <Table no_of_rows={10} label='Recent Transactions' caption='Recent 10 transactions of both income and expenses' custom_style_class='mt-10' />

            {/* expense-container */}
            <div className='mt-30'>
                <h2>Expenses of Last 2 weeks</h2>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 items-center'>
                    <Table custom_style_class='col-span-2' caption='Expenses of last 2 weeks' transactions_to_show='expense' no_of_rows={10} />
                    <CustomPieChart />
                </div>
            </div>

        </section>
    )
};

export default Dashboard;
// A12@abcio