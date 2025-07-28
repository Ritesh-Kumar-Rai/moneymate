import React from 'react'
import moneyMate_Icon from "../../assets/logoipsum_money_mate_custom_logo.svg";

const Header = () => {
    return (
        <header className='flex items-center justify-between p-2 px-6  bg-slate-100 dark:bg-gray-900 border-b-2 border-slate-200 dark:border-gray-700 sticky top-0 left-0 w-full z-50'>
            <div>
                <img src={moneyMate_Icon} className="dark:invert transition duration-300" alt="moneymate-logo" width={150} />
            </div>
            <div className='flex items-center gap-2'>
                <button onClick={() => document.documentElement.classList.toggle('dark')}
                    className="h-auto w-auto rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <svg className="fill-indigo-800 block size-8 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg className="fill-yellow-500 hidden size-8 dark:block" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </button>

                <select
                    name="Currency"
                    id="base-currency-selector"
                    className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">Please select currency</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="AED">AED</option>
                </select>


            </div>
        </header>
    )
};

export default Header;