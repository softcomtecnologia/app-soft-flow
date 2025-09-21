import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllPlaceholders from './AllPlaceholders';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Placeholders' };

const PlaceholdersUI = () => {
	return (
		<>
			<PageBreadcrumb title="Placeholders" subName="Base UI" />
			<AllPlaceholders />
		</>
	);
};

export default PlaceholdersUI;
