import type { StaticImageData } from 'next/image';

export type TopPerformer = {
	id: number;
	name: string;
	position: string;
	leads: number;
	deals: number;
	tasks: number;
};

export type LeadItem = {
	id: number;
	name: string;
	email: string;
	profile: StaticImageData;
	status: string;
};
