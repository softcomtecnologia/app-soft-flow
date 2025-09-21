// import { FeedPost } from '@/pages/apps/SocialFeed/types';

import type { FeedPost } from '@/app/(admin)/apps/social/types';
import type { StaticImageData } from 'next/image';

export type Project = {
	id: number;
	clientProfile: StaticImageData;
	client: string;
	name: string;
	startDate: string;
	dueDate: string;
	status: string;
};

export type TimelinePost = FeedPost & {
	engagement: boolean;
};
