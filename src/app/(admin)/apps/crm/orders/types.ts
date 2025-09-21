import type { StaticImageData } from 'next/image';

export type Order = {
	orderId: string;
	avatar: StaticImageData;
	name: string;
	projectName: string;
	country: string;
	city: string;
	date: string;
	orderStatus: string;
};
