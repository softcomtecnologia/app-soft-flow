import type { StaticImageData } from 'next/image';

export type AssignTo = {
	avatar: StaticImageData;
};

export type Project = {
	icon: string;
	variant: string;
	title: string;
	subTitle: string;
	hours: number;
	task: number;
	assignTo: Array<AssignTo>;
};

export type Client = {
	avatar: StaticImageData;
	name: string;
	companyName: string;
	date: string;
};

export type MonthlyProgressItem = {
	avatar: StaticImageData;
	name: string;
	emailId: string;
	projectName: string;
	status: string;
};

export type Task = {
	icon: string;
	variant: string;
	title: string;
	totalTask?: number;
	completedTask?: number;
	progressValue?: number;
};
