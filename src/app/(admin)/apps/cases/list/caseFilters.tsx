'use client';
import { Form as RHForm, SelectInput, TextInput } from '@/components/Form';
import { Col, Form, Row } from 'react-bootstrap';
import * as yup from 'yup';

const CaseFilters = () => {
  const orderSchema = yup.object({
    email: yup.string().email('Please enter valid email').required('Please enter email'),
    password: yup.string().required('Please enter password'),
  });

  return (
    <RHForm onSubmit={() => {}} schema={orderSchema} className="w-100">
      <Row className="gy-3 gx-3 align-items-end">
        <Col xs={12} sm={6} md="auto">
          <Form.Label className="fw-medium text-muted small">Número do caso</Form.Label>
          <TextInput type="text" name="search" placeholder="Digite o número..." className="form-control-sm" />
        </Col>

        <Col xs={12} sm={6} md="auto">
          <Form.Label className="fw-medium text-muted small">Status</Form.Label>
          <SelectInput name="status" className="form-select form-select-sm">
            <option>Aberto</option>
            <option>Corrigido</option>
            <option>Retorno</option>
            <option>Fechado</option>
          </SelectInput>
        </Col>

        <Col xs={12} sm={6} md="auto">
          <Form.Label className="fw-medium text-muted small">Versão</Form.Label>
          <SelectInput name="versao" className="form-select form-select-sm">
            <option>1.0</option>
            <option>1.1</option>
            <option>2.0</option>
            <option>2.1</option>
          </SelectInput>
        </Col>
      </Row>
    </RHForm>
  );
};

export default CaseFilters;
