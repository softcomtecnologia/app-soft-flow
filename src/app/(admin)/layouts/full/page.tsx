'use client'
import {useEffect} from "react";
import useThemeCustomizer from "@/components/ThemeCustomizer/useThemeCustomizer";
import EcommerceDashboard from "@/app/(admin)/dashboards/ecommerce/page";

const Page = () => {

    const {handleChangeSideBarType} = useThemeCustomizer();

    useEffect(() => {
        handleChangeSideBarType('full');
        document.getElementsByTagName('html')[0].classList.remove('sidebar-enable');

        return () => {
            handleChangeSideBarType('default');
        }
    }, [])

    return (
        <>
            <EcommerceDashboard/>
        </>
    )
}

export default Page