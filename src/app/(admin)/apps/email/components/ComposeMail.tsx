"use client";
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useComposeMail } from '../hooks';
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

import { Form, TextInput } from '@/components/Form';
import dynamic from 'next/dynamic';

type ComposeMailProps = {
	isModalOpen: boolean;
	toggleComposeModal: () => void;
};

const ComposeMail = ({ isModalOpen, toggleComposeModal }: ComposeMailProps) => {
	const { editorState, schema, handleEmailSave, onEditorStateChange } = useComposeMail(toggleComposeModal);

	return (
		<Modal show={isModalOpen} onHide={toggleComposeModal}>
			<Modal.Header closeButton onHide={toggleComposeModal} className="modal-colored-header bg-primary">
				<Modal.Title className="m-0">New Message</Modal.Title>
			</Modal.Header>
			<div className="p-1">
				<Modal.Body className="px-3 pt-3 pb-0">
					<Form onSubmit={handleEmailSave} schema={schema}>
						<TextInput label="To" type="email" name="to" placeholder="example@email.com" containerClass={'mb-2'} />
						<TextInput label="Subject" type="text" name="subject" placeholder="Your subject" containerClass={'mb-2'} />
						<Row className="mb-3">
							<Col>
								<label className="form-label">Message</label>
								<ReactQuill className='mb-4' theme="snow" style={{ height: 150 }}  />
							</Col>
						</Row>
						<div className="pb-3">
							<Button variant="primary" type="submit" className="me-1">
								<i className="mdi mdi-send me-1"></i> Send Message
							</Button>
							<Button variant="light" onClick={toggleComposeModal}>
								Cancel
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</div>
		</Modal>
	);
};

export default ComposeMail;
