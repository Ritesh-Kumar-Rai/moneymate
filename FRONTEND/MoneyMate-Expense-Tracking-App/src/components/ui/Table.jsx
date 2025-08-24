import { IoMdMore } from "react-icons/io";
import { CgSwap } from "react-icons/cg";
import { LuTrendingDown, LuTrendingUp } from "react-icons/lu";

const Table = ({ no_of_rows = 5, label = '', caption = '', custom_style_class = '', transactions_to_show = 'both' }) => {

    // `transactions_to_show` parameter is used to display what kind of transactions to be displayed whether income/expense or both..

    const transaction_entries = [
        {
            date: "2024-04-01",
            payee: "Supermarket",
            transaction_type: "expense",
            amount: {
                amount_value: "$45",
                currency_type: "usd",
            },
            category: "Groceries",
            notes: "Weekly shopping",
        },
        {
            date: "2024-04-02",
            payee: "Freelance Client",
            transaction_type: "income",
            amount: {
                amount_value: "$500",
                currency_type: "usd",
            },
            category: "Work",
            notes: "Website design project",
        },
        {
            date: "2024-04-03",
            payee: "Electric Company",
            transaction_type: "expense",
            amount: {
                amount_value: "$120",
                currency_type: "usd",
            },
            category: "Utilities",
            notes: "Monthly bill",
        },
        {
            date: "2024-04-04",
            payee: "Coffee Shop",
            transaction_type: "expense",
            amount: {
                amount_value: "$7",
                currency_type: "usd",
            },
            category: "Food & Drinks",
            notes: "Morning coffee",
        },
        {
            date: "2024-04-05",
            payee: "Salary",
            transaction_type: "income",
            amount: {
                amount_value: "$3000",
                currency_type: "usd",
            },
            category: "Salary",
            notes: "April salary",
        },
        {
            date: "2024-04-06",
            payee: "Online Store",
            transaction_type: "expense",
            amount: {
                amount_value: "$80",
                currency_type: "usd",
            },
            category: "Shopping",
            notes: "New shoes",
        },
        {
            date: "2024-04-07",
            payee: "Gym Membership",
            transaction_type: "expense",
            amount: {
                amount_value: "$50",
                currency_type: "usd",
            },
            category: "Health & Fitness",
            notes: "Monthly fee",
        },
        {
            date: "2024-04-08",
            payee: "Tax Refund",
            transaction_type: "income",
            amount: {
                amount_value: "$200",
                currency_type: "usd",
            },
            category: "Refunds",
            notes: "Tax refund for 2023",
        },
        {
            date: "2024-04-09",
            payee: "Bookstore",
            transaction_type: "expense",
            amount: {
                amount_value: "$30",
                currency_type: "usd",
            },
            category: "Education",
            notes: "Books for the course",
        },
        {
            date: "2024-04-10",
            payee: "Car Service",
            transaction_type: "expense",
            amount: {
                amount_value: "$150",
                currency_type: "usd",
            },
            category: "Transport",
            notes: "Oil change and maintenance",
        },
        {
            date: "2024-04-11",
            payee: "Dividend",
            transaction_type: "income",
            amount: {
                amount_value: "$60",
                currency_type: "usd",
            },
            category: "Investments",
            notes: "Quarterly dividend",
        },
        {
            date: "2024-04-12",
            payee: "Restaurant",
            transaction_type: "expense",
            amount: {
                amount_value: "$70",
                currency_type: "usd",
            },
            category: "Food & Drinks",
            notes: "Dinner with friends",
        },
        {
            date: "2024-04-13",
            payee: "Insurance Company",
            transaction_type: "expense",
            amount: {
                amount_value: "$200",
                currency_type: "usd",
            },
            category: "Insurance",
            notes: "Health insurance premium",
        },
        {
            date: "2024-04-14",
            payee: "Gift Shop",
            transaction_type: "expense",
            amount: {
                amount_value: "$45",
                currency_type: "usd",
            },
            category: "Gifts",
            notes: "Birthday gift",
        },
        {
            date: "2024-04-15",
            payee: "Investment Bank",
            transaction_type: "income",
            amount: {
                amount_value: "$150",
                currency_type: "usd",
            },
            category: "Investments",
            notes: "Interest income",
        },
    ];

    return (
        <div className={`overflow-x-scroll w-full ${custom_style_class}`}>
            {label.length > 0 && <h2>{label}</h2>}
            <table className="mt-5 min-w-[1200px] w-full table-auto border-collapse border border-gray-400 bg-slate-200 dark:bg-gray-800 rounded overflow-hidden outline-1 outline-dashed outline-slate-400 shadow-2xl">
                <caption className="caption-bottom mt-3 text-sm">{caption}</caption>
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

                    {transaction_entries.map((each_entry, index) => {
                        if (index >= no_of_rows) {
                            return;
                        }

                        if (transactions_to_show === 'expense') {
                            if (each_entry.transaction_type === 'income') {
                                return;
                            }
                        }

                        return (<tr key={index}>
                            <td className="border border-gray-600 px-3 py-2">{each_entry.date}</td>
                            <td className="border border-gray-600 px-3 py-2">{each_entry.payee}</td>
                            <td className="border border-gray-600 px-3 py-2">{each_entry.category}</td>
                            {/* amount table-data column [user-typed] */}
                            <td className="border-1 border-gray-600 px-3 py-2 text-center">
                                <div className="flex">
                                    <span className={`flex items-center gap-2  m-auto ${each_entry.transaction_type === 'income' ? "bg-green-100 text-green-500 dark:bg-green-400" : "bg-red-100 text-red-500 dark:bg-red-400"} px-1 rounded`}>
                                        <h6 className="text-sm">{each_entry.transaction_type === 'income' ? '+' : '-'} {each_entry.amount.amount_value} ({each_entry.amount.currency_type})</h6>
                                        {each_entry.transaction_type === 'income' ? <LuTrendingUp /> : <LuTrendingDown />}
                                    </span>
                                </div>
                            </td>
                            {/* converted amount table-data column [system(frontend)-converted] */}
                            <td className="border border-gray-600 px-3 py-2 text-center relative">
                                <button type="button" className="absolute left-[-7%] rounded-2xl bg-indigo-800 hover:bg-indigo-500 active:scale-90 text-white w-[50px] text-center cursor-pointer transition-scale-bg duration-200 will-change-transform select-none" title="swap currency"><CgSwap className="text-2xl m-auto" /> </button>
                                $890373
                            </td>
                            <td className="border border-gray-600 px-3 py-2 text-center"><IoMdMore className="m-auto cursor-pointer text-2xl hover:bg-gray-300 dark:hover:bg-gray-500 rounded" /></td>
                        </tr>);
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default Table;