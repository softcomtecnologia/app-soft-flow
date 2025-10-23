'use client';
import { authApi } from '@/common/api';
import { useNotificationContext } from '@/common/context';
import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/common/context/useAuthContext';
import { useQuery } from '@/hooks';
import type { User } from '@/types/User';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

export const loginFormSchema = yup.object({
	email: yup.string().email('Please enter valid email').required('Please enter email'),
	password: yup.string().required('Please enter password'),
});

export type LoginFormFields = yup.InferType<typeof loginFormSchema>;

export default function useLogin() {
	const [loading, setLoading] = useState(false);
	const navigate = useRouter();

	const { isAuthenticated, saveSession } = useAuthContext();
	const { showNotification } = useNotificationContext();

	const queryParams = useQuery();

	const login = async (values: LoginFormFields) => {
		setLoading(true);
		try {
			const res: AxiosResponse<User> = await authApi.login(values);
			if (res.data.token) {
				navigate.push(queryParams['redirectTo'] ?? '/dashboards/analytics');
			}
		} catch (error: any) {
			showNotification({ message: error.toString(), type: 'error' });
		} finally {
			setLoading(false);
		}
	};

	return { loading, login, isAuthenticated };
}
