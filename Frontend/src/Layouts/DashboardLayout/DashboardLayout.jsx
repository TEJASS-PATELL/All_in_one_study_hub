import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../Loading";
import Sidebar from "./Sidebar";
import "./Sidebar.css"
const DashboardLayout = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") return <Loading />;

    return (
        <div className="dashboard-container">
            <Sidebar />

            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
