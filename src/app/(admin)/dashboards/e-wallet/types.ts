import type { StaticImageData } from 'next/image';

export type MoneyRecord = {
	title: string;
	money: string;
	icon: string;
	variant: string;
};

export type Merchant = {
	icon: string;
	variant: string;
	title: string;
};

export type Transaction = {
	avatar: StaticImageData;
	name: string;
	date: string;
	status: string;
	amount: string;
};

export type WatchListItem = {
	icon: string;
	variant: string;
	title: string;
	amount: string;
	trend: string;
	trendStatus: string;
};
