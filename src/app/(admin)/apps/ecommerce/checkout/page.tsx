import PageBreadcrumb from '@/components/PageBreadcrumb';
import CheckoutDetail from './CheckoutDetail';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Checkout' };

const CheckoutEcom = () => {
	return (
		<>
			<PageBreadcrumb title="Checkout" subName="E-commerce" />
			<CheckoutDetail />
		</>
	);
};

export default CheckoutEcom;
