import PropTypes from "prop-types";
import ListItem from './ListItem/ListItem';

const Listing = ({ items }) => {
	
	return (
		<div className="item-list">
			{items.map((item) =>
				<ListItem item={item} key={item.listing_id} />
			)}
		</div>
	)
}

Listing.propTypes = {
	items: PropTypes.array
}

export default Listing;
