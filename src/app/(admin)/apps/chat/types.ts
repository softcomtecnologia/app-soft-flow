import type { StaticImageData } from 'next/image';

export type ChatUser = {
	id: number;
	name: string;
	avatar: StaticImageData;
	lastMessage?: string;
	totalUnread?: number;
	lastMessageOn?: string;
	email: string;
	phone: string;
	location: string;
	languages: string;
	groups: string;
};

export type ChatMessage = {
	id: number;
	from: ChatUser;
	to: ChatUser;
	message: {
		type: string;
		value: { text?: string; file?: string; size?: string };
	};
	sendOn?: string;
};
