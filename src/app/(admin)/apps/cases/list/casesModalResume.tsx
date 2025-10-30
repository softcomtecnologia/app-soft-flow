"use client";
import { Card, Button, Modal, Placeholder, Nav, Tab } from "react-bootstrap";
import { ICase } from '@/types/cases/ICase';
import ResumeForm from '@/app/(admin)/apps/cases/form/resumeForm/resumeForm';
import CaseTimeTracker from './components/CaseTimeTracker';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import TimetrackerSkelleton from "./skelletons/timetrackerSkelleton";
import { CASE_CONFLICT_MODAL_CLOSE_EVENT, CASE_RESUME_MODAL_FORCE_CLOSE_EVENT } from '@/constants/caseTimeTracker';

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	case: ICase | null;
}

export default function CasesModalResume({ setOpen, open, case: caseData }: Props) {

	const handleClose = () => {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new Event(CASE_CONFLICT_MODAL_CLOSE_EVENT));
			window.dispatchEvent(new Event(CASE_RESUME_MODAL_FORCE_CLOSE_EVENT));
		}
		setOpen(false);
	};

	return (
		<>
			<Modal show={open} onHide={handleClose} size="xl" backdrop="static" fullscreen="sm-down">
				<Modal.Header closeButton className="bg-primary text-white">
					<div className="d-flex align-items-center">
						<IconifyIcon icon="lucide:file-text" className="me-2" />
						<Modal.Title className="fw-bold">
							{!caseData ? (
								<Placeholder as="span" animation="glow">
									<Placeholder xs={3} />
								</Placeholder>
							) : (
								`Caso #${caseData.caso.id}`
							)}
						</Modal.Title>
					</div>
				</Modal.Header>
				<Modal.Body className="p-0">
					<Tab.Container defaultActiveKey="resumo">
						<div>
							<Nav variant="tabs" className="nav nav-tabs nav-bordered border-bottom">
								<Nav.Item>
									<Nav.Link eventKey="resumo" className="d-flex align-items-center">
										<IconifyIcon icon="lucide:info" className="me-2" />
										<span>Resumo</span>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="detalhes" className="d-flex align-items-center">
										<IconifyIcon icon="lucide:file-text" className="me-2" />
										<span>Anotações</span>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="tempo" className="d-flex align-items-center">
										<IconifyIcon icon="lucide:clock" className="me-2" />
										<span>Tempo</span>
									</Nav.Link>
								</Nav.Item>
							</Nav>
							<div className="p-4">
								<Tab.Content>
									<Tab.Pane eventKey="resumo">
										<ResumeForm caseData={caseData}/>
									</Tab.Pane>
									<Tab.Pane eventKey="detalhes">
										<div className="text-center py-5">
											<IconifyIcon icon="lucide:file-text" className="text-muted mb-3" style={{ fontSize: '3rem' }} />
											<h5 className="text-muted">Teste Aba Detalhes</h5>
											<p className="text-muted">Conteúdo da aba de detalhes será implementado aqui.</p>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="tempo">
										{
											!caseData ? <TimetrackerSkelleton/> : <CaseTimeTracker key={caseData.caso.id} caseData={caseData} />
										}
									</Tab.Pane>
								</Tab.Content>
							</div>
						</div>
					</Tab.Container>
				</Modal.Body>
				<Modal.Footer className="bg-light border-top">
					<Button variant="secondary" onClick={handleClose} className="d-flex align-items-center">
						<IconifyIcon icon="lucide:x" className="me-1" />
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
