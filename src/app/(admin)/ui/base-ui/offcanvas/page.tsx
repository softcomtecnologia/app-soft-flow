import type { Metadata } from 'next';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import dynamic from 'next/dynamic';
const AllOffcanvas = dynamic(() => import('./AllOffcanvas'));

export const metadata: Metadata = { title: 'Offcanvas' };

const OffcanvasUI = () => {
	return (
		<>
			<PageBreadcrumb title="Offcanvas" subName="Base UI" />
			<AllOffcanvas />
		</>
	);
};

export default OffcanvasUI;
