import CaseStepButtons from '@/app/(admin)/apps/cases/form/wizard/caseStepButtons';
import CasesDescriptionForm from '@/app/(admin)/apps/cases/form/casesDescriptionForm';
import CasesAssingMentsForm from '@/app/(admin)/apps/cases/form/casesAssingMentsForm';

export default function CaseWizardStep3() {
	return (
		<div className={'col-md-12'}>
			<CasesAssingMentsForm/>
			<CaseStepButtons nextStepButton={true} prevStepButton={true} finishButton={true}/>
		</div>
	)
}