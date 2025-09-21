import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllLineCharts from './AllLineCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Chartjs' };

const LineChartJs = () => {
	return (
		<>
			<PageBreadcrumb title="Line Chartjs" subName="Chartjs" />

			<AllLineCharts />
		</>
	);
};

export default LineChartJs;
