import { GiPayMoney } from "react-icons/gi";
import { TbCategory2 } from "react-icons/tb";
import { SiDatabricks } from "react-icons/si";
import SummaryCard from "../components/ui/SummaryCard";
import GraphChart from "../components/charts/GraphChart";
import { useEffect, useState } from "react";
import CustomBarChart from "../components/charts/CustomBarChart";
import CustomPieChart from "../components/charts/CustomPieChart";
import Table from "../components/ui/Table";

const ExpensePage = () => {

    const [chart_type, setChart_Type] = useState('line');
    const [loadingExpenses, setLoadingExpenses] = useState(true);
    const [loadingCategory, setLoadingCategory] = useState(true);
    const [loadingEntry, setLoadingEntry] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoadingExpenses(false);
        }, 5000);
        setTimeout(() => {
            setLoadingCategory(false);
        }, 10000);
        setTimeout(() => {
            setLoadingEntry(false);
        }, 15000);
    }, []);

    return (
        <section id="expense-page" className="w-full min-h-screen dark:bg-gray-900 p-5">
            <div className="summary-total-container w-full p-10 flex justify-between items-center flex-wrap gap-5 shadow-2xl dark:bg-gray-800 rounded-2xl">
                <SummaryCard icon={<GiPayMoney />} bg_color='bg-red-700' label={"Total Expenses"} value_amount={2788} isLoading={loadingExpenses} />
                <SummaryCard icon={<TbCategory2 />} bg_color='bg-amber-700' label={"Highest Category"} isMoneyType={false} value_amount="Electronics" isLoading={loadingCategory} />
                <SummaryCard icon={<SiDatabricks />} bg_color='bg-sky-700' label={"Total Entries"} isMoneyType={false} value_amount={10} isLoading={loadingEntry} />
            </div>

            <div className='w-full mt-10 flex items-center justify-between'>
                <h1>Total Expense Trends</h1>
                <select
                    name="Graph Type"
                    id="graph-type-selector"
                    value={chart_type}
                    onChange={(e) => setChart_Type(e.target.value)}
                    className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="line-graph">Line Graph</option>
                    <option value="area-graph">Area Graph</option>
                    <option value="bar-chart">Bar Chart</option>
                    <option value="pie-chart">Pie Chart</option>
                </select>
            </div>
            {/* chart section */}
            <div className="mt-5 w-full">
                <div className="">
                    <select name="" id="" className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Pick a Range of Trend</option>
                        <option value="3week">Last 3 week</option>
                        <option value="1month">Last 1 month</option>
                        <option value="3month">Last 3 month</option>
                        <option value="6month">Last 6 month</option>
                        <option value="1year">Last 1 year</option>
                        <option value="3year">Last 3 year</option>
                        <option value="6year">Last 5 year</option>
                        <option value="all-time">All Time</option>
                    </select>
                </div>
                <div className="flex items-center place-content-center">
                    {(chart_type === "bar-chart") ? <CustomBarChart /> : ((chart_type === "pie-chart") ? <CustomPieChart /> : <GraphChart type={chart_type} />)}
                </div>
            </div>
            <hr className="my-16 border-2 border-gray-300 dark:border-slate-600 rounded-xs" />
            {/* table filter section */}
            <div className="mt-10 flex items-center place-content-end">
                <select name="" id="" className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="all-categories" selected>All Categories</option>
                    <option value="food">Food & Dining</option>
                    <option value="groceries">Groceries</option>
                    <option value="restaurant">Restaurants</option>
                    <option value="cafe">Cafes & Coffee Shops</option>
                    <option value="transportation">Transportation</option>
                    <option value="fuel">Fuel & Gas</option>
                    <option value="public_transport">Public Transport</option>
                    <option value="shopping">Shopping</option>
                    <option value="clothing">Clothing & Apparel</option>
                    <option value="electronics">Electronics</option>
                    <option value="health">Health & Medical</option>
                    <option value="medication">Medication & Pharmacy</option>
                    <option value="rent">Rent & Housing</option>
                    <option value="utilities">Utilities (Electricity, Water, Gas)</option>
                    <option value="insurance">Insurance</option>
                    <option value="education">Education & Tuition</option>
                    <option value="entertainment">Entertainment & Leisure</option>
                    <option value="subscriptions">Subscriptions (Streaming, Magazines)</option>
                    <option value="travel">Travel & Vacation</option>
                    <option value="personal_care">Personal Care & Toiletries</option>
                    <option value="gifts">Gifts & Donations</option>
                    <option value="kids">Kids & Parenting</option>
                    <option value="pets">Pets & Pet Care</option>
                    <option value="others">Others</option>
                </select>
            </div>
            {/* table section */}
            <Table no_of_rows={10} label="All Time Expenses" caption="The list of all expenses made by you" custom_style_class="mt-5" transactions_to_show="expense" />
        </section>
    );
};

export default ExpensePage;