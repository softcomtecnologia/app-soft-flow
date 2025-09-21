import PageBreadcrumb from '@/components/PageBreadcrumb';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
const AllWizard = dynamic(() => import('./AllWizard'));

export const metadata: Metadata = { title: 'Form Wizard' };

const WizardForm = () => {
	return (
		<>
			<PageBreadcrumb title="Form Wizard" subName="Forms" />

			<AllWizard />
		</>
	);
};

export default WizardForm;
