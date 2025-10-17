import { Wizard } from "react-use-wizard";
import CaseWizardStep1 from "./caseWizardStep1";
import CaseWizardHeader from "./caseWizardHeader";
import CaseWizardStep2 from '@/app/(admin)/apps/cases/form/wizard/caseWizardStep2';
import CaseWizardStep3 from '@/app/(admin)/apps/cases/form/wizard/caseWizardStep3';
import CaseWizardStep4 from '@/app/(admin)/apps/cases/form/wizard/caseWizardStep4';
import { FormProvider, useForm } from 'react-hook-form';
import ICasePost from '@/types/cases/ICasePost';

export default function CaseWizard() {
	const methods = useForm<ICasePost>();

	const submit = (data: ICasePost) => {
		console.log(data);
	}

	return (
		<FormProvider {...methods}>
			<form id={"form-add-case"} onSubmit={methods.handleSubmit(submit)}>
				<Wizard header={<CaseWizardHeader />}>
					<CaseWizardStep1 control={methods.control} />
					<CaseWizardStep2 />
					<CaseWizardStep3 />
					<CaseWizardStep4 />
				</Wizard>
			</form>
		</FormProvider>
	);
}
