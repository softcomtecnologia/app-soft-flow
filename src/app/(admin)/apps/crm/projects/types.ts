import type { StaticImageData } from 'next/image';

export type DailyTask = {
	title: string;
	shortDesc: string;
	time: string;
	teamSize: number;
};

export type TeamMember = {
	avatar: StaticImageData;
	name: string;
	designation: string;
	experience: string;
};

export type StatisticsItem = {
	icon: string;
	variant: string;
	title: string;
	noOfProject: number;
};

export type Project = {
	title: string;
	task: string;
	created_on: string;
	members: StaticImageData[];
};
