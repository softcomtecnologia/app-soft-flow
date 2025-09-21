import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Starter Page' };

const StarterPage = () => {
	return <PageBreadcrumb title="Starter Page" subName="Pages" />;
};

export default StarterPage;
