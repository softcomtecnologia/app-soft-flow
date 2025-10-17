'use client';
import { TextInput } from '@/components/Form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import ICaseFilter from '@/types/cases/ICaseFilter';
import { useCasesContext } from '@/contexts/casesContext';

const CaseFilters = () => {
	const methods = useForm<ICaseFilter>();
	const {fetchCases} = useCasesContext();

	const onSearch = (data: ICaseFilter) => {
		fetchCases(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSearch)}>
				<Row className="gy-3 gx-3 align-items-end">
					<Col xs={12} sm={6} md="auto">
						<Form.Label className="fw-medium text-muted small">Número do caso</Form.Label>
						<TextInput
							{...methods.register('NumeroCaso')}
							type="text"
							name="NumeroCaso"
							placeholder="Digite o número..."
							className="form-control-sm"
						/>
					</Col>

					{/*<Col xs={12} sm={6} md="auto">*/}
					{/*	<Form.Label className="fw-medium text-muted small">Status</Form.Label>*/}
					{/*	<SelectInput className="form-select form-select-sm">*/}
					{/*		<option value="Aberto">Aberto</option>*/}
					{/*		<option value="Corrigido">Corrigido</option>*/}
					{/*		<option value="Retorno">Retorno</option>*/}
					{/*		<option value="Fechado">Fechado</option>*/}
					{/*	</SelectInput>*/}
					{/*</Col>*/}

					{/*<Col xs={12} sm={6} md="auto">*/}
					{/*	<Form.Label className="fw-medium text-muted small">Versão</Form.Label>*/}
					{/*	<SelectInput className="form-select form-select-sm">*/}
					{/*		<option value="1.0">1.0</option>*/}
					{/*		<option value="1.1">1.1</option>*/}
					{/*		<option value="2.0">2.0</option>*/}
					{/*		<option value="2.1">2.1</option>*/}
					{/*	</SelectInput>*/}
					{/*</Col>*/}

					<Col xs={12} sm={6} md="auto">
						<Button type="submit" variant="primary">
							Pesquisar
						</Button>
					</Col>
				</Row>
			</form>
		</FormProvider>
	);
};

export default CaseFilters;
