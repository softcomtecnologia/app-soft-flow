'use client';
import { Card, CardBody, Col, Modal, ModalBody, ModalHeader, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useToggle } from '@/hooks';
import { Client } from './types';
import { chatMessages } from './data';
import clientImg from '@/assets/images/users/avatar-4.jpg';
import CardTitle from '@/components/CardTitle';
import Image from 'next/image';
import Link from 'next/link';
import { ChatList } from '@/components/ChatList';

type ClientWidgetProps = {
	clients: Array<Client>;
};

const ClientWidget = ({ clients }: ClientWidgetProps) => {
	const [isOpen, toggleModal] = useToggle();

	return (
		<>
			{(clients || []).map((client, index) => {
				return (
					<Col key={index.toString()}>
						<Card>
							<CardBody>
								<CardTitle
									containerClass="d-flex"
									title={
										<>
											<div className="flex-shrink-0">
												<Image src={client.avatar} alt="" className="rounded-circle avatar-sm" />
											</div>
											<div className="flex-grow-1 ms-2">
												<Link href="" className="text-secondary">
													<h5 className="my-1">{client.name}</h5>
												</Link>
												<p className="text-muted mb-0">{client.companyName}</p>
											</div>
										</>
									}
									icon="mdi mdi-dots-horizontal"
									menuItems={[
										{ label: 'Visite Profile', icon: 'mdi mdi-account' },
										{ label: 'Block', icon: 'mdi mdi-block-helper' },
										{
											label: 'Remove',
											icon: 'mdi mdi-trash-can-outline',
											variant: 'text-danger',
											hasDivider: true,
										},
									]}
								/>
							</CardBody>
							<Card.Body className="d-flex justify-content-between align-items-center py-2 border-top border-light">
								<h5 className="my-0 font-13 fw-semibold text-muted">
									<i className="mdi mdi-calendar me-1"></i>
									Jan 05 2022
								</h5>
								<Link href="" className="text-muted" onClick={toggleModal}>
									<OverlayTrigger placement="top" overlay={<Tooltip>Chat</Tooltip>}>
										<i className="uil uil-comment-alt-lines font-18" />
									</OverlayTrigger>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				);
			})}

			<Modal show={isOpen} onHide={toggleModal}>
				<ModalHeader onHide={toggleModal} closeButton>
					<h5 className="modal-title" id="exampleModalLabel">
						<div className="d-flex align-items-center">
							<div className="flex-shrink-0">
								<Image className="rounded-circle" src={clientImg} height="40" alt="AvtarImage" />
							</div>
							<div className="flex-grow-1 ms-2">
								<Link href="" className="text-secondary">
									Kevin Snowden
								</Link>
								<p className="text-muted fw-normal font-14 mb-0">
									<i className="mdi mdi-circle text-success font-12 me-1"></i>
									Online
								</p>
							</div>
						</div>
					</h5>
				</ModalHeader>
				<ModalBody className="p-0">
					<ChatList chatMessages={chatMessages}></ChatList>
				</ModalBody>
			</Modal>
		</>
	);
};

export default ClientWidget;
