import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllToasts from './AllToasts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Notifications' };

const NotificationsUI = () => {
	return (
		<>
			<PageBreadcrumb title="Notifications" subName="Base UI" />

			{/* toast */}
			<AllToasts />
		</>
	);
};

export default NotificationsUI;
