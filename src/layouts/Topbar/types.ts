import type { StaticImageData } from 'next/image';

export type Language = {
	name: string;
	flag: StaticImageData;
};

export type AppItem = {
	name: string;
	icon: StaticImageData;
	redirectTo: string;
};

type Message = {
	id: number;
	title: string;
	time?: string;
	subText: string;
	avatar?: StaticImageData;
	icon?: string;
	variant?: string;
	isRead: boolean;
};

export type NotificationItem = {
	day: string;
	messages: Message[];
};

export type ProfileOption = {
	label: string;
	icon: string;
	redirectTo: string;
};

export type SearchOption = {
	label: string;
	icon?: string;
	type: string;
	value?: string;
	userDetails?: {
		firstname: string;
		lastname: string;
		position: string;
		avatar: StaticImageData;
	};
};
