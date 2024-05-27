// import SideBar from "../components/SideBar"
import { PrimeReactProvider } from "primereact/api";
import SideBar from "../components/SideBar";
import NewSideBar from "../components/NewSideBar";
import Home from "../components/Home";
import styles from "../stylesheets/Main.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function Root() {
    const value = {
        ripple: true,
    };
    return (
        <PrimeReactProvider value={value}>
            {/* <SideBar /> */}
            <div className={cx("container")}>
                <div className={cx("sidebar")}>
                    <NewSideBar />
                </div>
                <div className={cx("main-display")}>
                    <Home />
                </div>
            </div>
        </PrimeReactProvider>
    );
}
