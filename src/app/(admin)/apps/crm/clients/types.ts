import type { StaticImageData } from 'next/image';

export type Client = {
	avatar: StaticImageData;
	verifiedClient?: boolean;
	name: string;
	emailId: string;
	completedProject: number;
};
