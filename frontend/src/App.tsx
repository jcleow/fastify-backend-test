import { PrimeReactProvider } from "primereact/api";
import SideBar from "./layout/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import styles from "./stylesheets/App.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function Root() {
    const value = {
        ripple: true,
    };
    return (
        <PrimeReactProvider value={value}>
            <div className={cx("container")}>
                <div className={cx("sidebar")}>
                    <SideBar />
                </div>
                <div className={cx("main-display")}>
                    <Outlet />
                </div>
            </div>
        </PrimeReactProvider>
    );
}
