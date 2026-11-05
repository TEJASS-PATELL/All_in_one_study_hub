import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../Home/Loading";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import "../../layouts/Dashboard/DashboardTheme.css";

const DashboardLayout = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") return <Loading />;

    return (
        <div id="dashboard-root" className="dashboard-container">
            <Sidebar />

            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
