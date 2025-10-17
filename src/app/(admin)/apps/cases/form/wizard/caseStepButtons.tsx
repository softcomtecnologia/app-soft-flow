import { useWizard } from 'react-use-wizard';
import { Button } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import ICasePost from '@/types/cases/ICasePost';
type Props = {
	nextStepButton?: boolean,
	prevStepButton?: boolean,
	finishButton?: boolean,
	closeButton?: boolean,
}

export default function CaseStepButtons({prevStepButton, nextStepButton, finishButton, closeButton}: Props) {
	const {previousStep, nextStep} = useWizard();
	const { handleSubmit } = useFormContext<ICasePost>();

	const submit = (data: ICasePost) => {
		console.log(data.product.value);
	};


	const handleNextStep = (e: React.FormEvent) => {
		e.preventDefault();

		if (finishButton) {
			handleSubmit(submit)();
			nextStep();
		} else {
			nextStep();
		}
	};


	return (
		<ul className="list-inline wizard mb-0">
			{prevStepButton &&
				<li className="previous list-inline-item">
					<Button onClick={previousStep} variant="info">
						Voltar
					</Button>
				</li>
			}
			{nextStepButton && (
				<li className="next list-inline-item float-end">
					<Button
						type="submit"
						onClick={handleNextStep}
						variant="success"
					>
						{finishButton ? 'Finalizar' : 'Próximo'}
					</Button>
				</li>
			)}
			{
				closeButton &&
				<li className="next list-inline-item float-end">
					<Button  onClick={nextStep} variant="secondary">
						Fechar
					</Button>
				</li>
			}
		</ul>
	)

}