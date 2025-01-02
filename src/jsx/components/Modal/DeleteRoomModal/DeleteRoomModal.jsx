import React from 'react';
import './DeleteRoomModal.scss';
import * as Icon from '@phosphor-icons/react';
import '../../../../scss/Reset.scss';
import useAxios from '../../../../hooks/useAxios';

const DeleteRoomModal = ({ setDeleteMdl, setCdModal, id, deleteMdl }) => {
	const { deleteReq } = useAxios();

	const onClickOutside = (event) => {
		if (event.target === event.currentTarget) {
			setDeleteMdl(false);
		}
	};

	const deleteRoom = async () => {
		await deleteReq(`https://adminbackend-theta.vercel.app/roommanagement/rooms2/delete/${id}`);

		setDeleteMdl(false);
		setCdModal(false);
	};

	return (
		<div onClick={onClickOutside} className="dlt-r-mdl-ctr reset">
			<div className="dlt-r-mdl">
				<div className="dlt-r-mdl-icon">
					<Icon.Warning />
				</div>

				<div className="dlt-r-mdl-main">
					<h3>Are you sure?</h3>
					<p>This action cannot be undone. All values associated with this room will be lost</p>
				</div>

				<div className="dlt-r-mdl-btns">
					<button onClick={deleteRoom}>Delete room</button>
					<button onClick={() => setDeleteMdl(false)}>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteRoomModal;
