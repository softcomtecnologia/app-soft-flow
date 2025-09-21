import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllRadarCharts from './AllRadarCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Radar Charts' };

const RadarApex = () => {
	return (
		<>
			<PageBreadcrumb title="Radar Apex" subName="Apex" />

			<AllRadarCharts />
		</>
	);
};

export default RadarApex;
