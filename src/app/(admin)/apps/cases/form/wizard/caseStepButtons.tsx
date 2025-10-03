import { useWizard } from 'react-use-wizard';
import { Button } from 'react-bootstrap';
type Props = {
	nextStepButton?: boolean,
	prevStepButton?: boolean,
	finishButton?: boolean,
	closeButton?: boolean,
}

export default function CaseStepButtons({prevStepButton, nextStepButton, finishButton, closeButton}: Props) {
	const {previousStep, nextStep} = useWizard();

	return (
		<ul className="list-inline wizard mb-0">
			{prevStepButton &&
				<li className="previous list-inline-item">
					<Button onClick={previousStep} variant="info">
							Voltar
					</Button>
				</li>
			}
			{
				nextStepButton &&
				<li className="next list-inline-item float-end">
					<Button onClick={nextStep} variant="success">
							{
								finishButton ? 'Finalizar' : 'Próximo'
							}
					</Button>
				</li>
			}
			{
				closeButton &&
				<li className="next list-inline-item float-end">
					<Button onClick={nextStep} variant="secondary">
						Fechar
					</Button>
				</li>
			}

		</ul>
	)

}