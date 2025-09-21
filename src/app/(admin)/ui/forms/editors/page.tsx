import PageBreadcrumb from '@/components/PageBreadcrumb';
import AllEditor from './AllEditor';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Editors' };

const EditorsForm = () => {
	return (
		<>
			<PageBreadcrumb title="Editors" subName="Forms" />

			<AllEditor />
		</>
	);
};

export default EditorsForm;
