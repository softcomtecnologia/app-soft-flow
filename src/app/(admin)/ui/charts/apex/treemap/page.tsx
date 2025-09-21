import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllTreemapCharts from './AllTreemapCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Treemap Charts' };

const TreemapApex = () => {
	return (
		<>
			<PageBreadcrumb title="Treemap" subName="Apex" />
			<AllTreemapCharts />
		</>
	);
};

export default TreemapApex;
