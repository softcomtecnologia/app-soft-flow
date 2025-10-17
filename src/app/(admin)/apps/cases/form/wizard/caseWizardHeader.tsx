'use client'

import { useWizard } from "react-use-wizard"
import classNames from "classnames";

export default function CaseWizardHeader() {

	const { goToStep, activeStep } = useWizard()

	return (
		<ul className="nav nav-pills nav-justified mb-4">
			<li className="nav-item">
				<button
					type="button"
					onClick={() => goToStep(0)}
					className={classNames('nav-link rounded-0 py-2', activeStep === 0 && 'active')}>
					<i className="mdi mdi-pencil-circle font-18 align-middle me-1"></i>
					<span className="d-none d-sm-inline">Cabeçalho</span>
				</button>
			</li>
			<li className="nav-item">
				<button
					type="button"
					onClick={() => goToStep(1)}
					className={classNames('nav-link rounded-0 py-2', activeStep === 1 && 'active')}>
					<i className="mdi mdi-pencil-circle font-18 align-middle me-1"></i>
					<span className="d-none d-sm-inline">Descrição</span>
				</button>
			</li>
			<li className="nav-item">
				<button
					type="button"
					onClick={() => goToStep(2)}
					className={classNames('nav-link rounded-0 py-2', activeStep === 2 && 'active')}>
					<i className="mdi  mdi-account-circle font-18 align-middle me-1"></i>
					<span className="d-none d-sm-inline">Atribuições</span>
				</button>
			</li>
			<li className="nav-item">
				<button
					type="button"
					className={classNames('nav-link rounded-0 py-2', activeStep === 3 && 'active')}>
					<i className="mdi mdi-checkbox-marked-circle-outline font-18 align-middle me-1"></i>
					<span className="d-none d-sm-inline">Finalizar</span>
				</button>
			</li>
		</ul>
	)
}
