'use client'
import {Card, CardBody, Col, Row} from "react-bootstrap";
import CardTitle from "@/components/CardTitle";
import classnames from "classnames";
import Link from "next/link";
import dynamic from "next/dynamic";

const SimpleBar = dynamic(() => import('simplebar-react'), {ssr: false});

type Transaction = {
    icon: string;
    title: string;
    time: string;
    amount: string;
    textClass: string;
};

const transactions: Transaction[] = [
    {
        icon: 'mdi mdi-arrow-collapse-up',
        title: 'Purchased Hyper Admin Template',
        time: 'Today',
        amount: '-$489.30',
        textClass: 'text-danger',
    },
    {
        icon: 'mdi mdi-arrow-collapse-down',
        title: 'Payment received Bootstrap Marketplace',
        time: 'Yesterday',
        amount: '+$1578.54',
        textClass: 'text-success',
    },
    {
        icon: 'mdi mdi-arrow-collapse-down',
        title: 'Freelance work - Shane',
        time: '16 Sep 2018',
        amount: '+$247.5',
        textClass: 'text-success',
    },
    {
        icon: 'mdi mdi-arrow-collapse-up',
        title: 'Hire new developer for work',
        time: '09 Sep 2018',
        amount: '-$185.14',
        textClass: 'text-danger',
    },
    {
        icon: 'mdi mdi-arrow-collapse-down',
        title: 'Money received from paypal',
        time: '28 Aug 2018',
        amount: '+$684.45',
        textClass: 'text-success',
    },
    {
        icon: 'mdi mdi-arrow-collapse-up',
        title: 'Zairo landing purchased',
        time: '17 Aug 2018',
        amount: '-$21.00',
        textClass: 'text-danger',
    },
    {
        icon: 'mdi mdi-arrow-collapse-up',
        title: 'Purchased Ubold admin template',
        time: '17 Aug 2018',
        amount: '-$32.89',
        textClass: 'text-danger',
    },
    {
        icon: 'mdi mdi-arrow-collapse-down',
        title: 'Interest received',
        time: '09 Sep 2018',
        amount: '+$784.55',
        textClass: 'text-success',
    },
];

const Transactions = () => {
    return (
        <Card>
            <CardBody className="p-0">
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between px-3 pt-3 mb-2"
                    title="Transaction"
                    menuItems={[{label: 'Settings'}, {label: 'Action'}]}
                />

                <SimpleBar className="px-3" style={{maxHeight: '335px', overflowX: 'hidden'}}>
                    {transactions.map((item, index) => {
                        return (
                            <Row key={index.toString()} className="py-1 align-items-center">
                                <Col className="col-auto">
                                    <i className={classnames('font-18', item.icon, item.textClass)}></i>
                                </Col>
                                <Col className="ps-0">
                                    <Link href="" className="text-body">
                                        {item.title}
                                    </Link>
                                    <p className="mb-0 text-muted">
                                        <small>{item.time}</small>
                                    </p>
                                </Col>
                                <Col className="col-auto">
                                    <span className={classnames('fw-bold', 'pe-2', item.textClass)}>{item.amount}</span>
                                </Col>
                            </Row>
                        );
                    })}
                </SimpleBar>
            </CardBody>
        </Card>
    );
};

export default Transactions;