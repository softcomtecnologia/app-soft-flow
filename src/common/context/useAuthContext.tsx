'use client';
import type { ChildrenType } from '@/types/component-props';
import type { User } from '@/types/User';
import { deleteCookie, getCookie, setCookie, useGetCookie } from 'cookies-next';
import { createContext, useContext, useState, useEffect } from 'react';

export type AuthContextType = {
	user: User | undefined;
	isAuthenticated: boolean;
	saveSession: (auth: boolean) => void;
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

const authSessionKey = 'access_token';

export function AuthProvider({ children }: ChildrenType) {

	const getSession = (): User | undefined => {
		const fetchedCookie = getCookie(authSessionKey)?.toString();
		if (!fetchedCookie) return undefined;
		else return JSON.parse(fetchedCookie);
	};

	const [user, setUser] = useState<User | undefined>(getSession());
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const checkAuth = getCookie(authSessionKey) !== undefined;
		setIsAuthenticated(checkAuth);
	}, []);

	const saveSession = (auth: boolean) => {
		setIsAuthenticated(auth);
	};

	const removeSession = () => {
		deleteCookie(authSessionKey);
		setUser(undefined);
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: isAuthenticated,
				saveSession,
				removeSession,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

