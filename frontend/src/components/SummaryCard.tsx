import { Card } from "primereact/card";
import styles from "../stylesheets/Summary.module.css";
import classNames from "classnames/bind";
import "../stylesheets/primeReactStyles.ts";
const cx = classNames.bind(styles);

interface SummaryCardProps {
    title: string;
    stats: string;
    subscript?: string;
    iconClass?: string;
    bgColorClass?: string;
}

export function SummaryCard({
    title,
    stats,
    subscript,
    iconClass,
    bgColorClass = "bg-blue-100",
}: SummaryCardProps) {
    return (
        <Card className={bgColorClass}>
            <div className={cx("summary-card")}>
                <h1 className="text-white">{title}</h1>
                <div className={cx("summary-card__stats")}>
                    <h2 className="text-white">{stats}</h2>
                </div>
                <div>
                    <div className={cx("summary-card__subscript-container")}>
                        <div className={cx("summary-card__icon")}>
                            {iconClass && (
                                <i
                                    className={cx(`${iconClass} text-white`)}
                                    style={{ fontSize: "1.5rem" }}
                                />
                            )}
                        </div>
                        {subscript && <p>{subscript}</p>}
                    </div>
                </div>
            </div>
        </Card>
    );
}
