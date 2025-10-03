import { Form, Card } from 'react-bootstrap';
import Select from 'react-select';
import { TextInput } from '@/components/Form';

export default function CasesAssingMentsForm() {
	return (
		<div className="container mt-4">
			<Card className="shadow-sm rounded-3">
				<Card.Body>
					<div className="row mb-3">
						<div className="col-md-6 mb-3 mb-md-0">
							<Form.Label className="fw-semibold">Dev Atribuído*</Form.Label>
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
							<Form.Label className="fw-semibold">Qa Atribuído</Form.Label>
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
							<Form.Label className="fw-semibold">Tamanho</Form.Label>
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
							<TextInput type='text' name={'size'} label="Tamanho" placeholder='00:00'/>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
