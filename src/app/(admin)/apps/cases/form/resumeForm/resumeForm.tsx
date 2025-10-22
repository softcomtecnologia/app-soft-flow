import FormResumeSkelleton from '@/app/(admin)/apps/cases/list/skelletons/formResumeSkelleton';
import { TextInput } from '@/components/Form';
import { FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { ICase } from '@/types/cases/ICase';
import { Form } from 'react-bootstrap';

interface ResumeFormProps {
	caseData: ICase | null;
}

export default function ResumeForm({ caseData }: ResumeFormProps) {

	const methods = useForm();

	useEffect(() => {
		if (caseData) {
			methods.reset({
				resumo: caseData.caso.textos.descricao_resumo,
			});
		}
	}, [caseData, methods]);

	return (
		<FormProvider {...methods}>
			{
				!caseData ? (
					<FormResumeSkelleton />
				) : (
					<>
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-4">
									<Form.Label className="fw-semibold">Versão*</Form.Label>
									<TextInput
										type="text"
										placeholder="Descrição"
										name="versao"
									/>
								</div>
								<div className="col-md-4">
									<Form.Label className="fw-semibold">Prioridade*</Form.Label>
									<TextInput
										type="text"
										placeholder="Descrição"
										name="prioridade"
									/>
								</div>
							</div>
							<div className="col-md-12">
								<Form.Label className="fw-semibold">Descrição Resumo*</Form.Label>
								<TextInput
									type="text"
									placeholder="Descrição"
									name="resumo"
								/>
							</div>
						</div>
					</>
				)
			}
		</FormProvider>
	);
}
