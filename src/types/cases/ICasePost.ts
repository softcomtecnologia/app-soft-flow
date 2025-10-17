type option = {
	value: string,
	label: string
}

export default interface ICasePost {
	product: option;
	project: option;
	version: option;
	category: option;
}