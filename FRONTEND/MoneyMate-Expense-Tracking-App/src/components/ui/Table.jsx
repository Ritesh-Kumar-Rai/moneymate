import { IoMdMore } from "react-icons/io";
import { CgSwap } from "react-icons/cg";

const Table = () => {
    return (
        <div className="mt-10 w-full">
            <h2>Recent Transactions</h2>
            <table className="mt-5 w-full table-auto border-collapse border border-gray-400 bg-slate-200 dark:bg-gray-800 rounded overflow-hidden outline-1 outline-dashed outline-slate-400 shadow-2xl">
                <caption className="caption-bottom mt-3 text-sm">Recent 10 transactions of both income and expenses</caption>
                <thead className="border-b-2 border-slate-400">
                    <tr>
                        <th className="border border-gray-600 px-3 py-2">Date</th>
                        <th className="border border-gray-600 px-3 py-2">Payee</th>
                        <th className="border border-gray-600 px-3 py-2">Category</th>
                        <th className="border border-gray-600 px-3 py-2 text-center">Amount (USD)</th>
                        <th className="border border-gray-600 px-3 py-2 text-center">Converted Amount (INR) </th>
                        <th className="border border-gray-600 px-3 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-600 px-3 py-2">23/7/2022</td>
                        <td className="border border-gray-600 px-3 py-2">HDFC Credit Card Bill</td>
                        <td className="border border-gray-600 px-3 py-2">Utilies (Bank Bill)</td>
                        <td className="border border-gray-600 px-3 py-2 text-center">$7843</td>
                        <td className="border border-gray-600 px-3 py-2 text-center relative">
                            <button type="button" className="absolute left-[-7%] rounded-2xl bg-indigo-800 hover:bg-indigo-500 active:scale-90 text-white w-[50px] text-center cursor-pointer transition-scale-bg duration-200 will-change-transform select-none" title="swap currency"><CgSwap className="text-2xl m-auto" /> </button>
                            $890373
                        </td>
                        <td className="border border-gray-600 px-3 py-2 text-center"><IoMdMore className="m-auto cursor-pointer text-2xl hover:bg-gray-500 rounded" /></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-600 px-3 py-2">23/7/2022</td>
                        <td className="border border-gray-600 px-3 py-2">HDFC Credit Card Bill</td>
                        <td className="border border-gray-600 px-3 py-2">Utilies (Bank Bill)</td>
                        <td className="border border-gray-600 px-3 py-2 text-center">$7843</td>
                        <td className="border border-gray-600 px-3 py-2 text-center relative">
                            <button type="button" className="absolute left-[-7%] rounded-2xl bg-indigo-800 hover:bg-indigo-500 active:scale-90 text-white w-[50px] text-center cursor-pointer transition-scale-bg duration-200 will-change-transform select-none" title="swap currency"><CgSwap className="text-2xl m-auto" /> </button>
                            $890373
                        </td>
                        <td className="border border-gray-600 px-3 py-2 text-center"><IoMdMore className="m-auto cursor-pointer text-2xl hover:bg-gray-500 rounded" /></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-600 px-3 py-2">23/7/2022</td>
                        <td className="border border-gray-600 px-3 py-2">HDFC Credit Card Bill</td>
                        <td className="border border-gray-600 px-3 py-2">Utilies (Bank Bill)</td>
                        <td className="border border-gray-600 px-3 py-2 text-center">$7843</td>
                        <td className="border border-gray-600 px-3 py-2 text-center relative">
                            <button type="button" className="absolute left-[-7%] rounded-2xl bg-indigo-800 hover:bg-indigo-500 active:scale-90 text-white w-[50px] text-center cursor-pointer transition-scale-bg duration-200 will-change-transform select-none" title="swap currency"><CgSwap className="text-2xl m-auto" /> </button>
                            $890373
                        </td>
                        <td className="border border-gray-600 px-3 py-2 text-center"><IoMdMore className="m-auto cursor-pointer text-2xl hover:bg-gray-500 rounded" /></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Table;