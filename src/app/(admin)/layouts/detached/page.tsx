'use client'
import {useEffect} from "react";
import useThemeCustomizer from "@/components/ThemeCustomizer/useThemeCustomizer";
import EcommerceDashboard from "@/app/(admin)/dashboards/ecommerce/page";

const Page = () => {

    const {handleChangeLayoutWidth} = useThemeCustomizer();

    useEffect(() => {
        handleChangeLayoutWidth('detached');

        return () => {
            handleChangeLayoutWidth('fluid');
        }
    }, [])

    return (
        <>
            <EcommerceDashboard/>
        </>
    )
}

export default Page