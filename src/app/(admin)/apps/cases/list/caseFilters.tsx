﻿'use client';

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
import { assistant as fetchProjects } from '@/services/projectsServices';
import { assistant as fetchUsers } from '@/services/usersServices';
import IProductAssistant from '@/types/assistant/IProductAssistant';
import IProjectAssistant from '@/types/assistant/IProjectAssistant';
import IUserAssistant from '@/types/assistant/IUserAssistant';
import type { AsyncSelectOption } from '@/hooks/useAsyncSelect';
import CasesModal from './casesModal';

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
	const projetoId = methods.watch('projeto_id');
	const usuarioId = methods.watch('usuario_id');

	const {
		loadOptions: loadProductOptions,
		selectedOption: selectedProduct,
		setSelectedOption: setSelectedProduct,
		defaultOptions: defaultProductOptions,
		triggerDefaultLoad: triggerProductDefaultLoad,
		isLoading: isLoadingProducts,
	} = useAsyncSelect<IProductAssistant>({
		fetchItems: async (input) => fetchProducts({ search: input, nome: input }),
		getOptionLabel: (product) => product.nome_projeto || product.setor || 'Produto sem nome',
		getOptionValue: (product) => product.id,
		debounceMs: 1000,
	});

	const {
		loadOptions: loadProjectOptions,
		selectedOption: selectedProject,
		setSelectedOption: setSelectedProject,
		defaultOptions: defaultProjectOptions,
		triggerDefaultLoad: triggerProjectDefaultLoad,
		isLoading: isLoadingProjects,
	} = useAsyncSelect<IProjectAssistant>({
		fetchItems: async (input) => {
			const fallbackUserId = usuarioId && usuarioId !== '' ? usuarioId : Cookies.get('user_id');
			return fetchProjects({
				search: input,
				nome_projeto: input,
				...(fallbackUserId ? { usuario_id: fallbackUserId } : {}),
			});
		},
		getOptionLabel: (project) => project.nome_projeto || project.setor || 'Projeto sem nome',
		getOptionValue: (project) => project.id,
		debounceMs: 1000,
	});

	const {
		loadOptions: loadUserOptions,
		selectedOption: selectedUser,
		setSelectedOption: setSelectedUser,
		defaultOptions: defaultUserOptions,
		triggerDefaultLoad: triggerUserDefaultLoad,
		isLoading: isLoadingUsers,
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
		if (!projetoId) {
			setSelectedProject(null);
		}
	}, [projetoId, setSelectedProject]);

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
							projeto_id: data.projeto_id || undefined,
							usuario_dev_id: data.usuario_id && data.usuario_id != "" ? data.usuario_id : Cookies.get('user_id'),
							sort_by: 'prioridade',
						};

		fetchCases(payload);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSearch)} className="mb-3">
				<div className="d-flex flex-wrap align-items-center gap-2 mb-3">
					<div className="d-flex align-items-center gap-2">
						<Button type="button" variant="outline-secondary" size="sm" onClick={toggleFilters}>
							<i className="uil uil-search" />
						</Button>
						{!showFilters && (
							<Button type="submit" variant="primary" size="sm" disabled={loading}>
								{loading ? 'Pesquisando...' : 'Pesquisar'}
							</Button>
						)}
					</div>
					<CasesModal
						containerClassName="d-inline-flex ms-auto"
						buttonProps={{
							size: 'sm',
						}}
					/>
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
											defaultOptions={selectedProduct ? [selectedProduct] : defaultProductOptions}
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
											onMenuOpen={() => {
												triggerProductDefaultLoad();
											}}
											noOptionsMessage={() => (isLoadingProducts ? 'Carregando...' : 'Nenhum produto encontrado')}
											loadingMessage={() => 'Carregando...'}
										/>
									)}
								/>
							</Col>
							<Col xs={12} sm={6} md={6} lg={3}>
								<Form.Label className="fw-medium text-muted small">Projeto</Form.Label>
								<Controller
									name="projeto_id"
									control={methods.control}
									render={({ field }) => (
										<AsyncSelect<AsyncSelectOption<IProjectAssistant>, false>
											cacheOptions
											defaultOptions={selectedProject ? [selectedProject] : defaultProjectOptions}
											loadOptions={loadProjectOptions}
											inputId="projeto-id"
											className="react-select case-status-select"
											classNamePrefix="react-select"
											placeholder="Pesquise um projeto..."
											isClearable
											value={selectedProject}
											onChange={(option) => {
												setSelectedProject(option);
												field.onChange(option?.value ?? '');
											}}
											onBlur={field.onBlur}
											onMenuOpen={() => {
												triggerProjectDefaultLoad();
											}}
											noOptionsMessage={() => (isLoadingProjects ? 'Carregando...' : 'Nenhum projeto encontrado')}
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
											defaultOptions={selectedUser ? [selectedUser] : defaultUserOptions}
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
											onMenuOpen={() => {
												triggerUserDefaultLoad();
											}}
											noOptionsMessage={() => (isLoadingUsers ? 'Carregando...' : 'Nenhum usuario encontrado')}
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
								<Button type="submit" variant="primary" size="sm" disabled={loading} className="filter-search-button w-100">
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
