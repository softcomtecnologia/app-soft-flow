import type { Metadata } from 'next';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllAdvancedElements from './AllAdvancedElements';

// styles
import 'react-bootstrap-typeahead/css/Typeahead.css';

export const metadata: Metadata = { title: 'Form Advanced' };

const FormAdvanced = () => {
	return (
		<>
			<PageBreadcrumb title="Form Advanced" subName="Form" />

			<AllAdvancedElements />
		</>
	);
};

export default FormAdvanced;
