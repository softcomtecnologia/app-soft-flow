'use client';
import { NotificationProvider, ThemeProvider } from '@/common';
import { configureFakeBackend } from '@/common/api';
import { AuthProvider } from '@/common/context/useAuthContext';
import type { ChildrenType } from '@/types/component-props';
import { useEffect } from 'react';
import ActiveCaseIndicator from '@/components/ActiveCaseIndicator';

configureFakeBackend();
const AppProvidersWrapper = ({ children }: ChildrenType) => {
	useEffect(() => {
		const splashElement = document.querySelector<HTMLDivElement>('#__next_splash');
		const splashScreen = document.querySelector('#splash-screen');

		if (!splashElement || !splashScreen) return;

		const handleMutations = (mutationsList: MutationRecord[]) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'childList' && splashElement.hasChildNodes()) {
					splashScreen.classList.add('remove');
				}
			}
		};
		const observer = new MutationObserver(handleMutations);
		observer.observe(splashElement, { childList: true, subtree: true });
		if (splashElement.hasChildNodes()) {
			splashScreen.classList.add('remove');
		}

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<AuthProvider>
				<ThemeProvider>
					<NotificationProvider>
						{children}
						<ActiveCaseIndicator />
					</NotificationProvider>
				</ThemeProvider>
			</AuthProvider>
		</>
	);
};
export default AppProvidersWrapper;
