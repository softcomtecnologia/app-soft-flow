import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllAccordionAndCollapse from './AllAccordionAndCollapse';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Accordions & Collapse' };

const AccordionsUI = () => {
	return (
		<>
			<PageBreadcrumb title="Accordions & Collapse" subName="Base UI" />
			<AllAccordionAndCollapse />
		</>
	);
};

export default AccordionsUI;
