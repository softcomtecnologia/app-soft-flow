import { Form, Card } from 'react-bootstrap';
import Select from 'react-select';

export default function CasesHeaderForm() {
	return (
		<div className="container mt-4">
			<Card className="shadow-sm rounded-3">
				<Card.Body>
					{/* Linha com Produto e Projeto */}
					<div className="row mb-3">
						<div className="col-md-6 mb-3 mb-md-0">
							<Form.Label className="fw-semibold">Produto*</Form.Label>
							<Select
								className="react-select"
								placeholder="Selecione um produto"
								classNamePrefix="react-select"
								options={[
									{ value: 'softcomshop', label: 'Softcomshop' },
									{ value: 'softshop', label: 'Softshop' },
									{ value: 'pdv', label: 'PDV' },
								]}
							/>
						</div>

						<div className="col-md-6">
							<Form.Label className="fw-semibold">Projeto*</Form.Label>
							<Select
								className="react-select"
								placeholder="Selecione um projeto"
								classNamePrefix="react-select"
								options={[
									{ value: 'softcomshop', label: 'Softcomshop' },
									{ value: 'softshop', label: 'Softshop' },
									{ value: 'pdv', label: 'PDV' },
								]}
							/>
						</div>
					</div>

					{/* Linha com Origem e Versão */}
					<div className="row mb-3">
						<div className="col-md-6 mb-3 mb-md-0">
							<Form.Label className="fw-semibold">Versão</Form.Label>
							<Select
								className="react-select"
								placeholder="Selecione a versão"
								classNamePrefix="react-select"
								options={[
									{ value: 'softcomshop', label: 'Softcomshop' },
									{ value: 'softshop', label: 'Softshop' },
									{ value: 'pdv', label: 'PDV' },
								]}
							/>
						</div>

						<div className="col-md-6">
							<Form.Label className="fw-semibold">Categoria*</Form.Label>
							<Select
								className="react-select"
								placeholder="Selecione a categoria"
								classNamePrefix="react-select"
								options={[
									{ value: '1.0', label: '1.0' },
									{ value: '2.0', label: '2.0' },
									{ value: '3.0', label: '3.0' },
								]}
							/>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
