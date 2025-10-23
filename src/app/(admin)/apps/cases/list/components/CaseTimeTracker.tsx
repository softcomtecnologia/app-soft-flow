"use client";
import { useState } from 'react';
import { Card, Button, Badge, Row, Col, ListGroup } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

interface TimeEntry {
	id: string;
	startTime: string;
	endTime?: string;
	duration?: string;
	tipo: 'desenvolvendo' | 'testando' | 'retorno' | 'nao_planejado';
	status: 'running' | 'stopped';
}

interface CaseTimeTrackerProps {
	caseId: string;
}

export default function CaseTimeTracker({ caseId }: CaseTimeTrackerProps) {
	const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
		{
			id: '1',
			startTime: '2024-01-15 09:00:00',
			endTime: '2024-01-15 12:30:00',
			duration: '3h 30m',
			tipo: 'desenvolvendo',
			status: 'stopped'
		},
		{
			id: '2',
			startTime: '2024-01-15 14:00:00',
			endTime: '2024-01-15 17:45:00',
			duration: '3h 45m',
			tipo: 'testando',
			status: 'stopped'
		},
		{
			id: '3',
			startTime: '2024-01-16 08:30:00',
			tipo: 'desenvolvendo',
			status: 'running'
		}
	]);

	const [isRunning, setIsRunning] = useState(false);

	const getTipoTitle = (tipo: string) => {
		const tipos = {
			'desenvolvendo': 'Desenvolvendo',
			'testando': 'Testando',
			'retorno': 'Retorno',
			'nao_planejado': 'Não Planejado'
		};
		return tipos[tipo as keyof typeof tipos] || tipo;
	};

	const getTipoIcon = (tipo: string) => {
		const icons = {
			'desenvolvendo': 'lucide:code',
			'testando': 'lucide:test-tube',
			'retorno': 'lucide:rotate-ccw',
			'nao_planejado': 'lucide:alert-circle'
		};
		return icons[tipo as keyof typeof icons] || 'lucide:clock';
	};

	const getTipoBadgeVariant = (tipo: string) => {
		const variants = {
			'desenvolvendo': 'primary',
			'testando': 'warning',
			'retorno': 'info',
			'nao_planejado': 'danger'
		};
		return variants[tipo as keyof typeof variants] || 'secondary';
	};

	const formatTime = (timeString: string) => {
		return new Date(timeString).toLocaleString('pt-BR');
	};

	const getCurrentTime = () => {
		return new Date().toLocaleString('pt-BR');
	};

	const startNewTime = (tipo: 'desenvolvendo' | 'testando' | 'retorno' | 'nao_planejado' = 'desenvolvendo') => {
		const newEntry: TimeEntry = {
			id: Date.now().toString(),
			startTime: new Date().toISOString(),
			tipo: tipo,
			status: 'running'
		};

		// Parar o tempo atual se estiver rodando
		const updatedEntries = timeEntries.map(entry => {
			if (entry.status === 'running') {
				return {
					...entry,
					status: 'stopped' as const,
					endTime: new Date().toISOString(),
					duration: calculateDuration(entry.startTime, new Date().toISOString())
				};
			}
			return entry;
		});

		setTimeEntries([...updatedEntries, newEntry]);
		setIsRunning(true);
	};

	const stopCurrentTime = () => {
		const updatedEntries = timeEntries.map(entry => {
			if (entry.status === 'running') {
				return {
					...entry,
					status: 'stopped' as const,
					endTime: new Date().toISOString(),
					duration: calculateDuration(entry.startTime, new Date().toISOString())
				};
			}
			return entry;
		});

		setTimeEntries(updatedEntries);
		setIsRunning(false);
	};

	const calculateDuration = (start: string, end: string) => {
		const startTime = new Date(start);
		const endTime = new Date(end);
		const diffMs = endTime.getTime() - startTime.getTime();
		
		const hours = Math.floor(diffMs / (1000 * 60 * 60));
		const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
		
		return `${hours}h ${minutes}m`;
	};


	const runningEntry = timeEntries.find(entry => entry.status === 'running');

	return (
		<div className="d-flex flex-column gap-4">
			{/* Controles de Tempo */}
			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<h5 className="mb-0 d-flex align-items-center">
						<IconifyIcon icon="lucide:clock" className="me-2 text-primary" />
						Controle de Tempo
					</h5>
				</Card.Header>
				<Card.Body>
					<Row className="align-items-center">
						<Col md={8}>
							{runningEntry ? (
								<div>
									<div className="d-flex align-items-center mb-2">
										<Badge bg="success" className="me-2">
											<IconifyIcon icon="lucide:play" className="me-1" />
											Em Andamento
										</Badge>
										<Badge bg={getTipoBadgeVariant(runningEntry.tipo)} className="me-2">
											<IconifyIcon icon={getTipoIcon(runningEntry.tipo)} className="me-1" />
											{getTipoTitle(runningEntry.tipo)}
										</Badge>
										<span className="text-muted">Iniciado em: {formatTime(runningEntry.startTime)}</span>
									</div>
								</div>
							) : (
								<div className="text-muted">
									<IconifyIcon icon="lucide:pause" className="me-2" />
									Nenhum tempo em andamento
								</div>
							)}
						</Col>
						<Col md={4} className="text-end">
							{runningEntry ? (
								<Button 
									variant="danger" 
									onClick={stopCurrentTime}
									className="d-flex align-items-center"
								>
									<IconifyIcon icon="lucide:square" className="me-1" />
									Parar Tempo
								</Button>
							) : (
								<Button 
									variant="success" 
									onClick={() => startNewTime('desenvolvendo')}
									className="d-flex align-items-center"
								>
									<IconifyIcon icon="lucide:play" className="me-1" />
									Iniciar Tempo
								</Button>
							)}
						</Col>
					</Row>
				</Card.Body>
			</Card>


			{/* Lista de Tempos */}
			<Card className="border-0 shadow-sm">
				<Card.Header className="bg-light border-bottom">
					<h5 className="mb-0 d-flex align-items-center">
						<IconifyIcon icon="lucide:list" className="me-2 text-primary" />
						Histórico de Tempos
					</h5>
				</Card.Header>
				<Card.Body className="p-0">
					<ListGroup variant="flush">
						{timeEntries.map((entry, index) => (
							<ListGroup.Item key={entry.id} className="d-flex justify-content-between align-items-center">
								<div className="d-flex align-items-center">
									<div className="me-3">
										{entry.status === 'running' ? (
											<Badge bg="success">
												<IconifyIcon icon="lucide:play" />
											</Badge>
										) : (
											<Badge bg="secondary">
												<IconifyIcon icon="lucide:square" />
											</Badge>
										)}
									</div>
									<div>
										<div className="d-flex align-items-center mb-1">
											<Badge bg={getTipoBadgeVariant(entry.tipo)} className="me-2">
												<IconifyIcon icon={getTipoIcon(entry.tipo)} className="me-1" />
												{getTipoTitle(entry.tipo)}
											</Badge>
										</div>
										<small className="text-muted">
											{formatTime(entry.startTime)}
											{entry.endTime && ` - ${formatTime(entry.endTime)}`}
										</small>
									</div>
								</div>
								<div className="text-end">
									{entry.duration && (
										<Badge bg="info" className="fs-6">
											{entry.duration}
										</Badge>
									)}
									{entry.status === 'running' && (
										<Badge bg="warning" className="fs-6">
											Em andamento...
										</Badge>
									)}
								</div>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</div>
	);
}
