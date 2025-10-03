"use client";

import { useModal } from "@/app/(admin)/ui/base-ui/hooks";
import { Row, Col, Card, Button, Modal, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Wizard } from "react-use-wizard";
import CaseWizard from "../form/wizard/caseWizard";

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
                size="lg"
                backdrop="static"
                fullscreen="sm-down"
            >
                <Modal.Header closeButton className="bg-light border-bottom">
                    <Modal.Title className="fw-bold text-primary">Adicionar Novo Caso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CaseWizard/>
                </Modal.Body>
            </Modal>
        </>
    );
}
