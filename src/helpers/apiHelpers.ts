import { getCookie } from 'cookies-next';

export function getBaseApiUrl(): string {
	return `${process.env.NEXT_PUBLIC_API_URL}`;
}


export async function getAccessToken(): Promise<string> {
	const token = await getCookie('access_token');
	return typeof token === 'string' ? token : '';
}
