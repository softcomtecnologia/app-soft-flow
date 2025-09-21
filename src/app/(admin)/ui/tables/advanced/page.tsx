import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllAdvancedTables from './AllAdvancedTables';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Advanced Tables' };

const AdvancedTable = () => {
	return (
		<>
			<PageBreadcrumb title="Advanced" subName="Tables" />

			<AllAdvancedTables />
		</>
	);
};

export default AdvancedTable;
