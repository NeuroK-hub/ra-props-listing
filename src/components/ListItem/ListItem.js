import propTypes from "prop-types";

const ListItem = (props) => {
	const { state, url, MainImage, title, currency_code, price, quantity } = props.item;

	let cutTitle = '';
	let currencyPrice = `${price} ${currency_code}`;
	let quantityLevel ='';
	
	
	if (state !== 'active') {
		return null;
	}

	if (title.lenght > 50) {
		cutTitle = title.slice(0, 50) + '...';
	}


	if (currency_code === 'USD') {
		currencyPrice = `$${ price }`;
	}
	if (currency_code === 'EUR') {
		currencyPrice = `€${ price }`
	}

	if (quantity <= 10) {
		quantityLevel = 'level-low';
	}
	if (quantity > 10 && quantity <= 20) {
		quantityLevel = 'level-medium';
	}
	if (quantity > 20) {
		quantityLevel = 'level-high';
	}



	return (
		<div className = "item">
			<div className = "item-image">
				<a href = {url}>
					<img src = {MainImage.url_570xN} alt = "main img item" />
				</a>
			</div>
			<div className = "item-details"> 
				<p className ="item-title">{cutTitle ? cutTitle : title}</p>
				<p className = "item-price">{currencyPrice}</p>
				<p className = {"item-quantity " + quantityLevel}>{quantity} left</p>
			</div>
		</div>
	)
}

ListItem.propTypes = {
		listing_id: propTypes.number,
		url: propTypes.string,
		MainImage: propTypes.shape({
			url_570xN : propTypes.string
		}),
		title : propTypes.string,
		currency_code: propTypes.string,
		price: propTypes.string,
		quantity: propTypes.number
}

export default ListItem;
