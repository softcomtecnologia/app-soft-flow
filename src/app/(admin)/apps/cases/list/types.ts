import { StaticImageData } from 'next/image';


export type Case = {
caseNumber: string;
openedBy: {
	name: string;
	avatar: StaticImageData;
};
status: 'Aberto' | 'Fechado' | 'Em Análise';
version: string;
hoursOpen: number;
summary: string;
};