import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export function RooyLayout(){
return (
    <>
    <MainHeader />
    <Outlet />
    </>
)
}