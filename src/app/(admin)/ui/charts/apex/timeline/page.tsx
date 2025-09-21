import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllTimelineCharts from './AllTimelineCharts';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Timeline Charts' };

const TimelineApex = () => {
	return (
		<>
			<PageBreadcrumb title="Timeline" subName="Apex" />

			<AllTimelineCharts />
		</>
	);
};

export default TimelineApex;
