import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllBubbleCharts from './AllBubbleCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Bubble' };

const BubbleApex = () => {
	return (
		<>
			<PageBreadcrumb title="Bubble" subName="Apex" />
			<AllBubbleCharts />
		</>
	);
};

export default BubbleApex;
