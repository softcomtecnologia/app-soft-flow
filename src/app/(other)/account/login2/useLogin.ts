'use client';
import { authApi } from '@/common/api';
import { useNotificationContext } from '@/common/context';
import { useState } from 'react';
import { useAuthContext } from '@/common/context/useAuthContext';
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

	const login = async (values: LoginFormFields) => {
		setLoading(true);
		try {
			const res: AxiosResponse<User> = await authApi.login(values);
			showNotification({message: "Usuário logado com sucesso"});
			saveSession(true);
			navigate.push('/apps/cases/list');
		} catch (error: any) {
			saveSession(true);
			showNotification({ message: error.toString(), type: 'error' });
		} finally {
			setLoading(false);
		}
	};

	return { loading, login, isAuthenticated };
}
