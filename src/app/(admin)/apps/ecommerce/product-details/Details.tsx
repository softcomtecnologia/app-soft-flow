'use client';
import Rating from '@/components/Rating';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import useProductDetails from '../hooks/useProductDetails';

// images
import productImg2 from '@/assets/images/products/product-1.jpg';
import productImg4 from '@/assets/images/products/product-3.jpg';
import productImg1 from '@/assets/images/products/product-5.jpg';
import productImg3 from '@/assets/images/products/product-6.jpg';

const Details = () => {
	const { selectedProductImg, handleImgChange, product } = useProductDetails();

	return (
		<Row>
			<Col lg={5}>
				<Link href="" className="text-center d-block mb-4">
					<Image width={280} height={357} src={selectedProductImg} className="img-fluid" style={{ maxWidth: '280px' }} alt="Product-img" />
				</Link>

				<div className="d-lg-flex d-none justify-content-center">
					<Link
						href=""
						onMouseOver={(e) => {
							handleImgChange(e, productImg1.src);
						}}
						onClick={(e) => {
							handleImgChange(e, productImg1.src);
						}}
					>
						<Image src={productImg1} className="img-fluid img-thumbnail p-2" style={{ maxWidth: '75px' }} alt="Product-img" />
					</Link>
					<Link
						href=""
						className="ms-2"
						onMouseOver={(e) => {
							handleImgChange(e, productImg2.src);
						}}
						onClick={(e) => {
							handleImgChange(e, productImg2.src);
						}}
					>
						<Image src={productImg2} width={75} height={88} className="img-fluid img-thumbnail p-2" style={{ maxWidth: '75px' }} alt="Product-img" />
					</Link>
					<Link
						href=""
						className="ms-2"
						onMouseOver={(e) => {
							handleImgChange(e, productImg3.src);
						}}
						onClick={(e) => {
							handleImgChange(e, productImg3.src);
						}}
					>
						<Image src={productImg3} width={75} height={88} className="img-fluid img-thumbnail p-2" style={{ maxWidth: '75px' }} alt="Product-img" />
					</Link>
					<Link
						href=""
						className="ms-2"
						onMouseOver={(e) => {
							handleImgChange(e, productImg4.src);
						}}
						onClick={(e) => {
							handleImgChange(e, productImg4.src);
						}}
					>
						<Image src={productImg4} width={75} height={88} className="img-fluid img-thumbnail p-2" style={{ maxWidth: '75px' }} alt="Product-img" />
					</Link>
				</div>
			</Col>

			<Col lg={7}>
				<form className="ps-lg-4">
					<h3 className="mt-0">
						{product.name}
						<Link href="" className="text-muted">
							<i className="mdi mdi-square-edit-outline ms-2"></i>
						</Link>
					</h3>
					<p className="mb-1">Added Date: {product.addedOn}</p>
					<Rating value={Number(product.rating)} />

					<div className="mt-3">
						<h4>
							<span className="badge badge-success-lighten">{product.status}</span>
						</h4>
					</div>

					<div className="mt-4">
						<h6 className="font-14">Retail Price:</h6>
						<h3> {product.price}</h3>
					</div>

					<div className="mt-4">
						<h6 className="font-14">Quantity</h6>
						<div className="d-flex">
							<input type="number" min="1" defaultValue={1} className="form-control" placeholder="Qty" style={{ width: '90px' }} />
							<button type="button" className="btn btn-danger ms-2">
								<i className="mdi mdi-cart me-1"></i> Add to cart
							</button>
						</div>
					</div>

					<div className="mt-4">
						<h6 className="font-14">Description:</h6>
						<p>{product.description}</p>
					</div>

					<div className="mt-4">
						<Row>
							<Col md={4}>
								<h6 className="font-14">Available Stock:</h6>
								<p className="text-sm lh-150">{product.stock}</p>
							</Col>
							<Col md={4}>
								<h6 className="font-14">Number of Orders:</h6>
								<p className="text-sm lh-150">{product.noOfOrders}</p>
							</Col>
							<Col md={4}>
								<h6 className="font-14">Revenue:</h6>
								<p className="text-sm lh-150">{product.revenue}</p>
							</Col>
						</Row>
					</div>
				</form>
			</Col>
		</Row>
	);
};

export default Details;
