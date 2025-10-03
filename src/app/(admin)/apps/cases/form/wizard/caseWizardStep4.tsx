import CaseStepButtons from '@/app/(admin)/apps/cases/form/wizard/caseStepButtons';
import CasesDescriptionForm from '@/app/(admin)/apps/cases/form/casesDescriptionForm';
import { Form } from 'react-bootstrap';

export default function CaseWizardStep4() {
	return (
		<div className={'col-md-12'}>
			<div>
				<div className="text-center">
					<h2 className="mt-0">
						<i className="mdi mdi-check-all text-success"></i>
					</h2>
					<h3 className="mt-0 text-success">Caso adicionado com sucesso!</h3>
					<p className="w-75 mb-2 mx-auto">
						Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at
						volutpat. In egestas mattis dui. Aliquam
						mattis dictum aliquet.
					</p>
				</div>
			</div>
			<CaseStepButtons closeButton />
		</div>
	)
}