import CaseStepButtons from '@/app/(admin)/apps/cases/form/wizard/caseStepButtons';
import CasesDescriptionForm from '@/app/(admin)/apps/cases/form/casesDescriptionForm';

export default function CaseWizardStep2() {
	return (
		<div className={'col-md-12'}>
			<CasesDescriptionForm/>
			<CaseStepButtons nextStepButton={true} prevStepButton={true}/>
		</div>
	)
}