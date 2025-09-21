'use client'
import {useEffect} from "react";
import useThemeCustomizer from "@/components/ThemeCustomizer/useThemeCustomizer";
import EcommerceDashboard from "@/app/(admin)/dashboards/ecommerce/page";

const Page = () => {

    const {handleChangeLayoutTheme} = useThemeCustomizer();

    useEffect(() => {
        handleChangeLayoutTheme('dark');

        return () => {
            handleChangeLayoutTheme('light');
        }
    }, [])

    return (
        <>
            <EcommerceDashboard/>
        </>
    )
}

export default Page