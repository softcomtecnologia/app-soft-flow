import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllBarCharts from './AllBarCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Chartjs' };

const BarChartJs = () => {
	return (
		<>
			<PageBreadcrumb title="Bar Chartjs" subName="Chartjs" />
			<AllBarCharts />
		</>
	);
};

export default BarChartJs;
