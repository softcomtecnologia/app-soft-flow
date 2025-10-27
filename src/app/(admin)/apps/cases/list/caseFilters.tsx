'use client';

import { TextInput } from '@/components/Form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import ICaseFilter from '@/types/cases/ICaseFilter';
import { useCasesContext } from '@/contexts/casesContext';
import Cookies from 'js-cookie';
import Select from 'react-select';

const statusOptions = [
{ value: 'ATRIBUÍDO', label: 'ATRIBUIDO' },
{ value: 'AGUARDANDO TESTE', label: 'AGUARDANDO TESTE' },
{ value: 'CONCLUIDO', label: 'CONCLUIDO' },
];

const CaseFilters = () => {
	const methods = useForm<ICaseFilter>();
	const { fetchCases } = useCasesContext();

	const onSearch = (data: ICaseFilter) => {
		const payload: ICaseFilter = {
			...data,
			numero_caso: data.numero_caso?.trim() || undefined,
			status_descricao: data.status_descricao || undefined,
			usuario_dev_id: Cookies.get('user_id'),
		};

		fetchCases(payload);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSearch)}>
				<Row className="gy-3 gx-3 align-items-end">
					<Col xs={12} sm={6} md="auto">
						<Form.Label className="fw-medium text-muted small">Numero do caso</Form.Label>
						<TextInput
							{...methods.register('numero_caso')}
							type="text"
							name="numero_caso"
							placeholder="Digite o numero..."
							className="form-control-sm"
						/>
					</Col>
					<Col xs={12} sm={12} md="auto">
						<Form.Label className="fw-medium text-muted small">Staus</Form.Label>
						<Controller
							name="status_descricao"
							control={methods.control}
							render={({ field }) => (
								<Select
									inputId="status-descricao"
									className="react-select case-status-select"
									classNamePrefix="react-select"
									options={statusOptions}
									placeholder="Selecione..."
									isClearable
									value={statusOptions.find((option) => option.value === field.value) ?? null}
									onChange={(option) => field.onChange(option?.value ?? '')}
								/>
							)}
						/>
					</Col>
					<Col xs={12} sm="auto" className="d-grid gap-2 d-sm-inline-flex">
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

