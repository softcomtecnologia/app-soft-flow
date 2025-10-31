import IProductAssistant from "@/types/assistant/IProductAssistant";
import axios, { AxiosResponse } from "axios";

export async function assistant(data: any): Promise<IProductAssistant[]> {
	try {
		const res: AxiosResponse<IProductAssistant[]> = await axios.get('/api/assistant/products', {
			params: data,
		});
		return res.data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		} else {
			throw new Error(String(err));
		}
	}
}