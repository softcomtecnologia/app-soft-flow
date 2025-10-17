import { useWizard } from "react-use-wizard";
import CasesHeaderForm from "../casesHeaderForm";
import { Button } from 'react-bootstrap';
import CaseStepButtons from '@/app/(admin)/apps/cases/form/wizard/caseStepButtons';
import { Control } from 'react-hook-form';
import ICasePost from '@/types/cases/ICasePost';

type Props = {
	control: Control<ICasePost>
}

export default function CaseWizardStep1({control}: Props) {

    return (
			<div className={'col-md-12'}>
				<CasesHeaderForm control={control} />
				<CaseStepButtons nextStepButton={true} prevStepButton={false}/>
			</div>

    )
}