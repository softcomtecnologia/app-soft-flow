import type { StaticImageData } from 'next/image';

export type Email = {
	id: number;
	from_name: string;
	from_email: string;
	subject: string;
	number_of_reply: number;
	is_important: boolean;
	is_read: boolean;
	time: string;
	date: string;
};

export type EmailDetails = {
	avatar: StaticImageData;
	subject: string;
	from_name: string;
	from_email: string;
	recieved_on: string;
	attachments: { id: number; name: string; size: string; ext: string }[];
};
