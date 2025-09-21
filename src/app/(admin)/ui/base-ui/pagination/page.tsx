import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllPaginations from './AllPaginations';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Pagination' };

const PaginationUI = () => {
	return (
		<>
			<PageBreadcrumb title="Pagination" subName="Base UI" />

			<AllPaginations />
		</>
	);
};

export default PaginationUI;
