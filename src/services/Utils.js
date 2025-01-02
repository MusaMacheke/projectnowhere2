import * as Icon from '@phosphor-icons/react';

export const roomsMock = {
	id: 12341225,
	src: [
		'https://cf.bstatic.com/xdata/images/hotel/max1024x768/399258222.jpg?k=583875a8c316916c3bdfc2567f5e4ea5f5d973b6885d170f85ab6424159cd220&o=&hp=1',
		'https://cf.bstatic.com/xdata/images/hotel/max1024x768/399258242.jpg?k=175ca0149974414b4a995f72800a0dc355aaea952241f88cd8011009ac932226&o=&hp=1',
		'https://cf.bstatic.com/xdata/images/hotel/max1024x768/399258252.jpg?k=2287d12c07b80ec235425c8e86b0ff560b512e4885c00a6497ae029ad0c262d1&o=&hp=1',
		'https://cf.bstatic.com/xdata/images/hotel/max1024x768/399258221.jpg?k=2c2b461ffc484a43b44553e6a2e1ac971da808ba32979e85fff006a78bad0e7c&o=&hp=1',
		'https://cf.bstatic.com/xdata/images/hotel/max1024x768/356157390.jpg?k=02e0f66429a5d3dcc7daa346d15eb77cbb7c2ed75ca353bdfd2bcd6be3ffbfd8&o=&hp=1',
	],
	name: 'Beach House in Collingwood',
	room_floor: 'Room Floor',
	rate: 145,
	status: true,
	description:
		'Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided. There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.',
	facility: ['AC', 'Shower', 'Double Bed', 'Towel', 'Bathup', 'Coffee Set', 'LED TV', 'Wifi'],
	rooms: ['2 bedrooms', '3 bathrooms', 'Studio', 'Kitchen', 'Living room'],
	host_information: {
		name: 'Kevin Francis',
		description:
			'Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities...',
		created_at: '01/05/2016',
	},
	reviews: [
		{
			name: 'Cody Fisher',
			created_at: '01/01/2021',
			description:
				'There’s no stopping the tech giant. Apple now opens its 100th store in China. There’s no stopping the tech giant.',
			note: 4,
		},
		{
			name: 'Cody Fisher',
			created_at: '01/01/2021',
			description:
				'There’s no stopping the tech giant. Apple now opens its 100th store in China. There’s no stopping the tech giant.',
			note: 4,
		},
		{
			name: 'Cody Fisher',
			created_at: '01/01/2021',
			description:
				'There’s no stopping the tech giant. Apple now opens its 100th store in China. There’s no stopping the tech giant.',
			note: 4,
		},
		{
			name: 'Cody Fisher',
			created_at: '01/01/2021',
			description:
				'There’s no stopping the tech giant. Apple now opens its 100th store in China. There’s no stopping the tech giant.',
			note: 4,
		},
		{
			name: 'Cody Fisher',
			created_at: '01/01/2021',
			description:
				'There’s no stopping the tech giant. Apple now opens its 100th store in China. There’s no stopping the tech giantrate: 4.',
		},
	],
	location: 'New York',
	country: 'USA',
};

export const daysArray = [
	{ dayOfWeek: 'Sun', dayOfMonth: 1 },
	{ dayOfWeek: 'Mon', dayOfMonth: 2 },
	{ dayOfWeek: 'Tue', dayOfMonth: 3 },
	{ dayOfWeek: 'Wed', dayOfMonth: 4 },
	{ dayOfWeek: 'Thu', dayOfMonth: 5 },
];

export const stayDuration = ['1', '2', '4', '8', '12'];

