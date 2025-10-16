import axios, { AxiosResponse } from 'axios';
import { CaseApiResponse} from '@/types/cases/ICase';

export async function all(): Promise<CaseApiResponse> {
	try {
		const res: AxiosResponse<CaseApiResponse> = await axios.get('/api/cases');
		return res.data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		} else {
			throw new Error(String(err));
		}
	}
}
