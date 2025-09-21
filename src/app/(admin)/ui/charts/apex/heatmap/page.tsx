import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllHeatmapCharts from './AllHeatmapCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Heatmap Charts' };

const HeatmapApex = () => {
	return (
		<>
			<PageBreadcrumb title="Heatmap" subName="Apex" />

			<AllHeatmapCharts />
		</>
	);
};

export default HeatmapApex;
