"use client";

import { useModal } from "@/app/(admin)/ui/base-ui/hooks";
import { Button, Modal } from "react-bootstrap";
import type { ButtonProps } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CaseWizard from "../form/wizard/caseWizard";

type CasesModalProps = {
	containerClassName?: string;
	buttonClassName?: string;
	buttonProps?: ButtonProps;
};

export default function CasesModal({
	containerClassName = "d-grid gap-2 d-sm-flex justify-content-sm-end w-100",
	buttonClassName,
	buttonProps,
}: CasesModalProps) {
    const { register, handleSubmit } = useForm();
    const { isOpen, toggleModal, openModalWithClass } = useModal();

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        toggleModal();
    };

	const { className: additionalButtonClassName, variant: customVariant, ...restButtonProps } = buttonProps ?? {};
	const mergedButtonClassName = ["d-inline-flex align-items-center", buttonClassName, additionalButtonClassName]
		.filter(Boolean)
		.join(" ");

    return (
        <>
            <div className={containerClassName}>
                <Button
                    variant={customVariant ?? "primary"}
                    onClick={() => openModalWithClass("modal-full-width")}
					className={mergedButtonClassName}
					{...restButtonProps}
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
