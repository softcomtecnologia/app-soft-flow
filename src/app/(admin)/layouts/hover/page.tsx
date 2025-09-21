'use client'
import {useEffect} from "react";
import useThemeCustomizer from "@/components/ThemeCustomizer/useThemeCustomizer";
import EcommerceDashboard from "@/app/(admin)/dashboards/ecommerce/page";

const Page = () => {

    const {handleChangeSideBarType} = useThemeCustomizer();

    useEffect(() => {
        handleChangeSideBarType('sm-hover');

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