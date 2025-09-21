import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';
import AllAreaCharts from './AllAreaCharts';

export const metadata: Metadata = { title: 'Chartjs' };

const AreaChartJs = () => {
	return (
		<>
			<PageBreadcrumb title="Area Chartjs" subName="Chartjs" />

			<AllAreaCharts />
		</>
	);
};

export default AreaChartJs;
