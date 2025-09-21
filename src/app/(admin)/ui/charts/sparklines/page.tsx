import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllSparkLineCharts from './AllSparkLineCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Sparkline Charts' };

const SparklinesCharts = () => {
	return (
		<>
			<PageBreadcrumb title="Sparklines Chart" subName="Charts" />
			<AllSparkLineCharts />
		</>
	);
};

export default SparklinesCharts;
