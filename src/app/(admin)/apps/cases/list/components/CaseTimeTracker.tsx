"use client";
import { Card, Button, Badge, Row, Col, ListGroup } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { ICase } from '@/types/cases/ICase';
import { startTimeCase, stopTimeCase } from '@/services/caseServices';
import { useState } from 'react';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';

interface CaseTimeTrackerProps {
	caseData?: ICase | null;
}

export default function CaseTimeTracker({ caseData }: CaseTimeTrackerProps) {

	const [startedTime, setStartedTime] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const BADGE_ICON_SIZE = 14;
	const badgeBaseClass = "d-inline-flex align-items-center gap-1 text-capitalize py-1 px-2 rounded-2";

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
		setLoading(true);
		try {
			const response = await startTimeCase(id)
			setStartedTime(response.success);
			if(response.success) {
				toast.success(response.message || 'Tempo iniciado com sucesso!');
			} else {
				toast.warning(response.message);
			}
			
		} catch (error) {
			console.error('Erro ao iniciar o tempo:', error);
			setStartedTime(false);
			toast.error('Falha ao iniciar o tempo.');
		}
		setLoading(false);
	};

	const stopCurrentTime = async (id: string) => {
		setLoading(true);
		try {
			const response = await stopTimeCase(id)
			toast.success(response.message || 'Tempo Parado com sucesso!');
			setStartedTime(false);
			
		} catch (error) {
			console.error('Erro ao parar o tempo:', error);
		}
		setLoading(false);
	};

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

	const activeEntry = caseData?.caso.producao?.find((entry) => !entry.datas.fechamento);
	const currentTipo = activeEntry?.tipo ?? caseData?.caso.producao?.[0]?.tipo ?? 'desenvolvendo';
	const runningStart = activeEntry?.datas.abertura ? formatTime(activeEntry.datas.abertura) : null;
	const isRunning = startedTime || Boolean(activeEntry);

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
							</div>
						</Col>
						<Col xs={12} md={4}>
							<div className="d-grid gap-2 d-md-flex justify-content-md-end">
								{
									startedTime ?
										<Button
											disabled={loading}
											variant="danger"
											onClick={() => stopCurrentTime(`${caseData?.caso.id}`)}
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
											disabled={loading}
											variant="success"
											onClick={() => startNewTime(`${caseData?.caso.id}`)}
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
						{caseData?.caso.producao?.length ? (
							caseData.caso.producao.map((entry, index) => {
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
												style={{ fontSize: '0.78rem' }}
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

