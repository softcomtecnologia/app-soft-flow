import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllColumnCharts from './AllColumnCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Column Charts' };

const ColumnApex = () => {
	return (
		<>
			<PageBreadcrumb title="Column" subName="Apex" />
			<AllColumnCharts />
		</>
	);
};

export default ColumnApex;
