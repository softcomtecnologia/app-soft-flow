import { getCookie } from 'cookies-next';

export function getBaseApiUrl(): string {
	return `${process.env.NEXT_PUBLIC_API_URL}`;
}


export async function getAccessToken(): Promise<string> {
	const token = await getCookie('access_token');
	return typeof token === 'string' ? token : '';
}

export async function getUserId(): Promise<string> {
	const userId = await getCookie('user_id');
	return typeof userId === 'string' ? userId : '';
}
