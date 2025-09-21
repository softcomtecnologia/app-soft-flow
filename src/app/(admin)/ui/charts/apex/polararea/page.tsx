import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllPolarCharts from './AllPolarCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'PolarArea Charts' };

const PolarAreaApex = () => {
	return (
		<>
			<PageBreadcrumb title="Polar Area" subName="Apex" />
			<AllPolarCharts />
		</>
	);
};

export default PolarAreaApex;
