'use client';
import type { ChildrenType } from '@/types/component-props';
import type { User } from '@/types/User';
import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';
import { createContext, useContext, useState } from 'react';

export type AuthContextType = {
	user: User | undefined;
	isAuthenticated: boolean | Promise<boolean>;
	saveSession: (session: User) => void;
	removeSession: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuthContext must be used within an AuthProvider');
	}
	return context;
}

const authSessionKey = '_HYPER_AUTH_KEY_';

export function AuthProvider({ children }: ChildrenType) {
	const getSession = (): AuthContextType['user'] => {
		const fetchedCookie = getCookie(authSessionKey)?.toString();
		if (!fetchedCookie) return;
		else return JSON.parse(fetchedCookie);
	};

	const [user, setUser] = useState<User | undefined>(getSession());

	const saveSession = (user: User) => {
		setCookie(authSessionKey, JSON.stringify(user));
		setUser(user);
	};

	const removeSession = () => {
		deleteCookie(authSessionKey);
		setUser(undefined);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: hasCookie(authSessionKey),
				saveSession,
				removeSession,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
