import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllGoogleMaps from './AllGoogleMaps';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Google Maps' };

const GoogleMaps = () => {
	return (
		<>
			<PageBreadcrumb title="Google Maps" subName="Maps" />

			<AllGoogleMaps />
		</>
	);
};

export default GoogleMaps;
