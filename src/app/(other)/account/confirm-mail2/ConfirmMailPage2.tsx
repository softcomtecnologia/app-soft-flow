'use client';
import emailSentImg from '@/assets/images/svg/mail_sent.svg';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AccountWrapper2 from '../AccountWrapper2';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const BottomLink = () => {
	return (
		<footer className="footer footer-alt">
			<p className="text-muted">2018 - {new Date().getFullYear()} © Hyper - Coderthemes.com</p>
		</footer>
	);
};
const ConfirmMailPage2 = () => {
	const { t } = useTranslation();

	const navigate = useRouter();

	const handleSubmit = () => {
		navigate.push('/account/login2');
	};
	return (
		<AccountWrapper2 bottomLinks={<BottomLink />}>
			<div>
				<div className="text-center m-auto">
					<Image src={emailSentImg} alt="mail sent image" height={64} />
					<h4 className="text-dark-50 text-center mt-4 fw-bold">{t('Please check your email')}</h4>
					<p className="text-muted mb-4">
						A email has been send to <b>youremail@domain.com</b>. Please check for an email from company and click on the included link to reset your
						password.
					</p>
				</div>
				<div className="mb-0 d-grid text-center">
					<Button variant="primary" type="submit" onClick={handleSubmit}>
						<i className="mdi mdi-home me-1" />
						{t('Back to Login')}
					</Button>
				</div>
			</div>
		</AccountWrapper2>
	);
};

export default ConfirmMailPage2;
