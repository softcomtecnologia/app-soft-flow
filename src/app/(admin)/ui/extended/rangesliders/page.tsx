import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllRangeSliders from './AllRangeSliders';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Range Slider' };

const RangeUI = () => {
	return (
		<>
			<PageBreadcrumb title="Range Sliders" subName="Extended UI" />

			<AllRangeSliders />
		</>
	);
};

export default RangeUI;
