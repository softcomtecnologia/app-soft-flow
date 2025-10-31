'use client';

import { TextInput } from '@/components/Form';
import { Button, Col, Collapse, Form, Row } from 'react-bootstrap';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import ICaseFilter from '@/types/cases/ICaseFilter';
import { useCasesContext } from '@/contexts/casesContext';
import Cookies from 'js-cookie';
import Select from 'react-select';
import Spinner from '@/components/Spinner';
import AsyncSelect from 'react-select/async';
import { useAsyncSelect, useToggle } from '@/hooks';
import { useEffect } from 'react';
import { assistant as fetchProducts } from '@/services/productsServices';
import { assistant as fetchUsers } from '@/services/usersServices';
import IProductAssistant from '@/types/assistant/IProductAssistant';
import IUserAssistant from '@/types/assistant/IUserAssistant';
import type { AsyncSelectOption } from '@/hooks/useAsyncSelect';

type StatusOption = { value: string; label: string };

const statusOptions: StatusOption[] = [
	{ value: 'ATRIBUIDO', label: 'ATRIBUIDO' },
	{ value: 'AGUARDANDO TESTE', label: 'AGUARDANDO TESTE' },
	{ value: 'CONCLUIDO', label: 'CONCLUIDO' },
];

const CaseFilters = () => {
	const methods = useForm<ICaseFilter>();
	const { fetchCases, loading } = useCasesContext();
	const [showFilters, toggleFilters] = useToggle(false);
	const produtoId = methods.watch('produto_id');
	const usuarioId = methods.watch('usuario_id');

	const {
		loadOptions: loadProductOptions,
		selectedOption: selectedProduct,
		setSelectedOption: setSelectedProduct,
	} = useAsyncSelect<IProductAssistant>({
		fetchItems: async (input) => fetchProducts({ search: input, nome: input }),
		getOptionLabel: (product) => product.nome_projeto || product.setor || 'Produto sem nome',
		getOptionValue: (product) => product.id,
		debounceMs: 1000,
	});

	const {
		loadOptions: loadUserOptions,
		selectedOption: selectedUser,
		setSelectedOption: setSelectedUser,
	} = useAsyncSelect<IUserAssistant>({
		fetchItems: async (input) => fetchUsers({ search: input, nome_suporte: input }),
		getOptionLabel: (user) => user.nome_suporte || user.setor || 'Usuario sem nome',
		getOptionValue: (user) => user.id,
		debounceMs: 1000,
	});

	useEffect(() => {
		if (!produtoId) {
			setSelectedProduct(null);
		}
	}, [produtoId, setSelectedProduct]);

	useEffect(() => {
		if (!usuarioId) {
			setSelectedUser(null);
		}
	}, [usuarioId, setSelectedUser]);

	const onSearch = (data: ICaseFilter) => {
		const trimmedCaseNumber = data.numero_caso?.trim();
		console.log(data.usuario_id);
		const payload: ICaseFilter = trimmedCaseNumber
			? { numero_caso: trimmedCaseNumber }
					: {
							status_descricao: data.status_descricao || undefined,
							produto_id: data.produto_id || undefined,
							usuario_dev_id: data.usuario_id && data.usuario_id != "" ? data.usuario_id : Cookies.get('user_id'),
							sort_by: 'prioridade',
						};

		fetchCases(payload);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSearch)} className="mb-3">
				<div className="d-flex align-items-center gap-2 mb-3">
					<Button type="button" variant="outline-secondary" size="sm" onClick={toggleFilters}>
						<i className="uil uil-search" />
					</Button>
					{!showFilters && (
						<Button type="submit" variant="primary" size="sm" disabled={loading}>
							{loading ? 'Pesquisando...' : 'Pesquisar'}
						</Button>
					)}
				</div>
				<Collapse in={showFilters}>
					<div>
						<Row className="g-3 g-lg-4 align-items-end">
							<Col xs={12} sm={6} md={4} lg={3}>
								<Form.Label className="fw-medium text-muted small">Numero do caso</Form.Label>
								<TextInput
									{...methods.register('numero_caso')}
									type="text"
									name="numero_caso"
									placeholder="Digite o numero..."
									className="form-control-sm"
								/>
							</Col>
							<Col xs={12} sm={6} md={6} lg={3}>
								<Form.Label className="fw-medium text-muted small">Produto</Form.Label>
								<Controller
									name="produto_id"
									control={methods.control}
									render={({ field }) => (
										<AsyncSelect<AsyncSelectOption<IProductAssistant>, false>
											cacheOptions
											defaultOptions={selectedProduct ? [selectedProduct] : []}
											loadOptions={loadProductOptions}
											inputId="produto-id"
											className="react-select case-status-select"
											classNamePrefix="react-select"
											placeholder="Pesquise um produto..."
											isClearable
											value={selectedProduct}
											onChange={(option) => {
												setSelectedProduct(option);
												field.onChange(option?.value ?? '');
											}}
											onBlur={field.onBlur}
											noOptionsMessage={() => 'Nenhum produto encontrado'}
											loadingMessage={() => 'Carregando...'}
										/>
									)}
								/>
							</Col>
							<Col xs={12} sm={6} md={6} lg={3}>
								<Form.Label className="fw-medium text-muted small">Usuario</Form.Label>
								<Controller
									name="usuario_id"
									control={methods.control}
									render={({ field }) => (
										<AsyncSelect<AsyncSelectOption<IUserAssistant>, false>
											cacheOptions
											defaultOptions={selectedUser ? [selectedUser] : []}
											loadOptions={loadUserOptions}
											inputId="usuario-id"
											className="react-select case-status-select"
											classNamePrefix="react-select"
											placeholder="Pesquise um usuario..."
											isClearable
											value={selectedUser}
											onChange={(option) => {
												setSelectedUser(option);
												field.onChange(option?.value ?? '');
											}}
											onBlur={field.onBlur}
											noOptionsMessage={() => 'Nenhum usuario encontrado'}
											loadingMessage={() => 'Carregando...'}
										/>
									)}
								/>
							</Col>
							<Col xs={12} sm={6} md={6} lg={3}>
								<Form.Label className="fw-medium text-muted small">Status</Form.Label>
								<Controller
									name="status_descricao"
									control={methods.control}
									render={({ field }) => (
										<Select
											inputId="status-descricao"
											className="react-select case-status-select"
											classNamePrefix="react-select"
											options={statusOptions}
											placeholder="Selecione um status..."
											isClearable
											value={statusOptions.find((option) => option.value === field.value) ?? null}
											onChange={(option) => field.onChange(option?.value ?? '')}
										/>
									)}
								/>
							</Col>
							<Col xs={12} sm={6} md={4} lg={2} className="d-grid">
								<Button type="submit" variant="primary" disabled={loading} className="w-100">
									{
										loading ?
										<span className='text-center'>
											<span style={{marginRight: '10px'}}>Pesquisando</span>
											<Spinner className="spinner-grow-sm" tag="span" color="white" type="bordered" />
										</span>
										:
										'Pesquisar'
									}
								</Button>
							</Col>
						</Row>
					</div>
				</Collapse>
			</form>
		</FormProvider>
	);
};

export default CaseFilters;
