import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllValidationForm from './AllValidationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Validation Form' };

const ValidationForm = () => {
	return (
		<>
			<PageBreadcrumb title="Validation Form" subName="Forms" />
			<AllValidationForm />
		</>
	);
};

export default ValidationForm;
