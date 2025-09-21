import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllVectorMaps from './AllVectorMaps';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Vector Maps' };

const VectorMaps = () => {
	return (
		<>
			<PageBreadcrumb title="Vector Maps" subName="Maps" />

			<AllVectorMaps />
		</>
	);
};

export default VectorMaps;
