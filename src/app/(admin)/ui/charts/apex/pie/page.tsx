import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllPieCharts from './AllPieCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Pie Charts' };

const PieApex = () => {
	return (
		<>
			<PageBreadcrumb title="Pie" subName="Apex" />

			<AllPieCharts />
		</>
	);
};

export default PieApex;
