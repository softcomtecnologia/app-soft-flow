'use client';
import { CheckInput, Form, PasswordInput, TextInput } from '@/components/Form';
import Link from 'next/link';
import { Button, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AccountWrapper from '../AccountWrapper';
import useLogin from '../login2/useLogin';

const BottomLink = () => {
	const { t } = useTranslation();

	return (
		<Row className="mt-3">
			<Col className="text-center">
			</Col>
		</Row>
	);
};

const LoginPage = () => {
	const { t } = useTranslation();
	const { loading, login } = useLogin();
	return (
		<AccountWrapper bottomLinks={<BottomLink />}>
			<div className="text-center w-75 m-auto">
				<h4 className="text-dark-50 text-center mt-0 fw-bold">{t('Sign In')}</h4>
				<p className="text-muted mb-4">{t('Bem-vindo(a) ao SoftFlow — organize casos e avance entregas.”')}</p>
			</div>
			<Form onSubmit={login}>
				<Row>
					<Col>
						<TextInput label={t('Email')} name="email" type="email" placeholder={t('Digite seu email')} containerClass="mb-3" />
					</Col>
				</Row>
				<PasswordInput label={t('Senha')} name="password" placeholder={t('Digite sua senha')} containerClass="mb-3"/>

				<CheckInput name="rememberme" type="checkbox" label="Lembrar de mim" containerClass="mb-3" defaultChecked />

				<div className="mb-3 text-center">
					<Button variant="primary" type="submit" disabled={loading}>
						{t('Log In')}
					</Button>
				</div>
			</Form>
		</AccountWrapper>
	);
};

export default LoginPage;
