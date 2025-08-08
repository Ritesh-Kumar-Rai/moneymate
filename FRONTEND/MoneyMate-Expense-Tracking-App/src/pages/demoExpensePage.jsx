// src/components/Dashboard.jsx
import { useState } from "react";
import {
    PieChart, Pie, Cell,
    LineChart, Line,
    BarChart, Bar,
    Tooltip, Legend,
    ResponsiveContainer
} from "recharts";

// Dummy Data
const pieData = [
    { category: "Food", amount: 350 },
    { category: "Bills", amount: 500 },
    { category: "Travel", amount: 200 },
    { category: "Entertainment", amount: 150 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const lineData = [
    { date: "Jul 1", income: 2000, expense: 1500 },
    { date: "Jul 2", income: 1800, expense: 1600 },
    { date: "Jul 3", income: 2100, expense: 1800 },
    { date: "Jul 4", income: 1900, expense: 1700 },
];

const barData = [
    { week: "Week 1", income: 6000, expense: 4500 },
    { week: "Week 2", income: 5800, expense: 4700 },
    { week: "Week 3", income: 6200, expense: 4900 },
    { week: "Week 4", income: 6400, expense: 5100 },
];

const transactions = [
    { date: "2025-07-21", category: "Food", description: "Groceries", amount: 250, type: "Expense" },
    { date: "2025-07-22", category: "Transport", description: "Cab ride", amount: 100, type: "Expense" },
    { date: "2025-07-22", category: "Salary", description: "Monthly Income", amount: 3000, type: "Income" },
];

export default function ExpensePage() {
    console.log('expense page ')
    return (
        <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen w-full">

            {/* 🧾 Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Remaining Balance" amount="₹4,300" />
                <Card title="Total Income" amount="₹12,800" />
                <Card title="Total Expense" amount="₹8,500" />
            </div>

            {/* 📈 Charts Overview */}
            <section className="flex flex-col md:flex-row gap-6">

                {/* Left: Line + Bar */}
                <div className="md:w-2/3 space-y-6">
                    <ChartCard title="Income vs Expense (Last 4 Days)">
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={lineData}>
                                <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={2} />
                                <Line type="monotone" dataKey="expense" stroke="#ff8042" strokeWidth={2} />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Weekly Overview (Income/Expense)">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={barData}>
                                <Bar dataKey="income" fill="#82ca9d" />
                                <Bar dataKey="expense" fill="#ff8042" />
                                <Tooltip />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                {/* Right: Pie Chart */}
                <div className="md:w-1/3">
                    <ChartCard title="Expenses by Category">
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="amount"
                                    nameKey="category"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>
            </section>

            {/* 📄 Transactions Table */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx, i) => (
                                <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2">{tx.date}</td>
                                    <td className="px-4 py-2">{tx.category}</td>
                                    <td className="px-4 py-2">{tx.description}</td>
                                    <td className="px-4 py-2">₹{tx.amount}</td>
                                    <td className="px-4 py-2">{tx.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

function Card({ title, amount }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-2xl font-bold">{amount}</p>
        </div>
    );
}

function ChartCard({ title, children }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {children}
        </div>
    );
}
