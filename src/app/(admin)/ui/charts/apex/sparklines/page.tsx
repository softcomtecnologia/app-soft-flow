import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllSparklineCharts from './AllSparklineCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Sparkline Charts' };

const SparklinesApex = () => {
	return (
		<>
			<PageBreadcrumb title="Sparklines" subName="Apex" />

			<AllSparklineCharts />
		</>
	);
};

export default SparklinesApex;
