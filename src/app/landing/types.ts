import type { StaticImageData } from 'next/image';

export type Feature = {
	id: number;
	title: string;
	desc: string;
	image: StaticImageData;
	features: string[];
};

export type LayoutDemo = {
	image: StaticImageData;
	layout: string;
};

export type Service = {
	icon: string;
	title: string;
	description: string;
};
