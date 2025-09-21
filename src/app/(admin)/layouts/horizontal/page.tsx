'use client'
import {useEffect} from "react";
import useThemeCustomizer from "@/components/ThemeCustomizer/useThemeCustomizer";
import EcommerceDashboard from "@/app/(admin)/dashboards/ecommerce/page";

const Page = () => {

    const {handleChangeLayoutType} = useThemeCustomizer();

    useEffect(() => {
        handleChangeLayoutType('horizontal');

        return () => {
            handleChangeLayoutType('vertical');
        }
    }, [])

    return (
        <>
            <EcommerceDashboard/>
        </>
    )
}

export default Page