import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllDragNDrops from './AllDragNDrops';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Drag N Drop' };

const DragNDropUI = () => {
	return (
		<>
			<PageBreadcrumb title="Drag N Drop" subName="Extended UI" />

			<AllDragNDrops />
		</>
	);
};

export default DragNDropUI;
