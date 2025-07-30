import { GiPayMoney } from "react-icons/gi";
import { TbCategory2 } from "react-icons/tb";
import { SiDatabricks } from "react-icons/si";
import SummaryCard from "../components/ui/SummaryCard";
import GraphChart from "../components/charts/GraphChart";
import { useState } from "react";
import CustomBarChart from "../components/charts/CustomBarChart";

const ExpensePage = () => {

    const [chart_type, setChart_Type] = useState('line');

    return (
        <section id="expense-page" className="w-full min-h-screen dark:bg-gray-900 p-5">
            <div className="summary-total-container w-full p-10 flex justify-between items-center flex-wrap gap-5 shadow-2xl dark:bg-gray-800 rounded-2xl">
                <SummaryCard icon={<GiPayMoney />} bg_color='bg-red-700' label={"Total Expenses"} value_amount={2788} />
                <SummaryCard icon={<TbCategory2 />} bg_color='bg-amber-700' label={"Highest Category"} value_amount={3788} />
                <SummaryCard icon={<SiDatabricks />} bg_color='bg-sky-700' label={"Total Entries"} value_amount={788} />
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
                </select>
            </div>
            <div className="mt-5 w-full">
                <div className="">
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
                <div className="flex items-center place-content-center">
                    {(chart_type === "bar-chart") ? <CustomBarChart /> : <GraphChart type={chart_type} />}
                </div>
            </div>
        </section>
    );
};

export default ExpensePage;