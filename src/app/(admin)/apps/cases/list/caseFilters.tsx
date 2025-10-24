'use client';
import { TextInput } from '@/components/Form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import ICaseFilter from '@/types/cases/ICaseFilter';
import { useCasesContext } from '@/contexts/casesContext';
import Cookies from "js-cookie";

const CaseFilters = () => {
	const methods = useForm<ICaseFilter>();
	const {fetchCases} = useCasesContext();

	const onSearch = (data: ICaseFilter) => {
		data.usuario_dev_id = Cookies.get('user_id');
		fetchCases(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSearch)}>
				<Row className="gy-3 gx-3 align-items-end">
					<Col xs={12} sm={6} md="auto">
						<Form.Label className="fw-medium text-muted small">Numero do caso</Form.Label>
						<TextInput
							{...methods.register('NumeroCaso')}
							type="text"
							name="NumeroCaso"
							placeholder="Digite o numero..."
							className="form-control-sm"
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

