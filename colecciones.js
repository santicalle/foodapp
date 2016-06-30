::::::::::::: USERS :::::::::::::

Users:
{
	_id: ObjectID('AAAA'),
	name: 'Santiago',
	lastName: 'Calle',
	email: 'santiago.calle@hotmail.com',
	password: 'ALKJLKJKJLKJ654864651651', //hash - md5
	
	roles: [
		ObjectID('A17B'),
		ObjectID('A18C'),
		ObjectID('A19H')
	],

	adressess: [
		{ _id: ObjectID('AAAA'), name: 'Casa Cuenca', details: 'Orquideas F#22', latitud: 5578, longitud: 7785 },
		{ _id: ObjectID('AAAA'), name: 'Casa Quito', details: 'Manuel Serrano y Homero Salas', latitud: 514, longitud: 6687 }
	],

	phones: [
		{ _id: ObjectID('AAAA'), name: 'Celular', number: '0998379528' },
		{ _id: ObjectID('AAAA'), name: 'Casa', number: '072898681' }
	]
}

::::::::::::: ROLES :::::::::::::

Roles:
{
	_id: ObjectID('A17B'),
	description: 'Admin'
	isActive: true
},
{
	_id: ObjectID('A18C'),
	description: 'NormalUser'
},
{
	_id: ObjectID('A19H'),
	description: 'CompanyUser'
}

::::::::::::: CATEGORIES :::::::::::::

Categories:
{
	_id: ObjectID('C15B'),
	description: 'Comida Rápida',
	isActive: True
},
{
	_id: ObjectID('C16B'),
	description: 'Comida Peruana',
	isActive: True
},
{
	_id: ObjectID('C17B'),
	description: 'Hamburguesas',
	isActive: True
}

::::::::::::: MENU CATEGORIES :::::::::::::

MenuCategories:
{
	_id: ObjectID('M10A'),
	description: 'Entrada',
	isActive: True
},
{
	_id: ObjectID('M11A'),
	description: 'Plato Fuerte',
	isActive: True
}

::::::::::::: COMPANIES :::::::::::::

Companies:
{
	_id: ObjectID('E20A'),
	name: 'Pizza Hut',
	categories: [ObjectIdSchema],
	isDelivery: False,
	isCash: True,
	isCreditCard: False,
	isActive: True,
	isOpenNow: True,
	timetable: [
        { day: "monday",  open: "09:00", close: "18:00", isClose: False },
        { day: "tuesday", open: "09:00", close: "18:00", isClose: False },
        { day: "wednesday", open: "09:00", close: "18:00", isClose: False },
        { day: "thursday", open: "09:00", close: "18:00", isClose: False },
        { day: "friday", open: "09:00", close: "18:00", isClose: False },
        { day: "saturday", open: "09:00", close: "18:00", isClose: False },
        { day: "sunday", open: "09:00", close: "18:00", isClose: False }
    ]
},
{
	_id: ObjectID('E21A'),
	name: 'Doña Menestra',
	details: 'menestras, carnes asadas',
	openHour: '09:30',
	closeHour: '21:00',
	isDelivery: True,
	isCash: True,
	isCreditCard: True,
	isActive: True
}

::::::::::::: PRODUCTS :::::::::::::

Products:
{
	_id: ObjectID('P01M'),
	name: 'Menestra Casada',
	details: 'Arroz con menestra y carne, papas y salsa de queso.',
	price: 6.45,
	imgUrl: '3RDCOMPANYID|3RDPRODID|3RDNAMEPRODUCT.png',
	isActive: True,
	company: ObjectID('E21A'),
	menuCategory: { _id: ObjectID('M10A'), description: 'Entrada' },
	categories: [
		ObjectID('C15B'),
		ObjectID('C17B')
	]
},
{
	_id: ObjectID('P02M'),
	name: 'Menestra Soltera',
	details: 'Arroz con menestra y chuleta, papas y salsa de queso.',
	price: 7.99,
	imgUrl: '3RDCOMPANYID|3RDPRODID|3RDNAMEPRODUCT.png',
	isActive: True,
	company: ObjectID('E21A'),
	menuCategory: { _id: ObjectID('M11A'), description: 'Plato Fuerte' },
	categories: [
		ObjectID('C15B'),
		ObjectID('C16B'),
		ObjectID('C17B')
	]
}

::::::::::::: OPTIONS TYPES :::::::::::::

OptionTypes:
{
	_id: ObjectID('OT01'),
	description: 'Numerico',
	isActive: True
},
{
	_id: ObjectID('OT02'),
	description: 'Pregunta Si/No',
	isActive: True
},
{
	_id: ObjectID('OT04'),
	description: 'Selección',
	isActive: True
},
{
	_id: ObjectID('OT03'),
	description: 'Texto',
	isActive: True
}

::::::::::::: OPTIONS :::::::::::::

Options:
{
	_id: ObjectID('OP01'),
	product: ObjectID('P02M'),
	optionType: ObjectID('OT04'),
	description: 'Selecciona los vegetales:',
	details: 'Los vegetales de tu hamburguesa.',
	isActive: True,
	items:[
		{ _id: ObjectID('OI01'), description: 'Con Cebolla', order: 1, value: null, isSubCategory: False, isActive: True },
		{ _id: ObjectID('OI02'), description: 'Con Tomate', order: 2, value: null, isSubCategory: False, isActive: True },
		{ _id: ObjectID('OI03'), description: 'Con Lechuga', order: 3, value: null, isSubCategory: False, isActive: True }
	]
},
{
	_id: ObjectID('OP02'),
	product: ObjectID('P02M'),
	optionType: ObjectID('OT02'),
	description: 'Deseas agrandar tu pedido?',
	details: null,
	isActive: True,
	items:[
		{ _id: ObjectID('OI01'), description: 'Si', order: 1, value: 1.50, addToPrice: True, isActive: True }
	]
}

::::::::::::: ORDERS :::::::::::::

Orders{
	_id: ObjectID('OR01'),
	user: { ObjectID('OR01'), address: 'Manuel Serrano y Homero Salas', phone: '0998379528' },
	company: ObjectID('OR01'),
	date: '2016/05/24',
	hour: '22:13',
	isDelivery: True,
	isGoAndFetch: False,
	isCash: True,
	isCreditCard: False,
	isPaidOut: False,
	subTotal: 24.45,
	discount: 0.00,
	IVATax: 2.05,
	total: 27.00,
	isInvoiced: True,
	isActive: True
}

OrderDetails:{
	_id: ObjectID(''),
	order: ObjectID(''),
	user: ObjectID(''),
	product: { _id: ObjectID(''), name: 'Menestra Casada', price: 6.45, quantity: 2, subtotal: 12.90 },
	options:[ 
	{
		_id: ObjectID('OP01'),
		description: 'Deseas agrandar tu pedido?',
		items:[ 
		{
			{ _id: ObjectID('OI01'), description: 'Si', order: 1, value: 1.50, isSubCategory: False }
		} ]
	} ]
},
{
	_id: ObjectID(''),
	order: ObjectID(''),
	product: { _id: ObjectID(''), name: 'Pizza Super Especial', price: 15.50, quantity: 2, subtotal: 31 },
	options:[ 
	{
		_id: ObjectID('OP01'),
		description: 'Tamaño de Pizza',
		items:[ 
			{ _id: ObjectID('OI01'), description: 'Familiar', order: 1, value: 15.50, isSubCategory: True }
		]
	} ]
}