import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';
import AllAreaCharts from './AllAreaCharts';

export const metadata: Metadata = { title: 'Area Charts' };

const AreaApex = () => {
	return (
		<>
			<PageBreadcrumb title="Area" subName="Apex" />
			<AllAreaCharts />
		</>
	);
};

export default AreaApex;
