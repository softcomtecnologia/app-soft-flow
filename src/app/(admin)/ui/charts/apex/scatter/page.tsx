import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllScatterCharts from './AllScatterCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Scatter Charts' };

const ScatterApex = () => {
	return (
		<>
			<PageBreadcrumb title="Scatter" subName="Apex" />

			<AllScatterCharts />
		</>
	);
};

export default ScatterApex;
