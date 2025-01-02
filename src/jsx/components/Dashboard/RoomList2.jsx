import '../../../scss/Reset.scss';
import * as Icon from '@phosphor-icons/react';
import './../../../scss/pages/testroomlist.scss';
import React, { useCallback, useEffect, useState } from 'react';
import { rooms } from '../../../services/Utils.js';
import useAxios from '../../../hooks/useAxios.jsx';
import { Link, useNavigate } from 'react-router-dom';
import ListRoomCardModal from '../Modal/ListRoomCardModal/ListRoomCardModal.jsx';
import AddRoomModal from './../Modal/AddRoomModal/AddRoomModal';

const RoomList2 = () => {
	const [addRoomMdl, setAddRoomMdl] = useState(false);
	const [cdModal, setCdModal] = useState({ id: '', open: false });

	const { data, get } = useAxios();
	const navigate = useNavigate();

	const openMdl = (e, id) => {
		e.stopPropagation();

		setCdModal({ id: id, open: true });
	};

	const onClickOutside = (event) => {
		if (event.target === event.currentTarget) {
			setCdModal({ id: '', open: false });
		}
	};

	useEffect(() => {
		if (cdModal.open) {
			document.body.classList.add('loading');
		} else {
			document.body.classList.remove('loading');
		}
	}, [cdModal]);

	useEffect(() => {
		get('https://adminbackend-theta.vercel.app/roommanagement/rooms2');
	}, [get, cdModal.open, addRoomMdl]);

	const roomList2 = useCallback(() => {
		const roomList2 =
			data &&
			data?.map((room) => {
				const facilities = room.facility.map((fc, index) => <p key={index}>{fc}</p>);

				return (
					<div
						key={room.id}
						onClick={() => navigate(`/room/${room._id}`)}
						className="t_r-list-card animeLeft"
					>
						<div className="t_r-list-cd-info">
							<img src={room.src[0]} alt="room" />

							<div>
								<p>Entire room in New York</p>
								<h3>{room.name}</h3>
								<div className="t_r-list-cd-amt">{facilities}</div>
							</div>
						</div>
						<div className="t_r_list-cd-rate">
							<div>
								<p>
									${room.rate} <span>/night</span>
								</p>

								<p>{room.room_type} bed</p>
							</div>

							<div className="t_r_list-cd-rt-lc">
								<p>{room.floor}</p>
								{room.status ? (
									<span style={{ backgroundColor: '#68e365' }}>Available</span>
								) : (
									<span style={{ backgroundColor: '#e23428' }}>Booked</span>
								)}
							</div>
						</div>

						<div onClick={(e) => openMdl(e, room._id)} className="t_r-list-cd-dot">
							<Icon.DotsThreeVertical />
						</div>
					</div>
				);
			});

		return roomList2;
	}, [data, cdModal.open]);

	return (
		<div className="t_r-list-ctr">
			<button onClick={() => setAddRoomMdl(true)} className="add-room-btn">
				<Icon.Plus />
				<p>New room</p>
			</button>

			{roomList2()}

			<>
				{cdModal.open && (
					<ListRoomCardModal id={cdModal.id} onClickOutside={onClickOutside} setCdModal={setCdModal} />
				)}

				{addRoomMdl && <AddRoomModal setAddRoomMdl={setAddRoomMdl} />}
			</>
		</div>
	);
};
export default RoomList2;
