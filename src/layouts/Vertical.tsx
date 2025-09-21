'use client';
import {lazy, Suspense, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {useToggle, useViewport} from '@/hooks';
import {changeHTMLAttribute} from '@/utils';

import {ThemeSettings, useThemeContext} from '@/common/context';
import type {ChildrenType} from '@/types/component-props';
import FallbackLoading from '@/components/FallbackLoading';
import {usePathname} from "next/navigation";

const Topbar = lazy(() => import('./Topbar'));
const LeftSidebar = lazy(() => import('./LeftSidebar'));
const Footer = lazy(() => import('./Footer'));
const RightSidebar = lazy(() => import('./RightSidebar'));

export default function VerticalLayout({children}: ChildrenType) {
    const {settings, updateSidebar, sideBarType} = useThemeContext();

    const {width} = useViewport();
    const [isMenuOpened, toggleMenu] = useToggle();

    /*
     * layout defaults
     */
    useEffect(() => {
        changeHTMLAttribute('data-bs-theme', settings.theme);
    }, [settings.theme]);

    useEffect(() => {
        changeHTMLAttribute('data-layout-mode', settings.layout.mode);
    }, [settings.layout.mode]);

    useEffect(() => {
        changeHTMLAttribute('data-menu-color', settings.sidebar.theme);
    }, [settings.sidebar.theme]);

    useEffect(() => {
        changeHTMLAttribute('data-topbar-color', settings.topbar.theme);
    }, [settings.topbar.theme]);

    useEffect(() => {
        changeHTMLAttribute('data-layout-position', settings.layout.menuPosition);
    }, [settings.layout.menuPosition]);

    useEffect(() => {
        changeHTMLAttribute('data-sidenav-size', settings.sidebar.size);

        const backdrop = document.getElementById('custom-backdrop');
        if (backdrop && settings.sidebar.size != 'full') backdrop.remove();

        return () => {
            document.getElementsByTagName('html')[0].removeAttribute('data-sidenav-size');
        };
    }, [settings.sidebar.size]);

    useEffect(() => {
        changeHTMLAttribute('data-sidenav-user', settings.sidebar.user);

        return () => {
            document.getElementsByTagName('html')[0].removeAttribute('data-sidenav-user');
        };
    }, [settings.sidebar.user]);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        toggleMenu();
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    useEffect(() => {

        if (width < 768) {
            updateSidebar({size: ThemeSettings.sidebar.size.full});
        } else if (width < 1140) {
            updateSidebar({size: ThemeSettings.sidebar.size.condensed});
        } else if (width >= 1140) {
            updateSidebar({size: ThemeSettings.sidebar.size.default});
        }
    }, [width]);

    const isCondensed = settings.sidebar.size === ThemeSettings.sidebar.size.condensed;
    const topbarDark = settings.theme === ThemeSettings.theme.dark || settings.topbar.theme !== ThemeSettings.topbar.theme.light;
    const leftbarDark = settings.theme === ThemeSettings.theme.dark || settings.sidebar.theme !== ThemeSettings.sidebar.theme.light;

    return (
        <div className="wrapper">
            <Suspense fallback={<FallbackLoading/>}>
                <Topbar toggleMenu={openMenu} topbarDark={topbarDark}/>
            </Suspense>

            <Suspense fallback={<FallbackLoading/>}>
                <LeftSidebar isCondensed={isCondensed} leftbarDark={leftbarDark} hideUserProfile={true}/>
            </Suspense>

            <div className="content-page">
                <div className="content">
                    <Container fluid>
                        <Suspense fallback={<FallbackLoading/>}>{children}</Suspense>
                    </Container>
                </div>
                <Suspense fallback={<FallbackLoading/>}>
                    <Footer/>
                </Suspense>
            </div>

            <Suspense fallback={<FallbackLoading/>}>
                <RightSidebar/>
            </Suspense>
        </div>
    );
}
