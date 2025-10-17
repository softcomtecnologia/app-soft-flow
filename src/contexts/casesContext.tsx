'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { all as caseAll } from '@/services/caseServices';
import { ICase } from '@/types/cases/ICase';
import { toast } from 'react-toastify';
import ICaseFilter from '@/types/cases/ICaseFilter';

interface CasesContextType {
	cases: ICase[];
	loading: boolean;
	fetchCases: (data?: ICaseFilter) => void;
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
			const response = await caseAll(data);
			setCases(response.data);
		} catch (error) {
			toast.error("Não foi possível obter os dados");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCases();
	}, []);

	return (
		<CasesContext.Provider value={{ cases, loading, fetchCases }}>
			{children}
		</CasesContext.Provider>
	);
};
