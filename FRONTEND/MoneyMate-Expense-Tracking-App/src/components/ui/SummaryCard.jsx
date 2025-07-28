import React from 'react'

const SummaryCard = ({ icon, bg_color = 'bg-gray-800', label = '', value_amount = 0 }) => {
    //  card 
    return (
        <div className="total-summary-card flex gap-2 p-3 rounded-2xl shadow-2xl outline-2 outline-slate-400 hover:outline-blue-600 duration-200 transition-outline-color">
            <div className={`w-20 text-4xl p-5 ${bg_color} text-white rounded-full flex place-content-center shadow-2xl`}>
                {icon}
            </div>
            <div className='min-w-50 font-bold px-2 py-1'>
                <dl>
                    <dt class="text-gray-500 text-xl mb-0.5">{label}</dt>
                    <dd class="font-bold text-2xl">${value_amount}</dd>
                </dl>
            </div>
        </div>
    )
};

export default SummaryCard;