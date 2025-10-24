"use client";

import { useModal } from "@/app/(admin)/ui/base-ui/hooks";
import {Button, Modal} from "react-bootstrap";
import { useForm } from "react-hook-form";
import CaseWizard from "../form/wizard/caseWizard";

export default function CasesModal() {
    const { register, handleSubmit } = useForm();
    const { isOpen, toggleModal, openModalWithClass } = useModal();

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        toggleModal();
    };

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-end w-100">
                <Button
                    variant="primary"
                    onClick={() => openModalWithClass("modal-full-width")}
                >
                    <i className="mdi mdi-plus me-1"></i> Adicionar Novo Caso
                </Button>
            </div>

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
