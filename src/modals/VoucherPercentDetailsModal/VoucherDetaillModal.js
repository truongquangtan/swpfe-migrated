import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { TOAST_CONFIG } from '../../constants/default';
import { createVoucher } from '../../services/voucher.service';

const VoucherPercentDetaillModal = ({ voucher, toggleModal, voucherTypeCreate, reloadListVoucherState }) => {

	const [currentVoucher, setCurrentVoucher] = useState({})

	useEffect(() => {
		const initVoucherValue = {
			"type": voucher ? voucher.type : voucherTypeCreate,
			"title":  voucher ? voucher.title : "",
			"description": voucher ? voucher.description : "",
			"discount":  voucher ? voucher.discount : 1,
			"maxQuantity":  voucher ? voucher.maxQuantity : 1,
			"startDate":  voucher ? voucher.startDate : null,
			"endDate":  voucher ? voucher.endDate : null,
		}
		setCurrentVoucher(initVoucherValue)
	}, [])

	const handleVoucherOnChange = (event) => {
		const { name, value } = event.target;
		setCurrentVoucher(previousVoucher => ({
			...previousVoucher,
			[name]: value
		}))
	}

	const handleCreateVoucher = async () => {
		const startDate = convertFormatDate(currentVoucher.startDate);
		const endDate = convertFormatDate(currentVoucher.endDate);
		const voucher = {
			...currentVoucher,
			startDate,
			endDate
		}
		if(!voucher.startDate || !voucher.endDate){
			toast.warn("Start and end date did not empty!", TOAST_CONFIG);
		}

		try{
			const response = await createVoucher(voucher);
			toast.success(response.message, TOAST_CONFIG);
			reloadListVoucherState()
			toggleModal()
		}catch(error){
			console.log(error);
		}
	}

	const convertFormatDate = (date) => String(date).split("-").reverse().join("/");

	return (
		<div className="custom-confirm" style={{ width: "600px" }}>
			<h4>{voucher ? "Voucher Details" : "Create Voucher"}</h4>
			<div>
				<form className="my-3" onSubmit={(e) => {e.preventDefault(); handleCreateVoucher()}}>
					<div className="row p-2">
						<span
							className="col-1 lh-44 signup__icon-wrapper"
						>
							<i class="fas fa-heading"></i>
						</span>
						<input
							className="col-11 outline-none p-2 signup__input-border"
							type="text"
							placeholder="Title voucher ..."
							name='title'
							value={currentVoucher.title}
							onChange={(e) => handleVoucherOnChange(e)}
							required
						/>
					</div>
					<div className="row p-2">
						<span
							className="col-1 lh-44 signup__icon-wrapper"
							title="Code"
						>
							<b>%</b>
						</span>
						<input
							className="col-11 outline-none p-2 signup__input-border"
							type="number"
							placeholder="Discount percent (%)"
							name='discount'
							value={currentVoucher.discount}
							onChange={(e) => handleVoucherOnChange(e)}
							min="1"
							max="100"
						/>
					</div>
					<div className="row p-2">
						<span
							className="col-1 lh-44 signup__icon-wrapper"
							title="Code"
						>
							<i className="fas fa-tags"></i>
						</span>
						<input
							className="col-11 outline-none p-2 signup__input-border"
							type="number"
							placeholder="Quantity"
							name='maxQuantity'
							value={currentVoucher.maxQuantity}
							onChange={(e) => handleVoucherOnChange(e)}
							min="1"
						/>
					</div>
					<div className="row p-2">
						<span
							className="col-1 lh-44 signup__icon-wrapper"
							title="Start Date"
						>
							<i className="far fa-clock"></i>
						</span>
						<input
							className="col-11 outline-none p-2 signup__input-border"
							type="date"
							placeholder="Start date ..."
							required

							value={currentVoucher.startDate}
							name='startDate'
							onChange={(e) => handleVoucherOnChange(e)}
						/>
					</div>
					<div className="row p-2">
						<span
							className="col-1 lh-44 signup__icon-wrapper"
							title="End Date"
						>
							<i className="far fa-clock"></i>
						</span>
						<input
							className="col-11 outline-none p-2 signup__input-border"
							type="date"
							placeholder="End date ..."
							value={currentVoucher.endDate}
							required
							name='endDate'
							onChange={(e) => handleVoucherOnChange(e)}
						/>
					</div>
					<div className="py-2">
						<button
							className="btn btn-primary me-3 px-4"
						>
							{voucher ? "Save" : "Create"}
						</button>
						<button className="btn btn-light" onClick={(e) => {e.preventDefault(); toggleModal()}}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default VoucherPercentDetaillModal