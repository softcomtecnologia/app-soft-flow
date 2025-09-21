import { ReactNode } from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAccountLayout } from '@/components/BGCircles';

// images
import LogoLight from '@/assets/images/logo.png';
import LogoDark from '@/assets/images/logo-dark.png';
import Link from 'next/link';
import Image from 'next/image';

type AccountLayoutProps = {
	bottomLinks?: ReactNode;
	children?: ReactNode;
};

const AccountWrapper2 = ({ bottomLinks, children }: AccountLayoutProps) => {
	useAccountLayout();
	const { t } = useTranslation();

	return (
		<div className="auth-fluid">
			<div className="auth-fluid-form-box">
				<CardBody className="d-flex flex-column h-100 gap-3">
					<div className="auth-brand text-center text-lg-start">
						<Link href="/" className="logo-dark">
							<span>
								<Image src={LogoDark} alt="" height={22} />
							</span>
						</Link>
						<Link href="/" className="logo-light">
							<span>
								<Image src={LogoLight} alt="" height={22} />
							</span>
						</Link>
					</div>

					<div className="my-auto">{children}</div>

					{bottomLinks}
				</CardBody>
			</div>

			<div className="auth-fluid-right text-center">
				<div className="auth-user-testimonial">
					<h2 className="mb-3">{t('I love the color!')}</h2>
					<p className="lead">
						<i className="mdi mdi-format-quote-open"></i>
						{t("It's a elegent templete. I love it very much! .")}
						<i className="mdi mdi-format-quote-close"></i>
					</p>
					<p>{t('- Hyper Admin User')}</p>
				</div>
			</div>
		</div>
	);
};

export default AccountWrapper2;
