import { PrimeReactProvider } from "primereact/api";
import NewSideBar from "../components/NewSideBar";
import Home from "../components/Home";
import styles from "../stylesheets/Root.module.css";
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
                    <NewSideBar />
                </div>
                <div className={cx("main-display")}>
                    <Home />
                </div>
            </div>
        </PrimeReactProvider>
    );
}
