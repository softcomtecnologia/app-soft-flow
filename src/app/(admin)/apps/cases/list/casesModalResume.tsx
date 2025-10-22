"use client";
import { Card, Button, Modal, Placeholder } from "react-bootstrap";
import { ICase } from '@/types/cases/ICase';
import ResumeForm from '@/app/(admin)/apps/cases/form/resumeForm/resumeForm';

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	case: ICase | null;
}

export default function CasesModalResume({ setOpen, open, case: caseData }: Props) {

	return (
		<>
			<Modal show={open} onHide={() => setOpen(false)} size="lg" backdrop="static" fullscreen="sm-down">
				<Modal.Header closeButton className="bg-light border-bottom">
					<Modal.Title className={'fw-bold text-primary'} style={{ width: '100%' }}>
						{!caseData ? (
							<Placeholder as="span" animation="glow">
								<Placeholder xs={2} />
							</Placeholder>
						) : (
							caseData.caso.id
						)}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card>
						<Card.Body>
							<ResumeForm caseData={caseData}/>
						</Card.Body>
					</Card>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setOpen(false)}>
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
