import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';
import AllRatings from './AllRatings';

export const metadata: Metadata = { title: 'Ratings' };

const RatingsUI = () => {
	return (
		<>
			<PageBreadcrumb title="Ratings" subName="Extended UI" />
			<AllRatings />
		</>
	);
};

export default RatingsUI;