export const type = [
	{ value: 'Deluxe', label: 'Deluxe' },
	{ value: 'Premium', label: 'Premium' },
	{ value: 'Standard', label: 'Standard' },
];
export const floor = [
	{ value: 'A-1', label: 'A-2' },
	{ value: 'A-2', label: 'A-2' },
	{ value: 'A-3', label: 'A-3' },
	{ value: 'B-1', label: 'B-1' },
	{ value: 'B-2', label: 'B-2' },
	{ value: 'B-3', label: 'B-3' },
	{ value: 'C-1', label: 'C-1' },
	{ value: 'C-2', label: 'C-2' },
	{ value: 'C-3', label: 'C-3' },
];
export const bedType = [
	{ value: 'Single', label: 'Single' },
	{ value: 'Double', label: 'Double' },
	{ value: 'Triple', label: 'Triple' },
];
export const status = [
	{ value: true, label: 'Available' },
	{ value: false, label: 'Booked' },
];
export const roomFacilities = [
	{ value: 'Bed', label: 'Bed' },
	{ value: 'Bathroom', label: 'Bathroom' },
	{ value: 'Tv', label: 'TV' },
	{ value: 'WiFi', label: 'WiFi' },
	{ value: 'Ac/Heating', label: 'AC/Heating' },
	{ value: 'Safe', label: 'Safe' },
	{ value: 'Minibar', label: 'Minibar' },
	{ value: 'Workspace', label: 'Workspace' },
	{ value: 'Phone', label: 'Phone' },
	{ value: 'Coffee/Tea', label: 'Coffee/Tea Maker' },
	{ value: 'HairDryer', label: 'Hair Dryer' },
	{ value: 'Balcony/Terrace', label: 'Balcony/Terrace' },
	{ value: 'Room Service', label: 'Room Service' },
];
export const rNumber = [
	{ value: '101', label: '101' },
	{ value: '102', label: '102' },
	{ value: '103', label: '103' },
	{ value: '104', label: '104' },
	{ value: '105', label: '105' },
	{ value: '106', label: '106' },
	{ value: '107', label: '107' },
	{ value: '108', label: '108' },
	{ value: '109', label: '109' },
	{ value: '201', label: '201' },
	{ value: '202', label: '202' },
	{ value: '203', label: '203' },
	{ value: '204', label: '204' },
	{ value: '205', label: '205' },
	{ value: '206', label: '206' },
	{ value: '207', label: '207' },
	{ value: '208', label: '208' },
	{ value: '209', label: '209' },
	{ value: '301', label: '301' },
	{ value: '302', label: '302' },
	{ value: '303', label: '303' },
	{ value: '304', label: '304' },
	{ value: '305', label: '305' },
	{ value: '306', label: '306' },
	{ value: '307', label: '307' },
	{ value: '308', label: '308' },
	{ value: '309', label: '309' },
	{ value: '401', label: '401' },
	{ value: '402', label: '402' },
	{ value: '403', label: '403' },
	{ value: '404', label: '404' },
	{ value: '405', label: '405' },
	{ value: '406', label: '406' },
	{ value: '407', label: '407' },
	{ value: '408', label: '408' },
	{ value: '409', label: '409' },
];
export const prices = Array.from({ length: (500 - 100) / 25 + 1 }, (_, index) => ({
	value: 100 + index * 25,
	label: 100 + index * 25,
}));
export const reviewMap = roomsMock.reviews.map((review) => (
	<div className="tst_room-rvw-card">
		<span>{roomsMock.host_information.name.charAt(0)}</span>

		<div className="rvw-card-main">
			<div className="rvw-card-mn-hdr">
				<div>
					<p>{review.name}</p>
					<p>{review.created_at}</p>
				</div>
				<div>
					<p>{review.note}</p>
					<Icon.Star />
				</div>
			</div>

			<div>{review.description}</div>
		</div>
	</div>
));
export const days = daysArray.map((day) => (
	<div>
		<p>{day.dayOfWeek}</p>
		<span>{day.dayOfMonth}</span>
	</div>
));
export const stayTime = stayDuration.map((item) => (
	<div>
		<p>{item}</p>
		<span>hour</span>
	</div>
));
export const fakeImg = [
	'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
