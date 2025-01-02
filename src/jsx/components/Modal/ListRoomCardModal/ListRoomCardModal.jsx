import './ListRoomCardModal.scss';
import '../../../../scss/Reset.scss';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomSelect from './../../Forms/CustomSelect/CustomSelect';
import useAxios from '../../../../hooks/useAxios';
import * as Icon from '@phosphor-icons/react';
import DeleteRoomModal from '../DeleteRoomModal/DeleteRoomModal';
import { bedType, floor, prices, rNumber, roomFacilities, status, type } from '../../../../services/Utils';

const ListRoomCardModal = ({ id, onClickOutside, setCdModal }) => {
	const [deleteMdl, setDeleteMdl] = useState(false);
	const [srcModal, setSrcModal] = useState(false);

	const roomData = useAxios();
	const { handleSubmit, control } = useForm();

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
			name: data?.roomName?.value && `${data?.roomType?.value} ${data?.roomFloor?.value}${randomSequence}`,
			room_type: data?.roomBedType?.value,
			rate: data?.roomPrices?.value,
			status: data?.roomStatus?.value,
			facility: fc.length > 0 ? fc : undefined,
			floor: data?.roomFloor?.value,
		};

		await roomData.put(`https://adminbackend-theta.vercel.app/roommanagement/rooms2/edit/${id}`, body);

		setCdModal({ id: '', open: false });
	};

	useEffect(() => {
		roomData.get(`https://adminbackend-theta.vercel.app/roommanagement/rooms2/${id}`);
	}, [id]);

	const imgMdl = roomData?.data?.src.map((img, index) => (
		<div key={index}>
			<img src={img} alt="room" />
			<button>
				<Icon.Trash />
			</button>
		</div>
	));

	return (
		<>
			<div onClick={onClickOutside} className="lr-cd-mdl-ctr">
				<div className="lr-cd-mdl">
					<div className="lr-cd-mdl-title">
						<p>Edit room</p>
						<button onClick={() => setDeleteMdl(true)}>Delete</button>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="lr-cd-mdl-inpt">
						<div className="lr-cd-mdl-inpt-sct1">
							<CustomSelect
								control={control}
								name="roomType"
								label="Type"
								options={type}
								defaultValue=""
							/>

							<CustomSelect
								control={control}
								name="roomFloor"
								label="Floor"
								options={floor}
								defaultValue={''}
							/>

							<CustomSelect
								control={control}
								name="roomPrices"
								label="Rate"
								options={prices}
								defaultValue={''}
							/>
						</div>

						<div className="lr-cd-mdl-inpt-sct2">
							<CustomSelect
								control={control}
								name="roomBedType"
								label="Rooms"
								options={bedType}
								defaultValue={''}
							/>

							<CustomSelect
								control={control}
								name="roomStatus"
								label="Status"
								options={status}
								defaultValue={''}
							/>

							<CustomSelect
								control={control}
								name="roomNumber"
								label="Number"
								options={rNumber}
								defaultValue={''}
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
								defaultValue={''}
							/>
						</div>

						<div onClick={() => setSrcModal(!srcModal)} className="lr-cd-mdl-inpt-sct4">
							<>
								<label>
									Images-href <span>(Provisional) </span>
								</label>
								<input />
								<button>Add</button>
							</>

							{srcModal && <div className="imgMdl">{imgMdl}</div>}
						</div>

						<button className="lr-cd-mdl-button">Update room</button>
					</form>
				</div>
			</div>

			{deleteMdl && (
				<DeleteRoomModal
					setDeleteMdl={setDeleteMdl}
					setCdModal={setCdModal}
					id={id}
					deleteMdl={deleteMdl}
				/>
			)}
		</>
	);
};

export default ListRoomCardModal;
