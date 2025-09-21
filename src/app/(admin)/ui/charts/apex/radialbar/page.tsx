import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllRadialbarCharts from './AllRadialbarCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Radialbar Charts' };

const RadialbarApex = () => {
	return (
		<>
			<PageBreadcrumb title="Radial Bar" subName="Apex" />

			<AllRadialbarCharts />
		</>
	);
};

export default RadialbarApex;
