import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllBoxPlotCharts from './AllBoxplotCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Boxplot Charts' };

const BoxPlotApex = () => {
	return (
		<>
			<PageBreadcrumb title="Boxplot" subName="Apex" />
			<AllBoxPlotCharts />
		</>
	);
};

export default BoxPlotApex;
