'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { allCase, findCase } from '@/services/caseServices';
import { ICase, ICaseEspecifiedResponse } from '@/types/cases/ICase';
import { toast } from 'react-toastify';
import ICaseFilter from '@/types/cases/ICaseFilter';
import Cookies from 'js-cookie';

interface CasesContextType {
	cases: ICase[];
	loading: boolean;
	fetchCases: (data?: ICaseFilter) => void;
	fetchEspecifiedCases: (id: string) => Promise<ICaseEspecifiedResponse | undefined>;
}

const CasesContext = createContext<CasesContextType | undefined>(undefined);

export function useCasesContext() {
	const context = useContext(CasesContext);
	if (!context) {
		throw new Error('useCasesContext must be used within a CasesProvider');
	}
	return context;
}

export const CasesProvider = ({ children }: { children: React.ReactNode }) => {
	const [cases, setCases] = useState<ICase[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchCases = async (data?: ICaseFilter) => {

		setLoading(true);
		try {
			if (!data) {
				const userId = Cookies.get("user_id");
				data = {usuario_dev_id: userId};
			}
			const response = await allCase(data);
			setCases(response.data);
		} catch (error) {
			toast.error("Não foi possível obter os dados");
		} finally {
			setLoading(false);
		}
	};

	const fetchEspecifiedCases = async (id: string):Promise<ICaseEspecifiedResponse | undefined> => {

		try {
			const response = await findCase(id);
			return response;
		} catch (error) {
			toast.error("Não foi possível obter os dados do caso");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchCases({usuario_dev_id: Cookies.get("user_id")});
	}, []);

	return (
		<CasesContext.Provider value={{ cases, loading, fetchCases, fetchEspecifiedCases }}>
			{children}
		</CasesContext.Provider>
	);
};
