import { IoMdClose } from "react-icons/io";

const AddTransactionSidebar = ({ isOpen, closeSidebar }) => {



    return (
        <>
            {/* sidebar */}
            {/* classname for main div of sidebar: bg-white dark:bg-gray-900 */}
            <aside id="add-transaction-sidebar"
                className={`fixed top-0 right-0 h-full w-full md:w-[400px] dark:bg-transparent bg-white opacity-95 backdrop-blur-xl shadow-xl z-50 transform transition-transform duration-300 overflow-y-scroll ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        Add Transaction
                    </h2>
                    <button
                        onClick={closeSidebar}
                        className="text-3xl text-gray-500 dark:text-gray-400 hover:text-red-600 font-bold cursor-pointer transition-colors"
                    >
                        <IoMdClose />
                    </button>

                </div>

                {/* Form */}
                <form className="p-5 space-y-4">
                    <div className="form-control w-full">
                        <label className="mb-2 block font-bold text-xl" htmlFor="date">Pick a date</label>
                        <input type="date" name="" id="date" placeholder="pick a date" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
                    </div>

                    <div className="form-control w-full">
                        <label className="mb-2 block font-bold text-xl" htmlFor="payee">Payee</label>
                        <input
                            id="payee"
                            type="text"
                            placeholder="Name of Payee or Description"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="mb-2 block font-bold text-xl" htmlFor="transaction-type">Transaction Type</label>
                        <select id="transaction-type" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                            <option value="income" selected>Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="mb-2 block font-bold text-xl" htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="Amount"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="mb-2 block font-bold text-xl" htmlFor="currency-type">Currency Type</label>
                        <select id="currency-type" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                            <option value="">Select Currency</option>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="AED">AED</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="mb-2 block font-bold text-xl" htmlFor="category">Category</label>
                        <select id="category" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                            <option value="">Select Category</option>
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

                    <div className="form-control w-full">
                        <label className="mb-2 block font-bold text-xl" htmlFor="notes">Notes</label>
                        <textarea
                            id="notes"
                            placeholder="Notes (optional)"
                            rows="3"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition cursor-pointer"
                    >
                        Save Transaction
                    </button>
                </form>
            </aside>
        </>
    )
}

export default AddTransactionSidebar;