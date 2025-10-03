import { Wizard } from "react-use-wizard";
import CaseWizardStep1 from "./caseWizardStep1";
import CaseWizardHeader from "./caseWizardHeader";
import CaseWizardStep2 from '@/app/(admin)/apps/cases/form/wizard/caseWizardStep2';
import { Form } from '@/components/Form';
import CaseWizardStep3 from '@/app/(admin)/apps/cases/form/wizard/caseWizardStep3';
import CaseWizardStep4 from '@/app/(admin)/apps/cases/form/wizard/caseWizardStep4';

export default function CaseWizard() {

    return (
				<Form onSubmit={() => console.log('aqui')}>
					<Wizard header={<CaseWizardHeader/>}>
							<CaseWizardStep1/>
							<CaseWizardStep2/>
							<CaseWizardStep3/>
							<CaseWizardStep4/>
					</Wizard>
				</Form>
    )
}