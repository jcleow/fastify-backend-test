import { SummaryCard } from "../../components/SummaryCard/SummaryCard.tsx";
import styles from "./Summary.module.css";
import "../../assets/primeReactStyles.ts";
import classNames from "classnames/bind";
import { Chart } from "primereact/chart";

const cx = classNames.bind(styles);
const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: "#4bc0c0",
        },
    ],
};

const chartOptions = {
    plugins: {
        title: {
            display: true,
            text: "Inventory Summary",
            font: {
                size: 16,
            },
        },
        legend: {
            position: "bottom",
        },
    },
};

export default function Summary() {
    return (
        <>
            <div className={cx("top-summary-view")}>
                <div className={cx("summary")}>
                    <SummaryCard
                        title="Deal Closed"
                        stats="0"
                        iconClass="pi pi-briefcase"
                        bgColorClass="bg-blue-400"
                        subscript="0% from last month"
                    />
                    <SummaryCard
                        title="Sales Performance"
                        stats="0"
                        iconClass="pi pi-briefcase"
                        bgColorClass="bg-green-400"
                        subscript="0% from last month"
                    />
                    <SummaryCard
                        title="Pending IO"
                        stats="0"
                        bgColorClass="bg-red-400"
                    />
                </div>
            </div>
            <div className={cx("chart-summary-view")}>
                <div className={cx("chart")}>
                    <Chart type="bar" data={chartData} options={chartOptions} />
                </div>
            </div>
        </>
    );
}
