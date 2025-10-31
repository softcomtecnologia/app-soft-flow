import axios, { AxiosResponse } from 'axios';
import IProjectAssistant from '@/types/assistant/IProjectAssistant';

export async function assistant(data: any): Promise<IProjectAssistant[]> {
	try {
		const res: AxiosResponse<IProjectAssistant[]> = await axios.get('/api/assistant/projects', {
			params: data,
		});
		return res.data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error(String(err));
	}
}

