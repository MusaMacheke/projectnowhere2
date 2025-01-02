import '../../scss/Reset.scss';
import { useParams } from 'react-router-dom';
import * as Icon from '@phosphor-icons/react';
import './../../scss/pages/Test_RoomPage.scss';
import useAxios from '../../hooks/useAxios.jsx';
import React, { useEffect, useState } from 'react';
import { days, reviewMap, roomsMock, stayTime } from '../../services/Utils.js';

const TestRoomPage = () => {
	const [night, setNight] = useState(1);
	const [btn, setBtn] = useState('Day');
	const [addGstMdl, setAddGstMdl] = useState(false);
	const [gstQuantity, setGstQuantity] = useState({
		adult: 0,
		children: 0,
		infant: 0,
	});

	const { data, get } = useAxios();

	const params = useParams();
	const roomId = params['*'];

	useEffect(() => {
		get(`https://adminbackend-theta.vercel.app/roommanagement/rooms2/${roomId}`);
	}, [roomId]);

	const roomImages = data?.src.map((img, index) => <img src={img} alt="house" key={index} />);
	const facilities = data?.facility?.map((item, index) => <p key={index}>{item}</p>);

	const updateField = (fieldName, operation) => {
		setGstQuantity((prevQuantity) => ({
			...prevQuantity,
			[fieldName]: operation === 'add' ? prevQuantity[fieldName] + 1 : prevQuantity[fieldName] - 1,
		}));
	};

	return (
		<div className="test_room-page animeRight">
			<div className="tst_room-pg-glr">{roomImages}</div>

			<div className="tst_room-pg-main-ctr ">
				<div className="tst_room-pg-main">
					<div className="tst_room-pg-main-hdr">
						<div className="tst_room-pg-main-hdr-hdr">
							<span>{data?.floor}</span>

							<div>
								<div>
									<Icon.Share />
									Share
								</div>
								<div>
									<Icon.Heart />
									Save
								</div>
							</div>
						</div>

						<h1>{data?.name}</h1>

						<div className="tst_room-pg-main-hdr-rate">
							<div>
								<Icon.Star />
								<p>
									{roomsMock.reviews[0].note} ({roomsMock.reviews.length})
								</p>
							</div>

							<div>
								<Icon.MapPin />
								<p>
									{roomsMock.location}, {roomsMock.country}
								</p>
							</div>
						</div>

						<div className="tst_room-pg-main-hdr-hst">
							<span>{roomsMock.host_information.name.charAt(0)}</span>
							<p>
								Hosted by <strong>{roomsMock.host_information.name}</strong>
							</p>
						</div>

						<div className="tst_room-pg-main-hdr-amt">{facilities}</div>
					</div>

					<div className="tst_room-pg-main-desc">
						<h2>Stay Information</h2>

						<span />

						<p>{data?.description}</p>
					</div>

					<div className="tst_room-pg-main-fclt">
						<div className="main-fclt-title">
							<h2>Amenities</h2>
							<p>About the property's amenities and services</p>
						</div>

						<span />

						<div>{facilities}</div>
					</div>

					<div className="tst_room-pg-main-rates-prices">
						<div className="main-rt-pr-title">
							<h2>Room Rates</h2>
							<p>Prices may increase on weekends or holidays</p>
						</div>

						<span />

						<div className="main-rt-pr-table">
							<div>
								<p>Monday - Thursday</p>
								<p>$199</p>
							</div>
							<div>
								<p>Monday - Thursday</p>
								<p>$199</p>
							</div>
							<div>
								<p>Friday - Sunday</p>
								<p>$219</p>
							</div>
							<div>
								<p>Rent by month</p>
								<p>-8.34 %</p>
							</div>
							<div>
								<p>Minimum number of nights</p>
								<p>1 night</p>
							</div>
							<div>
								<p>Max number of nights</p>
								<p>90 nights</p>
							</div>
						</div>
					</div>

					<div className="tst_room-pg-main-hst">
						<h2>Host Information</h2>

						<span />

						<div className="mn-hst-box">
							<span>{roomsMock.host_information.name.charAt(0)}</span>
							<div>
								<p>
									<strong>{roomsMock.host_information.name}</strong>
								</p>
								<div>
									<Icon.Star />
									<p>4.5 (112)</p>
								</div>
							</div>
						</div>

						<p>{roomsMock.host_information.description}</p>

						<div className="mn-hst-info">
							<div>
								<Icon.Calendar />
								<p>Joined in {roomsMock.host_information.created_at}</p>
							</div>
							<div>
								<Icon.MessengerLogo />
								<p>Response rate - 100%</p>
							</div>
							<div>
								<Icon.Clock />
								<p>Fast response - within a few hours</p>
							</div>
						</div>

						<span />

						<button>See host profile</button>
					</div>

					<div className="tst_room-pg-main-rvw">
						<h2>Reviews ({roomsMock.reviews.length})</h2>

						<span />

						{reviewMap}
					</div>
				</div>

				<div
					style={btn === 'Day' ? { height: '40rem' } : { height: '51rem' }}
					className="tst_room-pg-main-cbk"
				>
					<h1>
						$
						{`${btn === 'Day' ? data?.rate : (Number(data?.rate) / 24).toFixed(2)} / ${
							btn === 'Day' ? 'Night' : 'Hour'
						}`}
					</h1>

					<div className="pg-main-cbk-ctr-btn">
						<button
							style={btn === 'Hour' ? { backgroundColor: '#574efa', color: 'white' } : {}}
							onClick={() => setBtn('Hour')}
						>
							Hour
						</button>
						<button
							style={btn === 'Day' ? { backgroundColor: '#574efa', color: 'white' } : {}}
							onClick={() => setBtn('Day')}
						>
							Day
						</button>
					</div>

					{btn === 'Day' ? (
						<>
							<div className="pg-main-cbk-ctr-dates">
								<Icon.Calendar />
								<div>
									<p>Dec 30</p>
									<span>Check in</span>
								</div>
								-
								<div>
									<p>Dec 31</p>
									<span>Check out</span>
								</div>
							</div>

							<div className="cbk-addgst-btn-ctr">
								<button onClick={() => setAddGstMdl(!addGstMdl)} className="cbk-addgst-btn">
									<p>
										{gstQuantity.adult + gstQuantity.children + gstQuantity.infant > 0
											? ` ${gstQuantity.adult + gstQuantity.children + gstQuantity.infant} Guests`
											: 'Add Guest'}
									</p>

									<Icon.UserPlus />
								</button>

								{addGstMdl && (
									<div className="addgst-mdl animeDown">
										<div className="addgst-mdl-card">
											<div>
												<p>Adults</p>
												<span>Ages 13 or above</span>
											</div>
											<div className="addgst-mdl-ctl">
												<span onClick={() => updateField('adult', '')}>-</span>
												<p>{gstQuantity.adult}</p>
												<span onClick={() => updateField('adult', 'add')}>+</span>
											</div>
										</div>

										<div className="addgst-mdl-card">
											<div>
												<p>Children</p>
												<span>Ages 2 - 12</span>
											</div>
											<div className="addgst-mdl-ctl">
												<span onClick={() => updateField('children', '')}>-</span>
												<p>{gstQuantity.children}</p>
												<span onClick={() => updateField('children', 'add')}>+</span>
											</div>
										</div>

										<div className="addgst-mdl-card">
											<div>
												<p>Infants</p>
												<span>Ages 0 - 2</span>
											</div>
											<div className="addgst-mdl-ctl">
												<span onClick={() => updateField('infant', '')}>-</span>
												<p>{gstQuantity.infant}</p>
												<span onClick={() => updateField('infant', 'add')}>+</span>
											</div>
										</div>
									</div>
								)}
							</div>

							<div className="pg-main-cbk-ctr-prices">
								<div>
									<p>
										${data?.rate} x {night}
									</p>

									<p>${data?.rate * night}</p>
								</div>
								<div>
									<p>Cleaning fees</p>

									<p>$0</p>
								</div>
								<div>
									<p>Weekly discount</p>

									<p style={{ color: '#10b981' }}>-$0</p>
								</div>
							</div>

							<div className="pg-main-cbk-total">
								<div>
									<p>Total</p>
									<span>${data?.rate * night}</span>
								</div>

								<button>Send Proposal</button>
							</div>
						</>
					) : (
						<>
							<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem 0' }}>
								<div className="pg-main-cbk-ctr-days">
									<h4>Select duration</h4>

									<div>{stayTime}</div>
								</div>

								<div>
									<h4>Guests</h4>

									<div className="cbk-addgst-btn-ctr">
										<button onClick={() => setAddGstMdl(!addGstMdl)} className="cbk-addgst-btn">
											<p>
												{gstQuantity.adult + gstQuantity.children + gstQuantity.infant > 0
													? ` ${
															gstQuantity.adult + gstQuantity.children + gstQuantity.infant
													  } Guests`
													: 'Add Guest'}
											</p>

											<Icon.UserPlus />
										</button>

										{addGstMdl && (
											<div className="addgst-mdl animeDown">
												<div className="addgst-mdl-card">
													<div>
														<p>Adults</p>
														<span>Ages 13 or above</span>
													</div>
													<div className="addgst-mdl-ctl">
														<span onClick={() => updateField('adult', '')}>-</span>
														<p>{gstQuantity.adult}</p>
														<span onClick={() => updateField('adult', 'add')}>+</span>
													</div>
												</div>

												<div className="addgst-mdl-card">
													<div>
														<p>Children</p>
														<span>Ages 2 - 12</span>
													</div>
													<div className="addgst-mdl-ctl">
														<span onClick={() => updateField('children', '')}>-</span>
														<p>{gstQuantity.children}</p>
														<span onClick={() => updateField('children', 'add')}>+</span>
													</div>
												</div>

												<div className="addgst-mdl-card">
													<div>
														<p>Infants</p>
														<span>Ages 0 - 2</span>
													</div>
													<div className="addgst-mdl-ctl">
														<span onClick={() => updateField('infant', '')}>-</span>
														<p>{gstQuantity.infant}</p>
														<span onClick={() => updateField('infant', 'add')}>+</span>
													</div>
												</div>
											</div>
										)}
									</div>
								</div>

								<div
									style={{ borderBottom: '1px solid #e1e1e1', paddingBottom: '2rem' }}
									className="pg-main-cbk-ctr-days"
								>
									<h4>Select a day</h4>
									<div>{days}</div>
								</div>

								<div className="pg-main-cbk-total">
									<div>
										<p>Total</p>
										<span>${data?.rate * night}</span>
									</div>

									<button>Send Proposal</button>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default TestRoomPage;
