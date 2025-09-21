import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllOtherCharts from './AllOtherCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Chartjs Other Charts' };

const OtherChartJs = () => {
	return (
		<>
			<PageBreadcrumb title="Other Chartjs" subName="Chartjs" />
			<AllOtherCharts />
		</>
	);
};

export default OtherChartJs;
