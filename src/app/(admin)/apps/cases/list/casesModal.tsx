"use client";

import { useModal } from "@/app/(admin)/ui/base-ui/hooks";
import { Row, Col, Card, Button, Modal, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function CasesModal() {
    const { register, handleSubmit } = useForm();
    const { isOpen, toggleModal, openModalWithClass } = useModal();

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        toggleModal();
    };

    const logs = [
        { abertura: "19/09/2025 15:41", fechamento: "19/09/2025 16:06", tempo: "00:25", tipo: "DESENVOLVENDO", usuario: "Lins", projeto: "2959", valeu: "Vinicius" },
        { abertura: "19/09/2025 15:08", fechamento: "19/09/2025 15:33", tempo: "00:25", tipo: "DESENVOLVENDO", usuario: "Lins", projeto: "2959", valeu: "Vinicius" },
        { abertura: "19/09/2025 13:56", fechamento: "19/09/2025 14:08", tempo: "00:12", tipo: "DESENVOLVENDO", usuario: "Lins", projeto: "2959", valeu: "Vinicius" },
        { abertura: "19/09/2025 11:48", fechamento: "19/09/2025 11:53", tempo: "00:05", tipo: "DESENVOLVENDO", usuario: "Lins", projeto: "2959", valeu: "Vinicius" },
    ];

    return (
        <>
            <Button
                variant="primary"
                className="w-auto"
                onClick={() => openModalWithClass("modal-full-width")}
            >
                <i className="mdi mdi-plus me-1"></i> Adicionar Novo Caso
            </Button>

            <Modal
                show={isOpen}
                onHide={toggleModal}
                dialogClassName="modal-full-width"
                backdrop="static"
                fullscreen="sm-down"
            >
                <style jsx global>{`
                    @media (max-width: 768px) {
                        .modal-full-width .modal-dialog {
                            margin: 0 !important;
                            max-width: 100% !important;
                        }
                        .modal-full-width .modal-content {
                            border-radius: 0;
                            min-height: 100vh;
                        }
                        .modal-full-width .modal-body {
                            max-height: calc(100vh - 120px);
                            overflow-y: auto;
                            scrollbar-width: none;
                        }
                        .modal-full-width .modal-body::-webkit-scrollbar {
                            display: none;
                        }
                    }
                `}</style>

                <Modal.Header closeButton className="bg-light border-bottom">
                    <Modal.Title className="fw-bold text-primary">Adicionar Novo Caso</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body className="p-4">
                        <Row className="gx-4">
                            <Col md={8}>
                                <Card className="mb-3 shadow-sm border-0">
                                    <Card.Header className="bg-light fw-bold text-dark border-bottom">
                                        Cabeçalho
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="g-3">
																					<Col md={3}>
																							<Form.Label>Data</Form.Label>
																							<Form.Control type="datetime-local" {...register("data")} />
																					</Col>
																					<Col md={3}>
																							<Form.Label>Produto*</Form.Label>
																							<Form.Control type="text" {...register("produto")} />
																					</Col>

																					<Col md={3}>
																							<Form.Label>Projeto</Form.Label>
																							<Form.Control type="text" {...register("projeto")} />
																					</Col>
																					<Col md={3}>
																						<Form.Label>Versão</Form.Label>
																						<Form.Control type="text" {...register("versao")} />
																					</Col>
                                        </Row>
																				<Row className="g-3">
																					<Col md={3}>
																						<Form.Label>Módulo</Form.Label>
																						<Form.Control type="text" {...register("modulo")} />
																					</Col>
																					<Col md={3}>
																						<Form.Label>Origem</Form.Label>
																						<Form.Control type="text" {...register("origem")} />
																					</Col>
																					<Col md={3}>
																						<Form.Label>Categoria</Form.Label>
																						<Form.Control type="text" {...register("categoria")} />
																					</Col>
																					<Col md={3}>
																						<Form.Label>Relator</Form.Label>
																						<Form.Control type="text" {...register("relator")} />
																					</Col>
																				</Row>
																			<Row className="g-3">

																				<Col md={2}>
																					<Form.Label>Importância</Form.Label>
																					<Form.Control type="number" {...register("importancia")} />
																				</Col>
																				</Row>

                                    </Card.Body>
                                </Card>

                                <Card className="mb-3 shadow-sm border-0">
                                    <Card.Header className="bg-light fw-bold text-dark border-bottom">
                                        Classificação
                                    </Card.Header>
                                    <Card.Body>

                                    </Card.Body>
                                </Card>

                                {/* Descrições */}
                                <Card className="shadow-sm border-0">
                                    <Card.Header className="bg-light fw-bold text-dark border-bottom">
                                        Descrições
                                    </Card.Header>
                                    <Card.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Descrição Resumo</Form.Label>
                                            <Form.Control as="textarea" rows={2} className="w-100" {...register("resumo")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Descrição Completa</Form.Label>
                                            <Form.Control as="textarea" rows={5} {...register("descricao")} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Anexo (link)</Form.Label>
                                            <Form.Control type="text" placeholder="Cole o link do anexo aqui..." {...register("anexo")} />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="mb-3 shadow-sm border-0">
                                    <Card.Header className="bg-light fw-bold text-dark border-bottom">
                                        Atribuição e Status
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <Form.Label>Dev Atribuído</Form.Label>
                                                <Form.Control type="text" {...register("dev")} />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Label>QA Atribuído</Form.Label>
                                                <Form.Control type="text" {...register("qa")} />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Label>Resolução</Form.Label>
                                                <Form.Control type="text" {...register("resolucao")} />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Label>Estado</Form.Label>
                                                <Form.Control type="text" {...register("estado")} />
                                            </Col>
                                            <Col md={12}>
                                                <Form.Label>Data Previsão</Form.Label>
                                                <Form.Control type="date" {...register("dataPrevisao")} />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card className="mb-3 shadow-sm border-0">
                                    <Card.Header className="bg-light fw-bold text-dark border-bottom">
                                        Viabilidade e Checks
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="g-3">
                                            {["Viabilidade", "Entendível", "Realizável", "Completo", "Liberação", "Entregue", "Atualização Automática"].map((flag) => (
                                                <Col xs={6} key={flag}>
                                                    <Form.Check type="checkbox" label={flag} {...register(flag.toLowerCase())} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card className="shadow-sm border-0">
                                    <Card.Header className="bg-light fw-bold text-dark border-bottom">
                                        Informações Adicionais
                                    </Card.Header>
                                    <Card.Body>
                                        <Form.Control as="textarea" rows={3} {...register("infoAdicionais")} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Card className="mt-4 shadow-sm border-0">
                            <Card.Header className="bg-light fw-bold text-dark border-bottom">Rodapé</Card.Header>
                            <Card.Body>
                                <Row className="g-2 align-items-end mb-3">
                                    <Col md={3}>
                                        <Form.Label>Usuário</Form.Label>
                                        <Form.Control type="text" defaultValue="Lins" {...register("usuario")} />
                                    </Col>
                                    <Col md={2} className="d-flex align-items-end">
                                        <Button variant="success" className="w-100">Iniciar</Button>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Label>Tamanho</Form.Label>
                                        <Form.Control type="number" defaultValue="21" {...register("tamanho")} />
                                    </Col>
                                    <Col md={2}>
                                        <Form.Label>Estimado</Form.Label>
                                        <Form.Control type="text" defaultValue="12:00" {...register("tempoEstimado")} />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label>Excedido</Form.Label>
                                        <Form.Control type="text" defaultValue="-08:07" {...register("tempoExcedido")} className="text-danger fw-bold" />
                                    </Col>
                                </Row>

                                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                                    <Table bordered hover size="sm" responsive>
                                        <thead className="table-light">
                                            <tr>
                                                <th>Abertura</th>
                                                <th>Fechamento</th>
                                                <th>Tempo Produção</th>
                                                <th>Tipo</th>
                                                <th>Usuário</th>
                                                <th>Projeto</th>
                                                <th>Valeu</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {logs.map((log, i) => (
                                                <tr key={i}>
                                                    <td>{log.abertura}</td>
                                                    <td>{log.fechamento}</td>
                                                    <td>{log.tempo}</td>
                                                    <td>{log.tipo}</td>
                                                    <td>{log.usuario}</td>
                                                    <td>{log.projeto}</td>
                                                    <td>{log.valeu}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>

                                <div className="d-flex justify-content-between mt-2 small fw-bold text-muted">
                                    <span>Total Horas: 20:07</span>
                                    <span>Total Horas Teste: 00:52</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer className="bg-light">
                        <Button variant="outline-secondary" onClick={toggleModal}>Cancelar</Button>
                        <Button type="submit" variant="primary">Salvar Caso</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
