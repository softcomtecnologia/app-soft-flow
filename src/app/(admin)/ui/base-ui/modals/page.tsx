import type { Metadata } from 'next';
import AllModals from './AllModals';
import PageBreadcrumb from '@/components/PageBreadcrumb';

export const metadata: Metadata = { title: 'Modals' };

const ModalsUI = () => {
	return (
		<>
			<PageBreadcrumb title="Modals" subName="Base UI" />

			<AllModals />
		</>
	);
};

export default ModalsUI;
