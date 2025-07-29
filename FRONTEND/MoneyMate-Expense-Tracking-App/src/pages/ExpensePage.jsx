import { GiPayMoney } from "react-icons/gi";
import { TbCategory2 } from "react-icons/tb";
import { SiDatabricks } from "react-icons/si";
import SummaryCard from "../components/ui/SummaryCard";

const ExpensePage = () => {
    return (
        <section className="w-full min-h-screen dark:bg-gray-900 p-5">
            <div className="summary-total-container w-full p-10 flex justify-between items-center flex-wrap gap-5 shadow-2xl dark:bg-gray-800 rounded-2xl">
                <SummaryCard icon={<GiPayMoney />} bg_color='bg-red-700' label={"Total Expenses"} value_amount={2788} />
                <SummaryCard icon={<TbCategory2 />} bg_color='bg-amber-700' label={"Highest Category"} value_amount={3788} />
                <SummaryCard icon={<SiDatabricks />} bg_color='bg-sky-700' label={"Total Entries"} value_amount={788} />
            </div>
        </section>
    );
};

export default ExpensePage;