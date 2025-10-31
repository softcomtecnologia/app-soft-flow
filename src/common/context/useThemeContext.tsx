'use client';
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import i18n, { isValidLanguage, Languages } from '@/common/languages/i18n';

const ThemeContext = createContext<any>({});
const THEME_STORAGE_KEY = 'theme_preference';

export const ThemeSettings = {
	layout: {
		type: { vertical: 'vertical', horizontal: 'horizontal' },
		mode: { fluid: 'fluid', boxed: 'boxed', detached: 'detached' },
		menuPosition: { scrollable: 'scrollable', fixed: 'fixed' },
	},
	theme: { light: 'light', dark: 'dark' },
	topbar: {
		theme: { light: 'light', dark: 'dark', brand: 'brand' },
		logo: { hidden: 'fullscreen', show: '' },
	},
	sidebar: {
		theme: { light: 'light', dark: 'dark', brand: 'brand' },
		size: {
			default: 'default',
			compact: 'compact',
			condensed: 'condensed',
			showOnHover: 'sm-hover',
			full: 'full',
			fullscreen: 'fullscreen',
		},
		user: { show: true, hidden: false },
	},
	rightSidebar: { show: true, hidden: false },
};

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useThemeContext must be used within an ThemeProvider');
	}
	return context;
}

function getStoredTheme(defaultTheme: string) {
	if (typeof window === 'undefined') {
		return defaultTheme;
	}
	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	return storedTheme === ThemeSettings.theme.dark || storedTheme === ThemeSettings.theme.light
		? storedTheme
		: defaultTheme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [currentLanguage, setCurrentLanguage] = useState(Languages.EN);

	const [settings, setSettings] = useState(() => {
		const initialTheme = getStoredTheme(ThemeSettings.theme.light);
		return {
			layout: {
				type: ThemeSettings.layout.type.vertical,
				mode: ThemeSettings.layout.mode.fluid,
				menuPosition: ThemeSettings.layout.menuPosition.fixed,
			},
			theme: initialTheme,
			topbar: {
				theme: ThemeSettings.topbar.theme.light,
				logo: ThemeSettings.topbar.logo.show,
			},
			sidebar: {
				theme: ThemeSettings.sidebar.theme.dark,
				size: ThemeSettings.sidebar.size.default,
				user: ThemeSettings.sidebar.user.hidden,
			},
			rightSidebar: ThemeSettings.rightSidebar.hidden,
		};
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem(THEME_STORAGE_KEY, settings.theme);
		}
	}, [settings.theme]);

	const changeLanguage = useCallback((lang: string) => {
		if (isValidLanguage(lang)) {
			i18n.changeLanguage(lang);
			setCurrentLanguage(lang);
		}
	}, []);

	const updateSettings = useCallback(
		(newSettings: any) => {
			setSettings((prev) => ({ ...(prev ?? {}), ...(newSettings ?? {}) }));
		},
		[setSettings]
	);

	const updateLayout = useCallback(
		(newLayout: any) => {
			setSettings((prev) => ({
				...(prev ?? {}),
				layout: { ...(prev ?? {}).layout, ...(newLayout ?? {}) },
			}));
		},
		[setSettings]
	);

	const updateTopbar = useCallback(
		(newTopbar: any) => {
			setSettings((prev) => ({
				...(prev ?? {}),
				topbar: { ...(prev ?? {}).topbar, ...(newTopbar ?? {}) },
			}));
		},
		[setSettings]
	);

	const updateSidebar = useCallback(
		(newSidebar: any) => {
			setSettings((prev) => ({
				...(prev ?? {}),
				sidebar: { ...(prev ?? {}).sidebar, ...(newSidebar ?? {}) },
			}));
		},
		[setSettings]
	);

	return (
		<ThemeContext.Provider
			value={{
				changeLanguage,
				currentLanguage,
				settings,
				updateSettings,
				updateLayout,
				updateTopbar,
				updateSidebar,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
