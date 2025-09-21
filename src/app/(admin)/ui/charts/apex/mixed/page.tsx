import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllMixedCharts from './AllMixedCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Mixed Charts' };

const MixedApex = () => {
	return (
		<>
			<PageBreadcrumb title="Mixed" subName="Apex" />

			<AllMixedCharts />
		</>
	);
};

export default MixedApex;
