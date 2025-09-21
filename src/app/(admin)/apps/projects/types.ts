import type { StaticImageData } from 'next/image';

export type Project = {
	id: number;
	title: string;
	state: string;
	shortDesc?: string;
	totalTasks: number;
	totalComments: number;
	totalMembers: number;
	progress: number;
	image?: StaticImageData;
	startDate?: string;
	startTime?: string;
	endDate?: string;
	endTime?: string;
	totalBudget?: string;
};

export type TeamMember = {
	value: string;
	name: string;
	image: StaticImageData;
};

export type GanttProjectItem = {
	id: string;
	name: string;
	status: string;
	icon: string;
};
