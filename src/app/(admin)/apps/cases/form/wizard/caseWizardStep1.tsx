import { useWizard } from "react-use-wizard";
import CasesHeaderForm from "../casesHeaderForm";
import { Button } from 'react-bootstrap';
import CaseStepButtons from '@/app/(admin)/apps/cases/form/wizard/caseStepButtons';

export default function CaseWizardStep1() {

    return (
			<div className={'col-md-12'}>
				<CasesHeaderForm/>
				<CaseStepButtons nextStepButton={true} prevStepButton={false}/>
			</div>

    )
}