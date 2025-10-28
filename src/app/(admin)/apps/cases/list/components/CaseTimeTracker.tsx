"use client";
import { Card, Button, Badge, Row, Col, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { ICase } from '@/types/cases/ICase';
import { startTimeCase, stopTimeCase } from '@/services/caseServices';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';

interface CaseTimeTrackerProps {
	caseData?: ICase | null;
}

export default function CaseTimeTracker({ caseData }: CaseTimeTrackerProps) {
	const [loading, setLoading] = useState<boolean>(false);
	const [localCase, setLocalCase] = useState<ICase | null>(caseData ?? null);
	const [elapsedMinutes, setElapsedMinutes] = useState<number | null>(null);
	const badgeBaseClass = "d-inline-flex align-items-center gap-1 text-capitalize py-1 px-2 rounded-2";

	useEffect(() => {
		setLocalCase(caseData ?? null);
	}, [caseData]);

	const getTipoIcon = (tipo: string) => {
		const normalizedTipo = tipo.toLowerCase().replace(/\s+/g, '_');
		const icons = {
			'desenvolvimento': 'lucide:code',
			'desenvolvendo': 'lucide:code',
			'testando': 'lucide:test-tube',
			'retorno': 'lucide:rotate-ccw',
			'nao_planejado': 'lucide:alert-circle'
		};
		return icons[normalizedTipo as keyof typeof icons] || 'lucide:clock';
	};

	const getTipoBadgeVariant = (tipo: string) => {
		const normalizedTipo = tipo.toLowerCase().replace(/\s+/g, '_');
		const variants = {
			'desenvolvendo': 'primary',
			'desenvolvimento': 'primary',
			'testando': 'warning',
			'retorno': 'info',
			'nao_planejado': 'danger'
		};
		return variants[normalizedTipo as keyof typeof variants] || 'secondary';
	};

	const formatTime = (timeString: string) => {
		return new Date(timeString).toLocaleString('pt-BR');
	};

	const formatTipoLabel = (tipo: string) =>
		tipo
			.replace(/_/g, ' ')
			.toLowerCase()
			.replace(/\b\w/g, (char) => char.toUpperCase());


	const startNewTime = async (id: string) => {
		if (!id) {
			toast.error('Identificador do caso nao encontrado.');
			return;
		}
		setLoading(true);
		let shouldAddEntry = false;
		try {
			const response = await startTimeCase(id);
			if (response.success) {
				shouldAddEntry = true;
				toast.success(response.message || 'Tempo iniciado com sucesso!');
			} else {
				toast.warning(response.message || 'Nao foi possivel iniciar o tempo.');
			}
		} catch (error) {
			console.error('Erro ao iniciar o tempo:', error);
			toast.error('Falha ao iniciar o tempo.');
		} finally {
			if (shouldAddEntry) {
				const startTimeIso = new Date().toISOString();
				// @ts-expect-error - cloning nested case entries keeps existing optional fields even if undefined
				setLocalCase((prev) => {
					if (!prev) {
						return prev;
					}
					const existingEntries = prev.caso.producao ? [...prev.caso.producao] : [];
					const nextSequence = existingEntries.reduce((max, entry) => Math.max(max, entry.sequencia), 0) + 1;
					const referenceEntry = existingEntries[0];
					const defaultTipo = referenceEntry?.tipo ?? 'Desenvolvimento';
					const newEntry = {
						sequencia: nextSequence,
						registro: referenceEntry?.registro ?? Date.now(),
						datas: {
							abertura: startTimeIso,
							producao: startTimeIso,
							fechamento: null,
						},
						tipo: defaultTipo,
						usuario_id: referenceEntry?.usuario_id ?? Number(prev.caso.usuarios?.desenvolvimento?.id ?? 0),
						projeto_id: referenceEntry?.projeto_id ?? (prev.projeto?.id ?? null),
						valeu_usuario_id: referenceEntry?.valeu_usuario_id ?? null,
					};

					return {
						...prev,
						caso: {
							...prev.caso,
							producao: [newEntry, ...existingEntries],
						},
					};
				});
			}
			setLoading(false);
		}
	};

	const stopCurrentTime = async (id: string) => {
		if (!id) {
			toast.error('Identificador do caso nao encontrado.');
			return;
		}
		setLoading(true);
		let shouldCloseEntry = false;
		try {
			const response = await stopTimeCase(id);
			if (response.success) {
				shouldCloseEntry = true;
				toast.success(response.message || 'Tempo Parado com sucesso!');
			} else {
				toast.warning(response.message || 'Nao foi possivel parar o tempo.');
			}
		} catch (error) {
			console.error('Erro ao parar o tempo:', error);
			toast.error('Falha ao parar o tempo.');
		} finally {
			if (shouldCloseEntry) {
		const stopTimeIso = new Date().toISOString();
		setLocalCase((prev) => {
			if (!prev) {
				return prev;
			}
			let closed = false;
			const updatedEntries = (prev.caso.producao ?? []).map((entry) => {
				if (!closed && !entry.datas.fechamento) {
					closed = true;
					return {
						...entry,
						datas: {
							...entry.datas,
							fechamento: stopTimeIso,
						},
					};
				}
				return entry;
			});

					return {
						...prev,
						caso: {
							...prev.caso,
							producao: updatedEntries,
						},
					};
				});
			}
			setLoading(false);
		}
	};

	const currentCase = localCase ?? caseData ?? null;
	const caseId = currentCase?.caso.id ? String(currentCase.caso.id) : undefined;
	const timeEntries = currentCase?.caso.producao ?? [];
	const activeEntry = timeEntries.find((entry) => !entry.datas.fechamento);
	const historyEntries = timeEntries.filter((entry) => entry.datas.fechamento);
	const currentTipo = activeEntry?.tipo ?? historyEntries[0]?.tipo ?? 'desenvolvendo';
	const runningStart = activeEntry?.datas.abertura ? formatTime(activeEntry.datas.abertura) : null;
	const isRunning = Boolean(activeEntry);

	
	useEffect(() => {
		if (!isRunning || !activeEntry?.datas.abertura) {
			setElapsedMinutes(null);
			return;
		}

		const startTime = new Date(activeEntry.datas.abertura);
		if (Number.isNaN(startTime.getTime())) {
			setElapsedMinutes(null);
			return;
		}

		const updateElapsed = () => {
			const diffMs = Math.max(Date.now() - startTime.getTime(), 0);
			const totalMinutes = Math.floor(diffMs / (1000 * 60));
			setElapsedMinutes(totalMinutes);
		};

		updateElapsed();
		const intervalId = window.setInterval(updateElapsed, 60000);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [activeEntry?.datas.abertura, isRunning]);

	const getAberturaFechamentoDuration = (start?: string, end?: string) => {
		if (!start || !end) {
			return null;
		}

		const startTime = new Date(start);
		const endTime = new Date(end);

		if (Number.isNaN(startTime.getTime()) || Number.isNaN(endTime.getTime())) {
			return null;
		}

		const diffMs = Math.max(endTime.getTime() - startTime.getTime(), 0);
		const totalMinutes = Math.floor(diffMs / (1000 * 60));
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		const paddedHours = hours.toString().padStart(2, '0');
		const paddedMinutes = minutes.toString().padStart(2, '0');

		return `${paddedHours}:${paddedMinutes}`;
	};

	return (
		<div className="d-flex flex-column gap-4">
			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<h5 className="mb-0 d-flex align-items-center">
						<IconifyIcon icon="lucide:clock" className="me-2 text-primary" />
						Controle de Tempo
					</h5>
				</Card.Header>
				<Card.Body>
					<Row className="align-items-md-center g-3">
						<Col xs={12} md={8}>
							<div className="d-flex flex-column gap-2">
								<div className="d-flex flex-wrap align-items-center gap-2">
									<Badge
										bg={isRunning ? 'success' : 'secondary'}
										className={badgeBaseClass}
										style={{ fontSize: '0.78rem' }}
									>
										<IconifyIcon icon={isRunning ? 'lucide:play' : 'lucide:pause'} />
										{isRunning ? 'Em andamento' : 'Pausado'}
									</Badge>
									<Badge
										bg={getTipoBadgeVariant(currentTipo)}
										className={badgeBaseClass}
										style={{ fontSize: '0.78rem' }}
									>
										<IconifyIcon icon={getTipoIcon(currentTipo)} />
										{formatTipoLabel(currentTipo)}
									</Badge>
								</div>
								<div className="text-muted d-flex align-items-center gap-2">
									<IconifyIcon icon={isRunning ? 'lucide:timer' : 'lucide:pause'} />
									<span className="small mb-0">
										{isRunning
											? runningStart
												? `Iniciado em: ${runningStart}`
												: 'Tempo em andamento'
											: 'Nenhum tempo em andamento'}
									</span>
								</div>
								{isRunning && elapsedMinutes !== null && (
									<div className="text-muted small">
										Tempo corrido: {elapsedMinutes} {elapsedMinutes === 1 ? 'minuto' : 'minutos'}
									</div>
								)}
							</div>
						</Col>
						<Col xs={12} md={4}>
							<div className="d-grid gap-2 d-md-flex justify-content-md-end">
								{
									isRunning ?
										<Button
											disabled={loading || !caseId}
											variant="danger"
											onClick={() => stopCurrentTime(caseId ?? '')}
											className="d-flex align-items-center justify-content-center justify-content-md-between gap-2"
										>
											<IconifyIcon icon="lucide:square" />
											{
												loading ?
													<span className="d-flex align-items-center gap-2">
														<span>Parar tempo</span>
														<Spinner className="spinner-grow-sm" tag="span" color="white" type="bordered" />
													</span>
													:
													'Parar tempo'
											}
										</Button>
										:
										<Button
											disabled={loading || !caseId}
											variant="success"
											onClick={() => startNewTime(caseId ?? '')}
											className="d-flex align-items-center justify-content-center justify-content-md-between gap-2"
										>
											<IconifyIcon icon="lucide:play" />
											{
												loading ?
													<span className="d-flex align-items-center gap-2">
														<span>Iniciar tempo</span>
														<Spinner className="spinner-grow-sm" tag="span" color="white" type="bordered" />
													</span>
													:
													'Iniciar tempo'
											}
										</Button>
								}
							</div>
						</Col>
					</Row>
				</Card.Body>
			</Card>

			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<h5 className="mb-0 d-flex align-items-center">
						<IconifyIcon icon="lucide:list" className="me-2 text-primary" />
						Historico de Tempos
					</h5>
				</Card.Header>
				<Card.Body className="p-0">
					<ListGroup variant="flush">
						{historyEntries.length ? (
							historyEntries.map((entry, index) => {
								const duration = getAberturaFechamentoDuration(entry.datas.abertura, entry.datas.fechamento);

								return (
									<ListGroup.Item
										key={index}
										className="d-flex flex-column flex-md-row gap-2 justify-content-between align-items-start align-items-md-center py-3 px-3"
									>
										<div className="d-flex flex-column gap-1">
											<Badge
												bg={getTipoBadgeVariant(entry.tipo)}
												className={badgeBaseClass}
												style={{ fontSize: '0.78rem', width: '60%' }}
											>
												<IconifyIcon icon={getTipoIcon(entry.tipo)}/>
												{formatTipoLabel(entry.tipo)}
											</Badge>
											<small className="text-muted">
												{formatTime(entry.datas.abertura)}
												{entry.datas.fechamento && ` - ${formatTime(entry.datas.fechamento)}`}
											</small>
										</div>
										{duration && (
											<Badge bg="info" className="ms-md-auto py-1 px-2 rounded-2" style={{ fontSize: '0.78rem' }}>
												{duration}
											</Badge>
										)}
									</ListGroup.Item>
								);
							})
						) : (
							<ListGroup.Item className="py-4 text-center text-muted">
								Nenhum historico de tempo registrado.
							</ListGroup.Item>
						)}
					</ListGroup>
				</Card.Body>
			</Card>
		</div>
	);
}

