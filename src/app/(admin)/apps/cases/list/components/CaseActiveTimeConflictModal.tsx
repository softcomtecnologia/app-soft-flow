import { Modal, Button } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Spinner from '@/components/Spinner';

interface CaseActiveTimeConflictModalProps {
	show: boolean;
	caseId: string | null;
	message: string | null;
	loading: boolean;
	onCancel: () => void;
	onConfirm: () => void;
}

const CaseActiveTimeConflictModal = ({
	show,
	caseId,
	message,
	loading,
	onCancel,
	onConfirm,
}: CaseActiveTimeConflictModalProps) => {
	const defaultMessage = caseId
		? `O caso ${caseId} esta com tempo em andamento. Deseja parar esse tempo agora?`
		: 'Existe um caso com tempo em andamento. Deseja parar esse tempo agora?';

	return (
		<>
			<Modal
				show={show}
				onHide={loading ? undefined : onCancel}
				backdrop={loading ? 'static' : true}
				keyboard={!loading}
				dialogClassName="modal-top-centered"
				contentClassName="border-0 shadow-lg"
			>
				<Modal.Header closeButton={!loading}>
					<Modal.Title>Tempo em andamento</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="mb-0">{message || defaultMessage}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onCancel} disabled={loading}>
						Cancelar
					</Button>
					<Button
						variant="danger"
						onClick={onConfirm}
						disabled={loading || !caseId}
						className="d-flex align-items-center gap-2"
					>
						<IconifyIcon icon="lucide:square" />
						{loading ? (
							<span className="d-flex align-items-center gap-2">
								<span>Parar tempo</span>
								<Spinner className="spinner-grow-sm" tag="span" color="white" type="bordered" />
							</span>
						) : (
							'Parar tempo do caso aberto'
						)}
					</Button>
				</Modal.Footer>
			</Modal>
			<style jsx global>{`
				.modal-top-centered {
					margin: 1.5rem auto;
					display: flex;
					align-items: flex-start;
				}

				.modal-top-centered .modal-content {
					margin-top: 0;
				}

				@media (min-width: 576px) {
					.modal-top-centered {
						max-width: 480px;
					}
				}
			`}</style>
		</>
	);
};

export default CaseActiveTimeConflictModal;
