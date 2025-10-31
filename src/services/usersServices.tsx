import IUserAssistant from '@/types/assistant/IUserAssistant';
import axios, { AxiosResponse } from 'axios';

export async function assistant(data: any): Promise<IUserAssistant[]> {
	try {
		const res: AxiosResponse<IUserAssistant[]> = await axios.get('/api/assistant/users', {
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

