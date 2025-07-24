import React from 'react'
import GraphChart from './GraphChart';
import CustomPieChart from './CustomPieChart';
import CustomBarChart from './CustomBarChart';

const ChartLayout = ({ label_for_graph, label_for_pie }) => {

    const [chart_type, setChart_Type] = React.useState('line');

    return (
        <div className='mt-30 w-full h-auto flex gap-10 justify-between flex-wrap'>
            <div className='w-[60%]'> {/* This div is for graph charts */}
                <div className='w-full flex items-center justify-between'>
                    <h2>{label_for_graph}</h2>
                    <select
                        name="Graph Type"
                        id="graph-type-selector"
                        onChange={(e) => setChart_Type(e.target.value)}
                        className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="line-graph">Line Graph</option>
                        <option value="area-graph">Area Graph</option>
                        <option value="bar-chart">Bar Chart</option>
                    </select>
                </div>

                {(chart_type === 'bar-chart') ? <CustomBarChart /> : <GraphChart type={chart_type} />}
            </div>
            <div className='w-[30%]'> {/* This div is for pie charts */}
                <div className='w-full flex items-center justify-between'>
                    <h2>{label_for_pie}</h2>
                    <select name="" id=""
                        className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="pie-chart">Pie Chart</option>
                    </select>
                </div>
                <CustomPieChart />
            </div>
        </div>
    )
};

export default ChartLayout;