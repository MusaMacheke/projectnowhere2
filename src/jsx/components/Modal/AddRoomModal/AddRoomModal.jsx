import '../../../../scss/Reset.scss';
import React, { useCallback, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Icon from '@phosphor-icons/react';
import useAxios from '../../../../hooks/useAxios';
import './../ListRoomCardModal/ListRoomCardModal.scss';
import CustomSelect from './../../Forms/CustomSelect/CustomSelect';
import { bedType, floor, prices, rNumber, roomFacilities, status, type } from '../../../../services/Utils';
import { fakeImg } from './../../../../services/Utils';

const AddRoomModal = ({ setAddRoomMdl }) => {
	const [imgInput, setImgInput] = useState('');

	let imgArr = [];

	const roomData = useAxios();
	const { handleSubmit, control } = useForm();

	const onClickOutside = (event) => {
		if (event.target === event.currentTarget) {
			setAddRoomMdl(false);
		}
	};

	const onSubmit = async (data) => {
		let fc = [];

		if (data?.facilities?.length > 0) {
			for (let i = 0; i < data.facilities.length; i++) {
				fc.push(data.facilities[i]?.value);
			}
		}

		const randomSequence = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
		const body = {
			number: data?.roomNumber?.value,
			name: `${data?.roomType?.value} ${data?.roomFloor?.value}${randomSequence}`,
			room_type: data?.roomBedType?.value,
			description: 'Sala Bonita',
			rate: data?.roomPrices?.value,
			status: data?.roomStatus?.value,
			facility: fc.length > 0 ? fc : undefined,
			floor: data?.roomFloor?.value,
			src: fakeImg,
		};

		console.log(body);

		await roomData.post(`https://adminbackend-theta.vercel.app/roommanagement/rooms2/create`, body);

		setAddRoomMdl(false);
	};

	const handleChangeImgInpt = ({ target }) => {
		setImgInput(target.value);
	};
	const handleAddImg = (e) => {
		e.stopPropagation();

		imgArr.push([...imgArr, imgInput]);
		setImgInput('');

		console.log(imgArr);
		console.log(imgInput);
	};

	return (
		<div onClick={onClickOutside} className="lr-cd-mdl-ctr">
			<div className="lr-cd-mdl">
				<div className="lr-cd-mdl-title">
					<p>Add room</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="lr-cd-mdl-inpt">
					<div className="lr-cd-mdl-inpt-sct1">
						<CustomSelect
							control={control}
							name="roomType"
							label="Type"
							options={type}
							required={'Fill in this field'}
						/>

						<CustomSelect
							control={control}
							name="roomFloor"
							label="Floor"
							options={floor}
							required={'Fill in this field'}
						/>

						<CustomSelect
							control={control}
							name="roomPrices"
							label="Rate"
							options={prices}
							required={'Fill in this field'}
						/>
					</div>

					<div className="lr-cd-mdl-inpt-sct2">
						<CustomSelect
							control={control}
							name="roomBedType"
							label="Rooms"
							options={bedType}
							required={'Fill in this field'}
						/>

						<CustomSelect
							control={control}
							name="roomStatus"
							label="Status"
							options={status}
							required={'Fill in this field'}
						/>

						<CustomSelect
							control={control}
							name="roomNumber"
							label="Number"
							options={rNumber}
							required={'Fill in this field'}
						/>
					</div>

					<div className="lr-cd-mdl-inpt-sct3">
						<CustomSelect
							control={control}
							name="facilities"
							label="Facilities"
							options={roomFacilities}
							isMulti={true}
							isClearable={true}
							required={'Fill in this field'}
						/>
					</div>

					<div className="lr-cd-mdl-inpt-sct4">
						<>
							<label>
								Images-href <span>(Disabled) ({imgArr.length})</span>
							</label>
							<input />
							<button type="button" onClick={handleAddImg}>
								Add
							</button>
						</>
					</div>

					<button type="submit" className="lr-cd-mdl-button">
						Add room
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddRoomModal;
