import { Form, Card } from 'react-bootstrap';
import Select, { GroupBase } from 'react-select';
import { Control, Controller } from 'react-hook-form';
import ICasePost from '@/types/cases/ICasePost';

type Props = {
	control: Control<ICasePost>
};

export default function CasesHeaderForm({ control }: Props) {

	const options: GroupBase<{ value: string, label: string }>[] = [
		{
			label: 'Produtos',
			options: [
				{ value: 'softcomshop', label: 'Softcomshop' },
				{ value: 'softshop', label: 'Softshop' },
				{ value: 'pdv', label: 'PDV' },
			]
		}
	];

	return (
		<div className="container mt-4">
			<Card className="shadow-sm rounded-3">
				<Card.Body>
					<div className="row mb-3">
						<div className="col-md-6 mb-3 mb-md-0">
							<Form.Label className="fw-semibold">Produto*</Form.Label>
							<Controller
								name="product"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Select
										{...field}
										className="react-select"
										placeholder="Selecione um produto"
										classNamePrefix="react-select"
										options={options}
										getOptionLabel={(e) => e.label}
										getOptionValue={(e) => e.value}
										onChange={(selectedOption) => {
											field.onChange(selectedOption?.value); // Só pega o 'value' para armazenar no formulário
										}}
									/>
								)}
							/>
						</div>

						<div className="col-md-6">
							<Form.Label className="fw-semibold">Projeto*</Form.Label>
							<Controller
								name="project"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Select
										{...field}
										className="react-select"
										placeholder="Selecione um projeto"
										classNamePrefix="react-select"
										options={options}
										getOptionLabel={(e) => e.label}
										getOptionValue={(e) => e.value}
										onChange={(selectedOption) => {
											field.onChange(selectedOption?.value);
										}}
									/>
								)}
							/>
						</div>
					</div>

					<div className="row mb-3">
						<div className="col-md-6 mb-3 mb-md-0">
							<Form.Label className="fw-semibold">Versão</Form.Label>
							<Controller
								name="version"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Select
										{...field}
										className="react-select"
										placeholder="Selecione a versão"
										classNamePrefix="react-select"
										options={options} // Usando GroupBase para as opções
										getOptionLabel={(e) => e.label}
										getOptionValue={(e) => e.value}
										onChange={(selectedOption) => {
											field.onChange(selectedOption?.value);
										}}
									/>
								)}
							/>
						</div>

						<div className="col-md-6">
							<Form.Label className="fw-semibold">Categoria*</Form.Label>
							<Controller
								name="category"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Select
										{...field}
										className="react-select"
										placeholder="Selecione a categoria"
										classNamePrefix="react-select"
										options={[
											{ value: '1.0', label: '1.0' },
											{ value: '2.0', label: '2.0' },
											{ value: '3.0', label: '3.0' },
										]}
										getOptionLabel={(e) => e.label}
										getOptionValue={(e) => e.value}
										onChange={(selectedOption) => {
											field.onChange(selectedOption?.value);
										}}
									/>
								)}
							/>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
