const productsArray = [
	{
		id: "price_1Lx9t3CgiCRoCws4SrTKZylW",
		title: "Coffee",
		price: 3.99,
	},
	{
		id: "price_1Lx9vWCgiCRoCws4ldJDBRYK",
		title: "Sunglasses",
		price: 8.99,
	},
	{
		id: "price_1Lx9wxCgiCRoCws43sHYriVo",
		title: "Camera lens",
		price: 45.99,
	},
];

function getProductData(id) {
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		console.log("Product daa does not exist for ID: " + id);
		return undefined;
	}

	return productData;
}

export { productsArray, getProductData };
