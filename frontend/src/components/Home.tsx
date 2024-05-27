import { SummaryCard } from "./SummaryCard";
import summaryStyles from "../stylesheets/Summary.module.css";
import homeStyles from "../stylesheets/Home.module.css";
import "../stylesheets/primeReactStyles.ts";
import classNames from "classnames/bind";

const cx = classNames.bind(summaryStyles);
const cxHome = classNames.bind(homeStyles);

export default function Home() {
    return (
        <div className={cxHome("top-summary-view")}>
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
    );
}
