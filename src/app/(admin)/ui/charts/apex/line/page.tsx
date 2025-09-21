import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllLineCharts from './AllLineCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Line Charts' };

const LineApex = () => {
	return (
		<>
			<PageBreadcrumb title="Line" subName="Apex" />

			<AllLineCharts />
		</>
	);
};

export default LineApex;
