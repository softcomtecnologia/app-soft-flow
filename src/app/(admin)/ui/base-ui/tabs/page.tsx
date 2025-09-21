import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllTabs from './AllTabs';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Tabs' };

const TabsUI = () => {
	return (
		<>
			<PageBreadcrumb title="Tabs" subName="Base UI" />
			<AllTabs />
		</>
	);
};

export default TabsUI;
