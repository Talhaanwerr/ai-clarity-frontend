import {Route, Routes, useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import DashboardView from "../views/dashboard/DashboardView";
import DashboardLayout from "../layout/DashboardLayout";

function RouteConfig() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <Routes>
            <Route
                element={
                        <DashboardLayout>

                        </DashboardLayout>
                }
            >
                <Route path={'/'} element={<DashboardView/>}></Route>


            </Route>

        </Routes>
    )
}

export default RouteConfig