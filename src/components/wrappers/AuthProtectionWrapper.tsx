'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { useAuthContext } from '@/common/context/useAuthContext';
import type { ChildrenType } from '@/types/component-props';
import FallbackLoading from '../FallbackLoading';

const AuthProtectionWrapper = ({ children }: ChildrenType) => {
	const { isAuthenticated } = useAuthContext();
	const { push } = useRouter();
	const pathname = usePathname();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (!isAuthenticated) {
			push(`/account/login?redirectTo=${pathname}`);
		} else {
			setLoading(false); // User is authenticated, stop showing loading
		}
	}, [push, isAuthenticated, pathname]);

	if (loading) {
		return <FallbackLoading />;
	}
	return <Suspense>{children}</Suspense>;
};

export default AuthProtectionWrapper;
