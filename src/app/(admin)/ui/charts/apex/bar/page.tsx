import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllBarCharts from './AllBarCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Bar Charts' };

const BarApex = () => {
	return (
		<>
			<PageBreadcrumb title="Bar" subName="Apex" />

			<AllBarCharts />
		</>
	);
};

export default BarApex;
